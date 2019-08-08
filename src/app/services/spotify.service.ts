import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBqPlSBWJRBjeqI_LrD0TmfA531Tv52hoYMphXeoAnqPFRjUc84F8sNx4SHMBvD2KetUVyLI0oIRDRETcM'
    });
    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => {
      return data.albums.items;
    }));
  }

  getArtists(searcher: string) {
    return this.getQuery(`search?q=${ searcher }&type=artist&limit=15`).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => {
      return data.tracks;
    }));
  }
}
