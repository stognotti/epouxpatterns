
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
        <button pButton type="button" label="Click"></button>
    `,
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
}