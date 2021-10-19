<template>
  <!-- App.vue -->

  <v-app id="app">
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

      <Button width="" />
      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-app-bar-nav-icon
            v-bind="attrs"
            v-on="on"
            class="hidden-md-and-up"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="hidden-md-and-up"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="main">
      <v-container>
        <v-row>
          <v-col class="ml-10 my-10">
            <h3 class="pb-8">Система Інвентаризації</h3>
            <div class="pb-16">
              IO — це система інвентаризації розроблена для ведення електронного
              обліку обладнання та ліцензій програмного забезпечення на
              підприємстві.
            </div>
            <Button />
          </v-col>
          <v-col cols="6" class="hidden-sm-and-down">
            <v-img :src="require('@/assets/main_icon.svg')"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <router-view> </router-view>
    <WorkWithUs />
    <Problem />
    <Preference />
    <Command />

    <Footer />
  </v-app>
</template>

<script>
import Button from "./components/Button.vue";
import Footer from "./components/Footer.vue";
import Title from "./components/Title.vue";
import Problem from "./components/Problem.vue";
import Preference from "./components/Preference.vue";
import Command from "./components/Command.vue";
import WorkWithUs from "./components/WorkWithUs.vue";
import Logo from "./components/Logo.vue";
export default {
  components: {
    Button,
    Title,
    Problem,
    Preference,
    Command,
    WorkWithUs,
    Logo,
    Footer
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

.main {
  background-color: rgba(217, 220, 245, 0.5);
  font-size: 24px;
}
</style>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,400&display=swap");
body {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
}
</style>
