<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="50"
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
      v-model="namePlase"
      :error-messages="namePlaseErrors"
      label="Назва рганізації"
      required
      @change="$v.namePlase.$touch()"
      @blur="$v.namePlase.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :error-messages="phoneErrors"
      :counter="10"
      label="Телефон"
      required
      @input="$v.phone.$touch()"
      @blur="$v.phone.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="message"
      :error-messages="phoneErrors"
      label="Повідомлення"
      :counter="300"
      required
      @input="$v.message.$touch()"
      @blur="$v.message.$touch()"
    ></v-text-field>

    <Button :title="title" @click="submit" />
    <v-btn class="ml-6" @click="clear">
      Очистити
    </v-btn>
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
    namePlase: { required },
    phone: { required, maxLength: maxLength(10) },
    message: { required, maxLength: maxLength(300) }
  },

  data: () => ({
    title: "Отримати доступ",
    name: "",
    email: "",
    phone: "",
    message: ""
  }),

  computed: {
    namePlaseErrors() {
      const errors = [];
      if (!this.$v.namePlase.$dirty) return errors;
      !this.$v.namePlase.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push("phone must be at most 10 characters long");
      !this.$v.phone.required && errors.push("phone is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.namePlase = "";
      this.phone = "";
      this.message = "";
    }
  }
};
</script>
