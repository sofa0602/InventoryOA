<template>
  <v-container class="container">
    <v-row justify="center">
      <div class="rectangle"></div>
      <v-col cols="12" align="center">
        <Logo />
      </v-col>
      <v-col align="center">
        <v-btn
          class="ma-2"
          outlined
          color="#FF725E"
          min-width="250px"
          min-height="50px"
        >
          <v-icon>mdi-google</v-icon>
          Google
        </v-btn>
        <v-btn
          class="ma-2"
          outlined
          color="#484BF2"
          min-width="250px"
          min-height="50px"
        >
          <v-icon>mdi-microsoft-windows</v-icon>
          Microsoft
        </v-btn>
      </v-col>
      <v-row justify="space-around">
        <v-col cols="5"><v-divider></v-divider></v-col>
        <v-col cols="1" class="d-flex justify-center">або</v-col>
        <v-col cols="5"><v-divider></v-divider></v-col>
      </v-row>

      <v-col cols="6">
        <v-text-field
          color="#7683F7"
          v-model="email"
          :error-messages="emailErrors"
          label="e-mail"
          dense
          outlined
          clearable
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
      </v-col>
      <v-col cols="12" align="center">
        <v-btn class="buttonLogIn" width="220px" color="#7683F7">
          Увійти
        </v-btn>
      </v-col>
      <v-col class="pa-0 ma-10" cols="12" align="center">
        {{ "Всі права захищено © IO " + new Date().getFullYear() }}
      </v-col>
      <div class="rectangle"></div>
    </v-row>
  </v-container>
</template>
<script>
import Logo from "./Logo.vue";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  components: {
    Logo
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  data: () => ({
    email: ""
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("E-mail введено не коректно");
      !this.$v.email.required && errors.push("Введіть E-mail");
      return errors;
    }
  }
};
</script>
<style scoped>
.container {
  background: linear-gradient(282.65deg, #7683f7 0%, #dde0ff 99.33%);
  backdrop-filter: blur(50px);
}
.rectangle {
  background: linear-gradient(282.65deg, #6471e4 0%, #dde0ff 99.33%);
  min-height: 30px;
}
</style>
