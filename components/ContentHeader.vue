<script setup lang="ts">
interface IProps {
  title: string;
  description: string;
  textButtonPrimary: string;
  textButtonSecondary: string;
}

defineProps<IProps>();
</script>

<template>
  <div class="wrapper">
    <UIDevButton :size="'md'" :color="'secondary'">{{
      textButtonSecondary
    }}</UIDevButton>
    <div class="text-header">
      <h1 class="title">{{ title }}</h1>
      <p class="descriptions">{{ description }}</p>
    </div>

    <UIDevButton :icon="true" :size="'md'" :color="'primary'">{{
      textButtonPrimary
    }}</UIDevButton>
  </div>
</template>

<style scoped>
.wrapper {
  @apply container mx-auto flex flex-col items-center text-white gap-[22px];
}
.text-header {
  @apply max-w-[930px] text-lg text-center flex flex-col gap-[22px];
}
.title {
  @apply text-[80px] font-extrabold  text-center leading-tight;
}
.descriptions {
  @aplly text-[18px] px-20;
}
</style>
