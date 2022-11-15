<template>
  <div class="p-4">
      <div class="user py-4">
          <h2 class="text-center py-4">
              تفاصيل العميل
          </h2>
          <customer-details />
      </div>
      <div class="poducts py-4">
        <h2 class="text-center py-4">
          تفاصيل المنتجات
        </h2>
        <products-details />
      </div>
  </div>
</template>

<script>
import CustomerDetails from '@/components/OrderDetails/CustomerDetails.vue';
import ProductsDetails from '@/components/OrderDetails/ProductsDetails.vue';
export default {
  components: { CustomerDetails, ProductsDetails },
  name: "OrderDetails",
};
</script>

<style>
</style>