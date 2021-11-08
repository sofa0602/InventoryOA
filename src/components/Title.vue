<template>
  <div class="name text-h4 d-flex justify-center  ma-10">
    {{ title }}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Заголовок"
    }
  }
};
</script>
<style scoped>
.name {
  color: #00084d;
}
</style>
