<template>
  <v-app id="app">
    <Header />
    <Main />
    <WorkWithUs />
    <Problem />
    <Slider />
    <Command />
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Problem from "./components/Problem.vue";
import Preference from "./components/Preference.vue";
import Command from "./components/Command.vue";
import WorkWithUs from "./components/WorkWithUs.vue";
import Footer from "./components/Footer.vue";
import Slider from "./components/Slider.vue";

export default {
  components: {
    Slider,
    Header,
    Main,
    Problem,
    Preference,
    Command,
    WorkWithUs,
    Footer
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,400&display=swap");
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
}
</style>
