
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
	<div style="font-size: 50px">
        <button pButton type="button" label="Click-2" ></button>
    </div>
    `,
    styles: [`
    .ui-button-text {
      font-size: 25px;
    }
    `],
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
} 