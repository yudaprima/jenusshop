<template>
  <div>
    <header-default :style_2="true" />
    <main>
      <slot />
    </main>
    <footer-main :primary_style="true" />
    <back-to-top />
    <MqResponsive target="md-">
      <header-nav-mobile />
    </MqResponsive>
    <!-- <modal-product /> -->
  </div>
</template>

<script setup lang="ts">
import { MqResponsive } from "vue3-mq";
</script>
