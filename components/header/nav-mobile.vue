<template>
  <HillBottomNavigation
    :color="property.color"
    :options="options"
    v-model="selected"
    @click="showMenu()"
  />
</template>

<script setup>
import { HillBottomNavigation } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

import { useUtilityStore } from "@/pinia/useUtilityStore";

const selected = ref(0);
const property = {
  color: "#010F1C",
};
const route = useRoute();

const options = ref([
  {
    id: 1,
    icon: "fa-solid fa-home",
    color: "#5639af",
    path: { name: "index" },
    title: "kjk",
  },
  {
    id: 2,
    icon: "fa-solid fa-shopping-cart",
    color: "#ac4793",
    badge: 1,
    path: { name: "shop" },
  },
  {
    id: 4,
    icon: "fa-solid fa-bars",
    color: "#4493a7",
  },
]);

watch(route, (to, from) => {
  const selectedIndex = options.value.findIndex(
    (item) => item.path.name === to.name
  );
  if ((selectedIndex >= 0) & (selectedIndex !== 4)) {
    selected.value = selectedIndex;
  }
});

const utilsStore = useUtilityStore();

function showMenu() {
  if (selected.value === 4) {
    utilsStore.handleOpenMobileMenu();
  }
}
</script>
