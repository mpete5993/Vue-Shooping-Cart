<template lang="html">
  <div class="">
    <productListItem
      v-for="product in productItems"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import productListItem from "./productListItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "productList",
  components: {
    productListItem
  },
  computed: {
    ...mapGetters(["productItems"])
  },
  created() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style lang="css" scoped></style>
