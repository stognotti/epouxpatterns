
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
	<div style="font-family: Awesome; font-size: 25px; colour: #FFFFFF;  stroke: #CCCCCC">
        <button pButton type="button" label="Submit" style="background-color: #3183BC;" ></button>
    </div>
    `,
    styles: [`
    .ui-button-text {
      
    }
    `],
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
} 