import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './customer.model';
import { CustomerRepository } from './repository.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custtable',
  templateUrl: './custtable.component.html',
  styleUrls: ['./custtable.component.css'],
})
export class CusttableComponent implements OnInit {
  custRepo: CustomerRepository;
  customers: Customer[];
  stringJson: any;
  posts;
  headers = [
    'Customer Name',
    'Project Name',
    'Global Master',
    'Indicator',
    'Technical Person',
    'Forcast Generated',
    'Actions ',
  ];
  datahdr = [
    'custname',
    'custProjName',
    'custGlobMaster',
    'custIndicator',
    'custTechPerson',
    'custForcastGenerated',
  ];
  // userLogged: String;
  constructor(private router: Router) {
    // this.userLogged = localStorage.getItem('username');
  }

  ngOnInit(): void {}

  myFunction() {
    const id = document.getElementById('myDropdown');
    document.getElementById('myDropdown').classList.toggle('show');
    console.log(id);
  }
  buttonClick(): void {
    console.log('Hello');

    this.custRepo = new CustomerRepository();
    this.stringJson = this.custRepo.getJSONCustomers('dummy');
    console.log(JSON.parse(this.stringJson));
    console.log('MushEnd');
    this.posts = JSON.parse(this.stringJson);
    console.log(this.posts);
    //  JSON.parse(this.stringJson.forEach(element => {
    //   console.log(element.custname)  }));
  }
  // loggedOut() {
  //   localStorage.removeItem('userEmail');
  //   console.log('logging out');
  // }

  @ViewChild('select') select: HTMLSelectElement;
  onChange() {
    console.log('Mush :' + this.select);
    if (this.select.value != null) {
    } else {
    }
  }

  loggedOut() {
    console.log('Logging out:' + localStorage.getItem('username'));
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}
