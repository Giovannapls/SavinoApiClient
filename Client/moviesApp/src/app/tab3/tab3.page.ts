import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../models/configUrl';
import { director } from '../models/director';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  diretoresRequest: Observable<any>;
  listaDiretores: Array<director> = new Array<director>();
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    
    this.diretoresRequest = this.httpClient.get(API_ENDPOINT+'/api/directors/ConsultarDiretores')
    this.diretoresRequest
    .subscribe(data => {
      this.listaDiretores = data
    })

}
}
