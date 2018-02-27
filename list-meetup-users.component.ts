import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-meetup-users',
  templateUrl: './list-meetup-users.component.html',
  styleUrls: ['./list-meetup-users.component.scss']
})
export class ListMeetupUsersComponent {

  @Input() data;

  value;

  open = false;

  openModal(data) {
    this.open = true;
    this.value = data;
  }

  closeModal($event) {
    if ($event.closeModal) {
      this.open = false;
    }
  }

}


