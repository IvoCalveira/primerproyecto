import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Botones1Component } from "./botones1/botones1.component";
import { Botones2Component } from "./botones2/botones2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Botones1Component, Botones2Component]
})
export class AppComponent {
  title = 'primerproyecto';
}
