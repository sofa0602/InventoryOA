<template>
  <div class="name text-h4 d-flex justify-center  ma-14">
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
