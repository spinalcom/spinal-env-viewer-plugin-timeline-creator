import { SpinalContextApp } from 'spinal-env-viewer-context-menu-service';
import { SpinalGraphService } from "spinal-env-viewer-graph-service";


const { spinalPanelManagerService } = require( "spinal-env-viewer-panel-manager-service" );

export class ButtonsEditTimeLIne extends SpinalContextApp {
  
  constructor() {
    super( 'Edit timeline', 'Edit timeline', {
      icon: 'build',
      icon_type: 'in',
      backgroundColor: '#000000',
      fontColor: '#ffffff'
    } );
    
    this.action = this.openPanel.bind( this );
  }
  
  isShown(option) {
    if (option.selectedNode.type.get() === "Timeline")
      return Promise.resolve( true );
    return Promise.resolve(-1);
  }
  
  openPanel() {
    const context = SpinalGraphService.getContext("Timeline")
    spinalPanelManagerService.openPanel( "DialogEditTimeline", {timeline: context})
  }
}