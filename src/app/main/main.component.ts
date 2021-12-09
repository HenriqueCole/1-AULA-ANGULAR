import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }
  name = "";
  surname = "";
  birthDate = undefined;
  listPersons = [];
  ngOnInit() {
  }


  registerPerson() {
    let person = {
      name: this.name,
      surname: this.surname,
      birthDate: this.birthDate
    }

    this.listPersons.push(person)

    this.name = "";
    this.surname = "";
    this.birthDate = undefined;
  }

  selectPerson(personData, indexPerson){
    this.name = personData.name;
    this.surname = personData.surname;
    this.birthDate = personData.birthDate;
    this.listPersons.splice(indexPerson, 1)
}

  deletePerson(indexPerson){
    this.listPersons[indexPerson].deleted = true;
  }
  
  restorePerson(indexPerson){
    delete this.listPersons[indexPerson].deleted;
  }

  clickPerson(evento){
    console.log('Meu evento é: ', evento);
  }

  
}
