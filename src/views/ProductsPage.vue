<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل المنتجات</h2>
    <div class="text-center pb-4">
      <router-link to="/AddProduct">
        <button class="px-4 py-2 bg-blue-600 text-white">اضف منتج جديد</button>
      </router-link>
    </div>
    <div class="flex justify-center items-center">
      <products-table />
    </div>
  </div>
</template>

<script>
import ProductsTable from "@/components/ProductsPage/ProductsTable.vue";
export default {
  name: "ProductsPage",
  components: { ProductsTable },
};
</script>

<style>
</style>