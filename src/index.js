import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use( Vuetify );

import {
  SpinalMountExtention
} from "spinal-env-viewer-panel-manager-service"
import {
  spinalContextMenuService,
} from "spinal-env-viewer-context-menu-service";
import { ButtonCreateTimeLine } from "./buttons/ButtonCreateTimeLine";
import { ButtonsEditTimeLIne } from "./buttons/ButtonsEditTimeLIne";

import DialogEditTimeLine from "./vue/DialogEditTimeLine.vue";


const TOP_BAR_HOOK_NAME = 'GraphManagerTopBar';
const SIDE_BAR_HOOK_NAME = "GraphManagerSideBar";

spinalContextMenuService.registerApp( TOP_BAR_HOOK_NAME, new ButtonCreateTimeLine(), [7] );
spinalContextMenuService.registerApp( SIDE_BAR_HOOK_NAME, new ButtonsEditTimeLIne(), [7] );


SpinalMountExtention.mount( {
  // name registered.
  name: "DialogEditTimeline",
  // Vue.extend to create a Compoment constructor
  vueMountComponent: Vue.extend( DialogEditTimeLine ),
  // where to  append the Compoment
  parentContainer: document.body
} );
