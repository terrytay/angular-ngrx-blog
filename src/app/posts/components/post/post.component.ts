import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-post',
  styles: [''],
  template: `<div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <p>{{ post.timestamp.toDate() | date:'yyyy/MM/dd h:mm:ss a' }}</p>
    <button (click)="remove.emit(post.id)">Delete</button>
  </div>`
})
export class PostComponent implements OnInit {
  @Input() post;
  @Output() remove = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
