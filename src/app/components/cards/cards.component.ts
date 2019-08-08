import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showArtist(item: any) {
    let artistID: any;

    if (item.type === 'artist') {
      artistID = item.id;
    } else {
      artistID = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistID]);
  }

}
