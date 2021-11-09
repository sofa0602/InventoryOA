<template>
  <v-footer color="#D5DAFF">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" align="center">
          <Logo />
        </v-col>
        <v-col class="pa-0" cols="6" align="center">
          <v-divider></v-divider>
        </v-col>
        <v-col class="pa-0" cols="12" align="center">
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
import Logo from "./Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>
