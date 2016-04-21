
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
	<style >
    .ui-button-text {
    	font-size:  25px;
      color:  #ffffffff;
      
    }
    </style>
        <button pButton type="button" label="Click 1" style="background-color: #3183BC"></button>
    `,
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
}