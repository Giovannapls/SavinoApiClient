import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { actor } from '../models/actor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  atoresRequest: Observable<any>;
  listaAtores: Array<actor> = new Array<actor>();
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    
    this.atoresRequest = this.httpClient.get('http://localhost:5000/api/actors/ConsultarAtores')
    this.atoresRequest
    .subscribe(data => {
      this.listaAtores = data
    })

}
}
