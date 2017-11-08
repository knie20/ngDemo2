import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../core/services/interfaces'

@Component({
    styleUrls: ['./item.component.scss'],
    templateUrl: 'item.component.html'
})

export class ItemComponent implements OnInit {
    items: IItem[] = []
    constructor() { }

    valueIPass = 4

    ngOnInit() { }

    addItem(item: IItem){
        this.items.push(item);
    }

    onSubmit(value: IItem){
        this.addItem(value);
    }
}