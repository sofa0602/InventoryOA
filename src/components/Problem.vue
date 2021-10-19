<template>
  <div id="problem">
    <Title title="Проблеми" />
    <v-row justify="center" align="center" class="problem">
      <v-col cols="9">
        <p>
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
  font-size: 18px;
  min-height: 280px;
  background-image: url(../assets/imgProblem.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
