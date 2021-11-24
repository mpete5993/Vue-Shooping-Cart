<template>
  <div>
    <div class="container-fluid">
      <div class="row" style="margin-bottom: 20px;">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Shopping Cart</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-7">
          <cartList />
        </div>
        <div class="col-sm-5">
          <productList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productList from "./components/product/productList.vue";
import cartList from "./components/cart/cartList.vue";
export default {
  name: "app",
  components: {
    productList,
    cartList
  }
};
</script>

<style>
.product-card {
  margin-bottom: 10px;
}
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
