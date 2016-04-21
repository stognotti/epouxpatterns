
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `

        <button pButton type="button" label="Click-1" class=></button>
    `,
    styles: ['.ui-button-text { font-size:  25px; }'],
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
}