import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonService} from "../service/person.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {

  personList: any = [];

  personServiceSubscription: Subscription;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personServiceSubscription = this.personService.getAllPersons().subscribe(data => {
      this.personList = data;
    });
  }

  ngOnDestroy() {
    this.personServiceSubscription.unsubscribe();
  }

}
