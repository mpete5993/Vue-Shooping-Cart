<template lang="html">
  <div class="card product-card">
    <div class="card-header">
      {{ product.name }}
    </div>
    <div class="card-body">
      <p class="card-text">
        {{ product.description }}
      </p>
      <p class="text-primary">$ {{ product.price }}</p>
      <button class="btn btn-primary" @click="addToCart(product)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "productListItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["addToCart"])
  }
};
</script>

<style lang="css" scoped></style>
