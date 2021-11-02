<template>
  <v-card class="mx-auto" max-width="434">
    <v-img
      height="100%"
      class="mb-3 img-fluid"
      :src="require('../assets/' + `${image}`)"
      alt="avatar"
    >
      <v-list-item dark>
        <v-list-item-content>
          <v-col align="end" class="pb-0 mt-8">
            <v-list-item-title>
              {{ title }}
            </v-list-item-title>
          </v-col>
          <v-col align="end" class="pt-0">
            <v-icon color="#FFB27D" large class="pa-2">
              mdi-facebook
            </v-icon>
            <v-icon color="#FFB27D" large class="pa-2">
              mdi-email
            </v-icon>
          </v-col>
        </v-list-item-content>
      </v-list-item>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      typeof: String
    },
    title: {
      typeof: String
    }
  }
};
</script>
<style scoped></style>
