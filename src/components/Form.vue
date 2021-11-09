<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="П.І.Б."
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="namePlace"
      :error-messages="namePlaceErrors"
      label="Назва організації"
      required
      @change="$v.namePlace.$touch()"
      @blur="$v.namePlace.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :error-messages="phoneErrors"
      label="Телефон"
      required
      @input="$v.phone.$touch()"
      @blur="$v.phone.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="message"
      label="Повідомлення"
      @input="$v.message.$touch()"
      @blur="$v.message.$touch()"
    ></v-text-field>
    <div class="d-flex justify-center">
      <Button :title="title" @click="submit" />
    </div>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Button from "./Button.vue";
export default {
  components: {
    Button
  },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(50) },
    email: { required, email },
    namePlace: { required },
    phone: { required, maxLength: maxLength(10) },
    message: { required, maxLength: maxLength(300) }
  },

  data: () => ({
    title: "Отримати доступ",
    name: "",
    email: "",
    phone: "",
    message: "",
    namePlace: ""
  }),

  computed: {
    namePlaceErrors() {
      const errors = [];
      if (!this.$v.namePlace.$dirty) return errors;
      !this.$v.namePlace.required && errors.push("Введіть назву організації");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Ім'я обов'язкове.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push("phone must be at most 10 characters long");
      !this.$v.phone.required && errors.push("Введіть номер телефону");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail обов'язковий");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    }
  }
};
</script>
<style scoped>
.message1 {
  min-height: 100px !important;
}
</style>
