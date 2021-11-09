<template>
  <div id="problem">
    <Title title="Проблеми" />
    <v-row justify="center" align="center" class="ma-0 problem">
      <v-col cols="9">
        <p class="text-body-1 text-sm-h5 text-md-h5">
          Система дозволяє зберігання інформації про обладнання та програмне
          забезпечення, збереження історії про ремонти, передачі, списання та
          утилізації обладнання, формування звітів. Не потребує встановлення на
          персональний комп’ютер.
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Title from "./Title.vue";

export default {
  components: {
    Title
  }
};
</script>
<style scoped>
p {
  text-align: center;
  color: #fff;
}
.problem {
  font-size: 22px;
  height: 40vh;
  background-image: url(../assets/img-problem.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
