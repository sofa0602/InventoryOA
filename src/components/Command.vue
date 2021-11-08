<template>
  <div id="command">
    <v-container>
      <v-row justify-md="space-around" justify-xl="center">
        <v-col cols="12" md="5">
          <CardAvatar
            v-for="card in cardAvatar"
            :image="card.src"
            :title="card.title"
            :key="card.src"
          />
        </v-col>
        <v-col cols="12" md="4">
          <Title title="Отримати доступ" />
          <Form />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Title from "./Title.vue";
import CardAvatar from "./CardAvatar.vue";
import Form from "./Form.vue";

export default {
  components: {
    Title,
    CardAvatar,
    Form
  },
  data: () => ({
    cardAvatar: [
      {
        src: "avatar1.png",
        title: "Ігор Зубенко",
        iconFacebook: "../assets/iconFacebook.svg",
        iconEmail: "../assets/iconEmail.svg"
      },
      {
        src: "avatar2.png",
        title: "Максим Луцюк",
        iconFacebook: "../assets/iconFacebook.svg",
        iconEmail: "../assets/iconEmail.svg"
      },
      {
        src: "avatar3.png",
        title: "Анна Романюк",
        iconFacebook: "../assets/iconFacebook.svg",
        iconEmail: "../assets/iconEmail.svg"
      }
    ]
  })
};
</script>
<style scoped>
#command {
  background-image: url("../assets/bgCommand.svg");
  background-position: right;
  background-position-y: top;
}
</style>
