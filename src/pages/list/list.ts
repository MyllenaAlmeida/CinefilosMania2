import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  movies = ['teste1', 'teste2', 'teste3'];
  element: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  //Funções do Modal

  //Funções da lista
  addMovie() {
    this.movies.push(this.element);
  }

  deleteMovie(i) {
    console.log('deletou');
    this.movies.splice(i, 1);
  }
}

