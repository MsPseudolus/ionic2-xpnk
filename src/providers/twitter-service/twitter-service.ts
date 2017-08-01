import { Injectable } 						                      from '@angular/core';
import { Http, Response } 							                from '@angular/http';
import 										                              'rxjs/add/operator/map';
import 										                              'rxjs/add/operator/do';
import { Observable } 						                      from 'rxjs/Observable';

/*
  Generated class for the TwitterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class TwitterServiceProvider {

  private url:  string = "https://xapnik.com/data/dangerladies_tweets.json";

  constructor(private http: Http) {
    console.log('I am TwitterServiceProvider Provider');
  }

    getTweets(){
  	return this.http.get(this.url)
  	.do( ( res: Response ) => console.log( res ) )
  	.map( this.extractData )
  	.catch(this.catchError);
  }

  private catchError( error: Response | any ) {
		console.log( error );
		return Observable.throw( error.json().error || "http.get error in group-members-service");
	}

	private extractData( res: Response ) {
		return res.json();
	}

}
