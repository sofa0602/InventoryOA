<template>
  <div id="workWithUs" class="work">
    <Title title="Робота з нами" />
    <v-container>
      <!-- <div class="d-flex justify-space-center mb-6" flat tile>
        <div v-for="n in 4" :key="n">
          <div class="text">Внесення</div>
          <div class="c">1</div>
          <div class="c1">2</div>
        </div>
      </div>-->
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
    worksTop: [
      {
        title: "Внесення накладних з обладнанням та ліцензіями"
      },
      {
        title: "Перегляд предметів та їх власників"
      },
      {
        title: "Передача обладнання між власникам"
      },
      {
        title: "Списання  обладнання"
      }
    ],
    worksBottom: [
      {
        title: "Перегляд предметівта приміщення у якому їх встановлено"
      },
      {
        title: "Перегляд обладнання з індивідуальними QR-кодами"
      },
      {
        title: "Відправлення обладнання у ремонт"
      },
      {
        title: "Утилізація обладнання"
      }
    ]
  })
};
</script>
<style scoped>
.end {
  color: red;
  display: flex;
  justify-content: end !important;
}
.work {
  background-image: url("../assets/workBg.svg");
  background-repeat: no-repeat;
}
.text {
  width: 223px;
  min-height: 80px;
}
.group-circle {
  text-align: center;
}
.c {
  text-align: center;
  /*display: table-cell;*/
  vertical-align: middle;
  width: 180px;
  height: 90px; /* as the half of the width */
  background-color: gold;
  border-top-left-radius: 90px; /* 100px of height + 10px of border */
  border-top-right-radius: 90px; /* 100px of height + 10px of border */
}
.c1 {
  text-align: center;
  vertical-align: middle;
  margin-left: 180px;
  width: 180px;
  height: 90px; /* as the half of the width */
  background-color: gold;
  border-bottom-left-radius: 90px; /* 100px of height + 10px of border */
  border-bottom-right-radius: 90px;
}
</style>
