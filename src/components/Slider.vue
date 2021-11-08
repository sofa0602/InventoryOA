<template>
  <div class="preference" id="preference">
    <v-container>
      <Title title="Переваги" />
      <span class="fon"></span>
      <carousel-3d
        :controls-visible="false"
        :clickable="true"
        :height="460"
        :space="480"
        :display="5"
        :autoplay="true"
        :autoplayTimeout="3000"
        :autoplayHoverPause="true"
        :perspective="0"
        border="0"
        class="p"
      >
        <slide :index="i" :key="i" v-for="(card, i) in cards" class="myCard">
          <div>
            <div class="card1">
              <img
                class="{ 'on-hover': hover } "
                :src="require('../assets/' + `${card.icon}`)"
                height="85px"
                width="85px"
              />
            </div>
            <div class="card-text">
              {{ card.text }}
            </div>
          </div>
        </slide>
      </carousel-3d>
    </v-container>
  </div>
</template>
<script>
import Title from "./Title.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Title,
    Carousel3d,
    Slide
  },
  data: () => ({
    model: 0,
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
.p {
}
.text {
  font-size: 16px;
  line-height: 25px;
  color: #000000 !important;
}
.myCard {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 40px 2px rgba(28, 44, 190, 0.3);
  border-radius: 15px;
  background-color: #ffffff !important;
  height: 370px !important;
  width: 330px !important;
  margin: 10px 0;
  z-index: 10 !important;
}

.card-text {
  text-align: center;
  padding: 30px;
}
</style>
