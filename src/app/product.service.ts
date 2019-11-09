import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

// required for a service to worker
// aka dependancy injection
@Injectable()
export class ProductService {
  //injecting an instance of a service into a class
  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) { 
  }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
    .map(response => response.json())
  }

}
