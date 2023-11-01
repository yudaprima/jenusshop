<template>
  <div
    class="tp-header-main-right d-flex align-items-center justify-content-end"
  >
   
    <div class="tp-header-action d-flex align-items-center ml-50">
      <div class="tp-header-action-item d-lg-none">
        <button
          @click="utilsStore.handleOpenMobileMenu"
          type="button"
          class="tp-header-action-btn tp-offcanvas-open-btn"
        >
          <SvgMenuIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
import { useWishlistStore } from '@/pinia/useWishlistStore';
import { useUtilityStore} from '@/pinia/useUtilityStore';

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilsStore = useUtilityStore();
</script>
