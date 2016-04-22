
import {Component} from "angular2/core";
import {Button} from 'primeng/primeng';

@Component({
	selector: 'button-preview-1-component',
	template: `
	    <style type="text/css">
.ui-widget { font-family: FontAwesome; font-size: 25px; }


   
.ui-button, button.ui-button.ui-state-default, .ui-button.ui-state-default {
	border: 1px solid #168dd9;
	color: #FFFFFF;
	box-shadow: 0 1px 0 #53bcff inset, 0 1px 2px rgba(0,0,0,0.2) !important;
	background: #F00000; /* Old browsers */
	background: -moz-linear-gradient(top, #3183BC 0%, #3183BC 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFFFFF), color-stop(100%,#000000)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #FFFFFF 0%,#3183BC 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, #3183BC 0%,#3183BC 100%); /* Opera11.10+ */
	background: -ms-linear-gradient(top, #3183BC 0%,#3183BC 100%); /* IE10+ */
	background: linear-gradient(top, #3183BC 0%,#3183BC 100%); /* W3C */
	-webkit-transition: none;
	-moz-transition: none;
	-o-transition: none;
}
button.ui-button.ui-state-hover, .ui-button.ui-state-hover,
button.ui-button.ui-state-focus {
	border: 1px solid #0c6aa6;
	box-shadow: 0 1px 0 #58b3ff inset, 0 1px 2px rgba(0,0,0,0.2) !important;
	background: #279cff; /* Old browsers */
	background: -moz-linear-gradient(top, #279cff 0%, #058dff 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#279cff), color-stop(100%,#058dff)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #279cff 0%,#058dff 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, #279cff 0%,#058dff 100%); /* Opera11.10+ */
	background: -ms-linear-gradient(top, #279cff 0%,#058dff 100%); /* IE10+ */
	background: linear-gradient(top, #279cff 0%,#058dff 100%); /* W3C */
	outline: 0 none;
}
</style>
        <button pButton type="button" label="Submit 3"  class=¨my-button¨ ></button>

    `,
    styles: [`

    `],
    directives: [Button]
})
export class ButtonPreview1Component {

    text: string;
} 