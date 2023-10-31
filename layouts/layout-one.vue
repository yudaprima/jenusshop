<template>
  <div>
    <header-one />
    <main>
      <!-- slot diisi untuk child component agar lebih dinamis -->
      <slot />
    </main>
    <footer-one />
    <back-to-top />
    <!-- <modal-product /> -->
  </div>
</template>

<script setup lang="ts">

</script>
