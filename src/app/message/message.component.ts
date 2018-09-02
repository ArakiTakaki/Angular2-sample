import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  //ステータスのバインドを行いたいので、publicに設定する必要がある。
  constructor(public messageService :MessageService ) {}

  ngOnInit() {
  }

}
