import {Component, Input, OnInit} from '@angular/core';
import {PersonService} from "../service/person.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  personList: any[] = [];
  nameSearchForm: FormGroup;

  personServiceSubscription: Subscription;

  constructor(
      private personService: PersonService,
      private formBuilder: FormBuilder) {
    this.nameSearchForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    this.personList = [];
    const name = data.name;

    this.personService.findByName('firstname', name).toPromise().then(data => {
        this.personList.push(data);
    });

    this.personService.findByName('lastname', name).toPromise().then(data => {
      this.personList.push(data);
    });
  }

}
