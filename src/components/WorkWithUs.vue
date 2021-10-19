<template>
  <div id="workWithUs" class="work">
    <Title title="Робота з нами" />
    <v-container>
      <v-row justify="start">
        <v-col cols="12" md="3" v-for="work in worksTop">
          {{ work.title }}
        </v-col>
        <v-col cols="12">
          <v-img src="../assets/works.svg" />
        </v-col>
        <v-row class="ml-16" justify="end">
          <v-col cols="12" md="3" v-for="work in worksBottom">
            {{ work.title }}
          </v-col>
        </v-row>
      </v-row>
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
</style>
