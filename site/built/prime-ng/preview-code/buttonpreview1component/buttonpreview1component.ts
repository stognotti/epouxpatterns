
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
  styleUrls: ['buttonpreview1component/buttonpreview1component.css'],
	templateUrl: 'buttonpreview1component/buttonpreview1component.html',
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
} 