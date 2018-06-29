import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // paises: any[] = [];
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
    this.newSongs = data;
    this.loading = false;
    // console.log(this.newSongs);
    }, (serviceError) => {
      this.loading = false;
      this.error = true;
      this.messageError = serviceError.error.error.message;
    });


    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp: any) => {
    //   this.paises = resp;
    //   console.log(resp); });
  }

  ngOnInit() {
  }

}
