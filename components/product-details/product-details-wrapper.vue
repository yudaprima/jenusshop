<template>
  <div class="tp-product-details-wrapper has-sticky">
    <div class="tp-product-details-category">
      <span>{{ product.parent }}</span>
    </div>
    <h3 class="tp-product-details-title">{{ product.title }}</h3>

    <!-- inventory details -->
    <div class="tp-product-details-inventory d-flex align-items-center mb-10">
      <div class="tp-product-details-stock mb-10">
        <span>{{ product.status }}</span>
      </div>
      <div
        class="tp-product-details-rating-wrapper d-flex align-items-center mb-10"
      >
        <div class="tp-product-details-rating">
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
        </div>
        <div class="tp-product-details-reviews">
          <span>({{ product.reviews?.length }} Reviews)</span>
        </div>
      </div>
    </div>
    <p>
      {{
        textMore
          ? product.description
          : `${product.description.substring(0, 100)}...`
      }}
      <span @click="textMore = !textMore">{{
        textMore ? "See less" : "See more"
      }}</span>
    </p>

    <!-- price -->
    <div class="tp-product-details-price-wrapper mb-20">
      <div v-if="product.discount > 0">
        <span class="tp-product-details-price old-price"
          >Rp{{ product.price }}</span
        >
        <span class="tp-product-details-price new-price">
          Rp{{
            (
              Number(product.price) -
              (Number(product.price) * Number(product.discount)) / 100
            ).toFixed(2)
          }}
        </span>
      </div>
      <span v-else class="tp-product-details-price old-price"
        >Rp {{ product.price.toFixed(2) }}</span
      >
    </div>

  

    <!-- product countdown start -->
    <div v-if="product.offerDate?.endDate">
      <product-details-countdown :product="product" />
    </div>
    <!-- product countdown end -->

    <!-- actions -->
    <div class="tp-product-details-action-wrapper">
     
      <a
        :href="`https://wa.me/?text=${buyInWa}`"
        target="_blank"
        class="tp-product-details-buy-now-btn w-100 text-center text-white"
      >
        <span class="fab fa-whatsapp"></span> Buy Now</a
      >
    </div>
    <div class="tp-product-details-action-sm">
      <button type="button" class="tp-product-details-action-sm-btn">
        <svg-ask-question />
        Ask a question
      </button>
    </div>

    <div v-if="isShowBottom">
      <div class="tp-product-details-query">
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>SKU: </span>
          <p>{{ product.sku }}</p>
        </div>
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>Category: </span>
          <p>{{ product.parent }}</p>
        </div>
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>Tag: </span>
          <p>Android</p>
        </div>
      </div>
      <div class="tp-product-detail-commerce">
        <span>Buy in: </span>
        <a :href="product.shopeeLink"><img class="com-icon" src="/img/icon/sp.png" alt=""></a>
       
      </div>
      <div class="tp-product-details-social">
        <span>Share: </span>
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
      </div>
      <div class="tp-product-details-msg mb-15">
        <ul>
          <li>30 days easy returns</li>
          <li>Order yours before 2.30pm for same day dispatch</li>
        </ul>
      </div>
      <div
        class="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between"
      >
        <p>
          Guaranteed safe <br />
          & secure checkout
        </p>
        <img src="/img/product/icons/payment-option.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/pinia/useProductStore";
import { IProduct } from "@/types/product-type";
import { useCartStore } from "@/pinia/useCartStore";
import { useCompareStore } from "@/pinia/useCompareStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

// store
const compareStore = useCompareStore();
const wishlistStore = useWishlistStore();
const productStore = useProductStore();
const cartStore = useCartStore();
// props
const props = withDefaults(
  defineProps<{ product: IProduct; isShowBottom?: boolean }>(),
  {
    isShowBottom: true,
  }
);
let textMore = ref<boolean>(false);

const hasColorData = computed(() =>
  props.product.imageURLs.some((item) => item?.color && item?.color?.name)
);

// disini untuk mengubah description untuk intro membeli

const introBuy = "Halo, Saya ingin order produk";
const buyInWa = `${introBuy} ${
  props.product.title
} - ${props.product.description.substring(0, 100)}...`;
</script>


<style lang="scss">
.tp-product-detail-commerce{
  margin-bottom: 20px;
    .com-icon{
      width: 30px;
      text-align: center;
      margin-left: 5px;
      
    }
}
</style>