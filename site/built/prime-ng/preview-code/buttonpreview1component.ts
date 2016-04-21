
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
	<div style="font-family: Awesome; font-size: 25px; colour: #FFFFFF; background-color: #3183BC; stroke: #CCCCCC">
        <button pButton type="button" label="Click-3" ></button>
    </div>
    `,
    styles: [`
    .ui-button-text {
      font-size: 2px;
    }
    `],
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
} 