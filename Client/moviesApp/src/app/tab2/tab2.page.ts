import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { director } from '../models/director';
import { movie } from '../models/movie';

@Component({
  selector: 'teste',
  templateUrl: 'tab2.page.html',
})
export class Tab2Page {
  moviesRequest: Observable<any>;
  listaFilmes: Array<movie> = new Array<movie>();
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    
    this.moviesRequest = this.httpClient.get('http://localhost:5000/api/movies/ConsultarFilmes')
    this.moviesRequest
    .subscribe(data => {
      this.listaFilmes = data
    })
}
}

