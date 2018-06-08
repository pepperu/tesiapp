import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactService } from './contact.service';
 
@Component({
  selector: 'page-phonebook',
  templateUrl: 'phonebook.html'
})
export class PhoneBook {

  contacts: any;

  constructor(public navCtrl: NavController, private contactService: ContactService) {
    this.contactService.getContacts()
      .subscribe(data => {
        this.contacts = data;
        console.log(this.contacts);
      }, error => {
        console.log(error);
      });
  }

}
