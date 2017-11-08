import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item.component';
import { ItemRoutingModule } from './item.routing';

@NgModule({
    imports: [ItemRoutingModule, SharedModule, FormsModule],
    exports: [],
    declarations: [ItemComponent, ItemRoutingModule.components],
    providers: [],
})
export class ItemModule { }
