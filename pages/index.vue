<template>
  <div>
    <nuxt-layout name="layout-main">
      <!-- hero banner start -->
      <hero-banner-main />
      <!-- hero banner end -->

      <!-- category start -->
      <categories-electronic />
      <!-- category end -->

      <!-- feature area start -->
      <feature-info />
      <!-- feature area end -->

      <!-- product area start -->
      <product-electronics-top-items />
      <!-- product area end -->

      <!-- brand area start -->
      <brand-category />

      <!-- banner area start -->
      <banner-area />
      <!-- banner area en -->

      <!-- offer product start -->
      <product-electronics-offer-items />
      <!-- offer product end -->

      <!-- product gadget area start -->
      <product-electronics-gadget-items />
      <!-- product gadget area end -->

      <!-- product banner start -->
      <banner-area-swipe />
      <!-- product banner end -->

      <!-- product new arrivals area start -->
      <product-electronics-new-arrivals />
      <!-- product new arrivals area end -->

      <!-- product sm items start -->
      <product-electronics-sm-items />
      <!-- product sm items end -->

      <!-- instagram area start -->
      <instagram-area />
      <!-- instagram area end -->

      <!-- subscribe area start -->
      <subscribe />
      <!-- subscribe area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({ title: "JenusShop - Temukan Poduct terbaik anda" });
</script>
