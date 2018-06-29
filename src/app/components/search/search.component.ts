import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artistas: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotify: SpotifyService) {
    this.error = false;
  }

  search(word: string) {
    if (word.length > 0 ) {
      this.loading = true;
      this.spotify.getArtists(word).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
       // console.log(this.artistas);
        }, (serviceError) => {
          this.loading = false;
          this.error = true;
          this.messageError = serviceError.error.error.message;
        });
    }
  }
}
