import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-user-item',
    templateUrl: './app.user.item.html',
    styleUrls: ['./app.user.item.scss']
})

export class UserItem implements OnInit {
    @Input() name: string;
    constructor() {

    }
    ngOnInit() {

    }
}
