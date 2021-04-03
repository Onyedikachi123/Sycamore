<template>
  <v-container>
    <v-dialog v-model="open" width="100%">
      <v-card>
        <iframe
          id="iframeforpaysatck"
          onLoad="alert(this.contentWindow.location)"
          class="iframe-modal"
          style="width:100%"
          :src="url"
        ></iframe>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Iframe",
  props: ["open", "url", "checkUrl"],
  data: () => ({
    dialog: true,
    state: []
  }),
  created() {
    // console.log(document.referrer);
  }
});

// function checkUrl() {
//   alert("hey");
// }
</script>

<style scoped>
.iframe-modal {
  height: 100vh;
}
</style>
