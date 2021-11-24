<template lang="html">
  <tr>
    <td>{{ cartItem.name }}</td>
    <td>
      <input
        type="number"
        class="form-control"
        min="1"
        style="width:100px"
        v-model="cartItem.qty"
      />
    </td>
    <td>${{ total }}</td>
    <td>
      <button class="btn btn-danger" @click="removeItemFromCart(cartItem)">
        Remove
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "cartItem",
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["removeItemFromCart"])
  },
  computed: {
    total() {
      return (this.cartItem.qty * this.cartItem.price).toFixed(2);
    }
  }
};
</script>

<style lang="css" scoped></style>
