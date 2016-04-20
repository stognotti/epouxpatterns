import {Component} from 'angular2/core';
import {InputText} from 'primeng/primeng';

@Component({
	selector: 'my-app',
	template: `
        <p>This is a live Angular 2 component</p>
        <input type="text" pInputText [(ngModel)]="text" />
        {{text}}
    `,
    directives: [InputText]
})
export class AppComponent {

    text: string;
}