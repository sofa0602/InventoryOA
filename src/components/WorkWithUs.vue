<template>
  <div id="workWithUs" class="work">
    <Title title="Робота з нами" />
    <v-container class=" d-flex justify-center">
      <div class="wrapper d-flex justify-center mb-0">
        <v-row justify="center" class="mb-0">
          <v-col class="pa-0 mb-0" v-for="e in elipse" :key="e.id">
            <div class="text mb-0">{{ e.text }}</div>
            <div class="circle-top text-circle mb-0">{{ e.id1 }}</div>
            <div class="circle-buttom text-circle mb-0">{{ e.id2 }}</div>
            <div class="text1 mb-0">{{ e.text }}</div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import Title from "./Title.vue";
export default {
  components: {
    Title
  },
  data: () => ({
    elipse: [
      {
        id: 1,
        id1: "01",
        id2: "02",
        text: "Легкий перегляд пов’язаної інформації у одному місці"
      },
      {
        id: 2,
        id1: "03",
        id2: "04",
        text: "Легкий перегляд пов’язаної інформації у одному місці"
      },
      {
        id: 3,
        id1: "05",
        id2: "06",
        text: "Легкий перегляд пов’язаної інформації у одному місці"
      },
      {
        id: 4,
        id1: "07",
        id2: "08",
        text: "Легкий перегляд пов’язаної інформації у одному місці"
      }
    ]
  })
};
</script>
<style scoped>
.work {
  background-image: url("../assets/workBg.svg");
  background-repeat: no-repeat;
}
.text {
  padding: 10px;
  width: 48%;
  min-height: 100px;
  left: 50%;
  top: 20%;
  position: relative;
  line-height: 27px;
}
.text1 {
  padding: 10px;
  width: 48%;
  min-height: 100px;
  top: -20%;
  position: relative;
  line-height: 27px;
}
.wrapper {
  width: 81%;
}
.circle-top {
  text-align: center;
  /*display: table-cell;*/
  vertical-align: middle;
  width: 180px;
  height: 90px; /* as the half of the width */
  background-color: #4354f2;
  border-top-left-radius: 90px; /* 100px of height + 10px of border */
  border-top-right-radius: 90px; /* 100px of height + 10px of border */
}
.circle-buttom {
  position: relative;
  text-align: center;
  vertical-align: middle;
  margin-left: 180px;
  width: 180px;
  height: 90px; /* as the half of the width */
  background-color: #4354f2;
  border-bottom-left-radius: 90px; /* 100px of height + 10px of border */
  border-bottom-right-radius: 90px;
}
.text-circle {
  font-style: normal;
  font-weight: bold;
  font-size: 68px;
  line-height: 93px;
  color: #ffffff;
}
</style>
