import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { MatSidenavModule, MatButtonModule, MatListModule } from '@angular/material'

@NgModule({
    exports: [
        MatSidenavModule,
        MatButtonModule, 
        CommonModule,
        MatListModule,
    ]
})
export class SharedModule { }
