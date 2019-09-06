<template>
    <v-app dark>
        <v-dialog
                v-model="open"  width="500">
            <v-card>
                <v-card-title>
                    Edit timeline
                </v-card-title>
                <v-card-text>
                    <v-text-field
                            v-model="timeLineAttr"
                            :placeholder="attrName"
                    >

                    </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="onSave">
                        save
                    </v-btn>
                    <v-btn @click="onClose">
                        close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
  import { SpinalGraphService } from "spinal-env-viewer-graph-service";

  export default {
    name: "DialogEditTimeLine",
    data() {
      return {
        open: false,
        timeLineName: "",
        timeLineAttr: "",
        timeLine: {}
      }
    },
    computed: {
      name: function () {
        if (this.timeLine.hasOwnProperty( "name" ))
          return this.timeLine.info.name.get();
        return "";
      },
      attrName: function () {
        if (this.timeLine.hasOwnProperty( 'attrName' ))
          return this.timeLine.info.attrName.get();
        return "Timeline attribute name"
      }
    },
    methods: {
      opened: function ( option ) {
        if (option.hasOwnProperty( "timeline" ))
          this.timeLine = option.timeline;

        this.open = true;
      },
      removed: function () {

      },
      closeDialog: function () {

      },
      onSave: function () {
        const info = {};
        if (this.attrName !== this.timeLineAttr)
          info['attrName'] = this.timeLineAttr;
        SpinalGraphService.modifyNode( this.timeLine.info.id.get(), info );


        this.open = false;
      },
      onClose: function () {
        this.open = false;
      }
    }
  }
</script>

<style scoped>

</style>