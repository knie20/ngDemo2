import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'

import { NavbarComponent } from './navbar.component'

@NgModule({
    imports: [SharedModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
    bootstrap: [NavbarComponent],
})
export class NavbarModule { }
