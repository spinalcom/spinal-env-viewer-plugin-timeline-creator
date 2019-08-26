import { SpinalContextApp } from 'spinal-env-viewer-context-menu-service';
import { SpinalGraphService } from "spinal-env-viewer-graph-service";


const { spinalPanelManagerService } = require( "spinal-env-viewer-panel-manager-service" );

export class ButtonCreateTimeLine extends SpinalContextApp {
  
  constructor() {
    super( 'Create a new timeline', 'Create a new timeline', {
      icon: 'timeline',
      icon_type: 'in',
      backgroundColor: '#000000',
      fontColor: '#ffffff'
    } );
    
    this.action = this.openPanel.bind( this );
  }
  
  isShown() {
    if (typeof SpinalGraphService.getContext( "Timeline" ) !== "undefined")
      return Promise.resolve( true );
    return Promise.resolve(-1);
  }
  
  openPanel() {
    SpinalGraphService.addContext("Timeline", "Timeline");
  }
}