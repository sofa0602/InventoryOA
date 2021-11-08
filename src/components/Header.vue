<template>
  <v-app-bar
    app
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    color="#ffff"
  >
    <Logo class="ml-16" />
    <v-spacer></v-spacer>
    <v-toolbar-items
      v-for="item in items"
      :key="item.title"
      class="hidden-sm-and-down pa-0"
    >
      <v-btn class="styleLink" :to="item.to" text>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <div class="hidden-sm-and-down pl-1  mr-16">
      <Button />
    </div>

    <v-menu
      offset-y
      min-width="100%"
      transition="slide-y-transition"
      class="mt-0"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on" class="hidden-md-and-up">
        </v-app-bar-nav-icon>
      </template>
      <v-list class="list">
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
        <div class="d-flex justify-center">
          <Button />
        </div>
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
.pos {
  display: flex;
  justify-content: center;
}
</style>
