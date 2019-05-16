import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie'

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public object_feed = {

  }
  public listMovies = new Array<any>();

constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  private movieProvider: MovieProvider
) {
}

ionViewDidLoad() {
  this.movieProvider.getLatestMovies().subscribe(
    data => {
      const response = data;
      this.listMovies = response['results'];
      console.log(this.listMovies);
    },
    error => {
      console.log(error);
    }
  )
}

}
