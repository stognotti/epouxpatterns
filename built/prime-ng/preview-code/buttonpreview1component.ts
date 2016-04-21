
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
	<style >
    .ui-button-text {
    	font: 25px Awesome;
    }
    </style>
        <button pButton type="button" label="Click"></button>
    `,
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
}