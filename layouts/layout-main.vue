<template>
  <div>
    <header-default />
    <main>
      <!-- slot diisi untuk child component agar lebih dinamis -->
      <slot />
    </main>
    <footer-main />

    <MqResponsive target="md-">
      <header-nav-mobile />
    </MqResponsive>
    <back-to-top />
    <!-- <modal-product /> -->
  </div>
</template>

<script setup lang="ts">
import { MqResponsive } from "vue3-mq";
</script>
