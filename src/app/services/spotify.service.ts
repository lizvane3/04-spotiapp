import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Without this line you must import the service in app.module
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBjqtwW3qyXH9ffauGfNfRDoCPNd2xBiYbobzQKDFq1lUxSUnAUgjOkWmboAjZ0BrVQnS5jI7PWgn0ywi8'
    });
    return this.http.get(url, {headers});
  }
  getNewReleases() {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBRYTbmO6GYjeagMBnYs6P27fHHiLsasg2X05HE1Lp1g4iSwvxO_H3g9GJsBpyHkqK29Qx_bypfnVwQ1Fs'
    // });
    return this.getQuery('browse/new-releases?limit20').pipe(map(data => data['albums'].items));
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    // .pipe(map(data => data['albums'].items));
  }

  getArtists(word: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQATExMjX4mHh64rh-pzWn2stykKwm_2p2zfD_endM-0-eH12D1rB5lBU3cmmaz9nrXxXDwrISKxzNziRF8'
    // });
    return this.getQuery(`search?q=${ word }&type=artist&limit=15`).pipe( map(data =>  data['artists'].items));
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ word }&type=artist&limit=15`, {headers})
    // .pipe( map(data =>  data['artists'].items));
  }

  getArtist(id: string) {

    return this.getQuery(`artists/${ id }`); // .pipe( map(data =>  data['artists'].items));

  }
  getTopTracks(id: string) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map(data =>  data['tracks']));

  }
}
