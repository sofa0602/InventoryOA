<template>
  <div class="preference" id="preference">
    <Title title="Переваги" />
    <v-container>
      <v-row justify="space-around">
        <v-col v-for="card in cards" align="center">
          <v-hover v-slot="{ hover }">
            <v-card
              :class="{ 'on-hover': hover }"
              min-height="250px"
              min-width="210px"
              class="myCard pt-8"
            >
              <v-img
                height="70px"
                width="70px"
                :src="require('../assets/' + `${card.icon}`)"
              ></v-img>
              <v-card-text class="text">{{ card.text }}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
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
    cards: [
      {
        id: "1",
        text: "Легкий перегляд пов’язаної інформації у одному місці",
        icon: "icon1.svg"
      },
      {
        id: "2",
        text: "Простий інтерфейс у стилі material design",
        icon: "icon2.svg"
      },
      {
        id: "3",
        text: "Швидка авторизація через Google OAuth 2.0",
        icon: "icon3.svg"
      },
      {
        id: "4",
        text: "Доступ з будь-якого сучасного веб-браузера",
        icon: "icon4.svg"
      },
      {
        id: "5",
        text: "Інтеграція з Google Workspace",
        icon: "icon5.svg"
      }
    ]
  })
};
</script>
<style scoped>
.text {
  font-size: 16px;
  line-height: 25px;
  color: #000000 !important;
}
.myCard {
  box-shadow: 0px 9px 40px rgba(28, 44, 190, 0.3) !important;
  border-radius: 15px !important;
}
.v-card.on-hover {
  opacity: 0.7;
}
</style>
