
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
	<div style="font-family: Awesome; font-size: 25px; color: #FFFFFF;  stroke: #CCCCCC">
        <button pButton type="button" label="Submit" class="ui-button"></button>
    </div>
    `,
    styles: [`
    .ui-button {
      background-color: ;
      background: #3183BC;
    }
    `],
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
} 