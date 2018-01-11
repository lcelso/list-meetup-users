import { Component, Input, OnInit , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-list-meetup-users',
  templateUrl: './list-meetup-users.component.html',
  styleUrls: ['./list-meetup-users.component.scss']
})
export class ListMeetupUsersComponent implements OnInit {

  @Input() data;

  modalIsOpen = false;

  item;

  ngOnInit() {
  }

  openModal(img) {
    this.item = img;
    this.modalIsOpen = true;
  }

}
