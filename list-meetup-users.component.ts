import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-meetup-users',
  templateUrl: './list-meetup-users.component.html',
  styleUrls: ['./list-meetup-users.component.scss']
})
export class ListMeetupUsersComponent implements OnInit {

  @Input() data;
  value;
  open = false;

  ngOnInit() {
  }

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


