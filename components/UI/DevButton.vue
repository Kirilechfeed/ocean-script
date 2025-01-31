<script lang="ts" setup>
import { defineProps } from "vue";

interface IProps {
  color?: "primary" | "secondary";
  size?: "md" | "lg";
  icon?: boolean;
}

withDefaults(defineProps<IProps>(), {
  color: "primary",
  size: "lg",
  icon: false,
});
</script>

<template>
  <button class="button" :class="[`button-${color}`, `button-${size}`]">
    <img v-if="icon" src="/assets/img/button-icon.svg" alt="" />
    <slot />
  </button>
</template>

<style scoped>
.button {
  @apply rounded-3xl cursor-pointer hover:opacity-75 duration-300 text-white flex items-center gap-2;
}

.button-primary {
  @apply bg-primary;
}

.button-secondary {
  @apply bg-transparent border-[1px];
}
.button-md {
  @apply py-2.5 px-[18px];
}
.button-lg {
  @apply py-3 px-[22px];
}
</style>
