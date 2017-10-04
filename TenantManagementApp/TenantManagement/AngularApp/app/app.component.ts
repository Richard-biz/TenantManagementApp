import { Component } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent  {

    public constructor(private router: Router) {
        router.navigate(['./enterprise']);
    }
}