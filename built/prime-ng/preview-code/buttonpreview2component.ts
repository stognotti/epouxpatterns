
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-2-component',
	template: `
        <button pButton type="button" label="Click"></button>
    `,
    directives: [Button]
})
export class ButtonPreview2Component {

    text: string;
}