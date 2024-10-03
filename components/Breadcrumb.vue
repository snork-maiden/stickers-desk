<template>
  <ul class="breadcrumbs">
    <li class="item">
      <NuxtLink to="/" class="link">Главная</NuxtLink>
    </li>
    <li class="item">Настройки</li>
  </ul>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">

.breadcrumbs {
  --breadcrumbs-gap: 0.4em;
  display: flex;
  list-style: none;
  gap: var(--breadcrumbs-gap);
  align-items: center;
}

.item {
  display: flex;
  align-items: center;
  gap: var(--breadcrumbs-gap);
  &:not(:last-child)::after {
    content: "|";
    opacity: 0.6;
    font-weight: 200;
    font-size: 1.8em;
  }
}
</style>
