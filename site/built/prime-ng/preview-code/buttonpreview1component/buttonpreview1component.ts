
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	templateUrl: '/epouxpatterns/built/prime-ng/preview-code/buttonpreview1component/buttonpreview1component.html',
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
} 