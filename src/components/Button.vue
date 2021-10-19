<template>
  <v-btn class="buttonLogIn" color="#7683F7" :min-width="width">
    {{ title }}
  </v-btn>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Увійти"
    },
    width: {
      type: String,
      default: "220px"
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
