<template>
  <div>
    <header-default :style_2="true" />
    <main>
      <slot />
    </main>
    <footer-main :primary_style="true" />
    <back-to-top />
    <!-- <modal-product /> -->
  </div>
</template>

<script setup lang="ts"></script>
