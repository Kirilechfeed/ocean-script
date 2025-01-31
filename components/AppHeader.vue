<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="container mx-auto">
      <div class="header-content">
        <p class="header-logo">Ocean Script</p>
        <nav class="header-navigate">
          <ul class="navigate">
            <li class="navigate-item">
              <NuxtLink to="/services">Services</NuxtLink>
            </li>
            <li class="navigate-item">
              <NuxtLink to="/portfolio">Portfolio </NuxtLink>
            </li>
            <li class="navigate-item">
              <NuxtLink to="/contacts">Contacts</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="header-buttons">
          <UIDevButton :size="'lg'" :color="'primary'"
            >Leave a request</UIDevButton
          >
        </div>
      </div>
      <slot name="header" />
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply text-white absolute  w-full;
}
.header-content {
  @apply flex justify-between py-7 items-center;
}
.header-logo {
  @apply text-[28px] font-bold;
}
.navigate {
  @apply flex gap-24 text-lg;
}
.navigate-item {
  @apply hover:underline underline-offset-2;
}
</style>
