<template>
  <v-main class="main">
    <v-container>
      <v-row justify-sm="center">
        <v-col class="ml-10 my-10">
          <h3 class="pb-8">Система Інвентаризації</h3>
          <div class="pb-14 pb-sm-5">
            IO — це система інвентаризації розроблена для ведення електронного
            обліку обладнання та ліцензій програмного забезпечення на
            підприємстві.
          </div>
          <Button />
        </v-col>
        <v-col cols="12" sm="6">
          <v-img :src="require('@/assets/main_icon.svg')"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <router-view></router-view>
  </v-main>
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
  background-color: rgba(217, 220, 245, 0.5);
  font-size: 24px;
}
</style>
