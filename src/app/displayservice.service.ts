import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  ZIP: number;
  abt_Campus: string;
  city: string;
  dat: string;
  e_Mail: string;
  first_name: string;
  id: number;
  last_name: string;
  recommendation: string;
  state: string;
  street_Addr: string;
  tel_NO: number;
  uni_Ist: string;
}


@Injectable()
export class DisplayService {

 // configUrl = 'assets/testing.json';

  constructor(private httpClient: HttpClient) {

   }

   reqUrl = 'https://ffpktcedbf.execute-api.us-east-1.amazonaws.com/Prod/survey'

   public getNews(){
    console.log("insidegeNews");
    return this.httpClient.get(`https://acxa1pgvej.execute-api.us-east-1.amazonaws.com/production/survey`);
    
  }

  async getConfig(){
    let jsonobj;
    jsonobj = await(await fetch(this.reqUrl)).json();
    console.log(jsonobj);
    return this.httpClient.get(this.reqUrl);
  }

  /*getConfig() {
    console.log("Did I reach here???");
    return this.httpClient.get(this.configUrl);
  }*/
  
  

}
