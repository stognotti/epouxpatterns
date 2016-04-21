
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-3-component',
	template: `
        <button pButton type="button" label="Click"></button>
    `,
    directives: [Button]
})
export class ButtonPreview3Component {

    text: string;
}