import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
   }

   getArtist(id: string) {
     this.loading = true;
    this.spotify.getArtist(id).subscribe(data => {
      // console.log(data);
      this.artista = data;
      this.loading = false;
    });
   }

   getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe( data => {
      console.log(data);
      this.topTracks = data;
    });
   }


}
