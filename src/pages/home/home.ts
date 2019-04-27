import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  casas = []

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/api/v1/materias/').subscribe(data =>{
      console.log(JSON.stringify(data))
    }, error =>{
      console.log(JSON.stringify(error))
    });
  }

}
