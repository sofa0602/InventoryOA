<template>
  <img
    class="mb-3 img-fluid"
    :src="require('../assets/' + `${image}`)"
    alt="avatar"
  />
</template>

<script>
export default {
  props: {
    image: {
      typeof: String
    },
    image1: {
      typeof: String
    },
    image2: {
      typeof: String
    }
  }
};
</script>
