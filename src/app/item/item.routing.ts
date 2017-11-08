import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemRowComponent} from './row/row.component'
import { ItemComponent } from './item.component';

const routes: Routes = [
  { path: 'item', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemRoutingModule { 
    static components = [
        ItemComponent,
        ItemRowComponent
    ]
}