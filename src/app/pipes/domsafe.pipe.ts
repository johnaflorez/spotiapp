import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domsafe'
})
export class DomsafePipe implements PipeTransform {

constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string): any {
    const URL = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(URL + value);
  }

}
