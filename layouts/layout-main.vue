<template>
  <div>
    <header-main />
    <main>
      <!-- slot diisi untuk child component agar lebih dinamis -->
      <slot />
    </main>
    <footer-main />
    <back-to-top />
    <!-- <modal-product /> -->
  </div>
</template>

<script setup lang="ts">

</script>
