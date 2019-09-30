import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  getAllPersons() {
    return this.httpClient.get(environment.personApiUrl + 'person');
  }

  // type = firstname or lastname
  findByName(type: string, name: string) {
    return this.httpClient.get(environment.personApiUrl + `person/${type}/${name}`);
  }
}
