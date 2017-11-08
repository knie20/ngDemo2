import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  template: `
    <h1>Oops! Page Not Found!</h1>
    <button mat-raised-button color="primary" >Go to Home</button>
    `,
  styles: []
})
export class PageNotFoundComponent {
  constructor() {}
}