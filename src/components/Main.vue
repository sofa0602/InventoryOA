<template>
  <v-main class="main">
    <v-container>
      <v-row justify-sm="center">
        <v-col cols="12" sm="6" class="d-sm-none d-flex">
          <v-img :src="require('@/assets/main_icon.svg')"></v-img>
        </v-col>
        <v-col align-self="center">
          <div
            class=" pb-5 pb-sm-8 text-xl-h3 text-lg-h4 font-weight-medium text-h3"
          >
            Система Інвентаризації
          </div>
          <div
            class="pb-5 pb-sm-16 text-lg-h5 text-xl-h4 text-h6 font-weight-regular"
          >
            IO — це система інвентаризації розроблена для ведення електронного
            обліку обладнання та ліцензій програмного забезпечення на
            підприємстві.
          </div>
          <div class="d-none d-sm-flex"><Button /></div>
          <div class="d-sm-none d-flex justify-center"><Button /></div>
        </v-col>

        <v-col cols="12" sm="6" class="d-none d-sm-flex">
          <v-img :src="require('@/assets/main_icon.svg')"></v-img>
        </v-col>
      </v-row>
      <router-view></router-view> </v-container
  ></v-main>
</template>
<script>
import Button from "./Button.vue";
import Title from "./Title.vue";
export default {
  components: {
    Button,
    Title
  }
};
</script>
<style scoped>
.main {
  font-family: Nunito !important;
  line-height: 38px;
  background-color: rgba(217, 220, 245, 0.5);
}
</style>
