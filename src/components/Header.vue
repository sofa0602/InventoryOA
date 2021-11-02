<template>
  <v-app-bar app class="app-bar-color" color="#fff" flat>
    <Logo class="ml-16" />
    <v-spacer></v-spacer>
    <v-toolbar-items
      :expand-on-hover="$vuetify.breakpoint.mdAndUp"
      v-for="item in items"
      :key="item.title"
      class="hidden-sm-and-down"
    >
      <v-btn class="styleLink" :to="item.to" text>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <div class="hidden-sm-and-down pl-3">
      <Button />
    </div>
    <v-menu offset-y min-width="100%" transition="slide-y-transition">
      <template v-slot:activator="{ attrs, on }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on" class="hidden-md-and-up">
        </v-app-bar-nav-icon>
      </template>
      <v-list class="mt-1">
        <v-list-item
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="hidden-md-and-up"
        >
          <v-list-item-title class="d-flex justify-center">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import Logo from "./Logo.vue";
import Button from "./Button.vue";
export default {
  components: {
    Logo,
    Button
  },
  data: () => ({
    items: [
      {
        title: "Робота з нами",
        to: "#workWithUs"
      },
      {
        title: "Проблеми",
        to: "#problem"
      },
      {
        title: "Переваги",
        to: "#preference"
      },
      {
        title: "Команда",
        to: "#command"
      }
    ],
    right: null
  })
};
</script>
<style scoped>
.app-bar-color {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15) !important;
}
</style>
