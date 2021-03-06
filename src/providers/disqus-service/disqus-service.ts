import { Injectable, Input } 						  from '@angular/core';
import { Http, Response } 					      from '@angular/http';
import 										                'rxjs/add/operator/map';
import 										                'rxjs/add/operator/do';
import { Observable } 						        from 'rxjs/Observable';

import { XpnkDisqusion }                   from '../../pages/xpnkDisqusion';
import { XpnkMemberDisqusions }            from '../../pages/xpnkMemberDisqusions';

/*
  Generated class for the DisqusService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class DisqusServiceProvider {

  private url:  string = "https://xapnik.com/data/dangerladies_disqus.json";

  constructor(private http: Http) {
    console.log('I am DisqusServiceProvider Provider');
  }

  getDisqusions(){
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
