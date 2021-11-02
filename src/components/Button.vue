<template>
  <v-dialog v-model="dialog" max-width="70%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="buttonLogIn"
        color="#7683F7"
        min-width="220"
        v-bind="attrs"
        v-on="on"
      >
        {{ title }}
      </v-btn>
    </template>
    <Registration />
  </v-dialog>
</template>
<script>
import Registration from "./Registration.vue";
export default {
  components: {
    Registration
  },
  data() {
    return {
      dialog: false
    };
  },
  props: {
    title: {
      type: String,
      default: "Увійти"
    }
  }
};
</script>
<style>
.buttonLogIn {
  border-radius: 15px !important;
  color: #fff !important;
  text-transform: none !important;
}
</style>
