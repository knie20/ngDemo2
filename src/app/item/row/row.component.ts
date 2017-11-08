import { Component, Input, OnInit } from '@angular/core'
import { IItem } from '../../core/services/interfaces'

@Component({
    selector: 'item-row',
    templateUrl: 'row.component.html',
    styleUrls: ['./row.component.scss'],
})

export class ItemRowComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() item: IItem
}