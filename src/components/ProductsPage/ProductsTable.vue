<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
        "
      >
        <tr>
          <th scope="col" class="px-6 py-3">رقم المنتج</th>
          <th scope="col" class="px-6 py-3"> صورة المنتج </th>
          <th scope="col" class="px-6 py-3">اسم المنتج</th>
          <th scope="col" class="px-6 py-3"> سعر المنتج</th>
          <th scope="col" class="px-6 py-3">الحاله</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" :key="product.id" v-for="(product, index) in allProducts">
          <th
            scope="row"
            class="
              px-6
              py-4
              font-medium
              text-gray-900
              dark:text-white
              whitespace-nowrap
            "
          >
            {{++index}}
          </th>
          <td class="px-6 py-4">
              <img :src="'https://mod-bina.com/uploads/' + product.image.image" alt="" class="w-20">
          </td>
          <td class="px-6 py-4">{{product.name}}</td>
          <td class="px-6 py-4">{{product.price}} </td>
          <td class="px-6 py-4"> 
           متوفر
          </td>
            <td class="px-6 py-4">
              <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">
                 <a
              href="#"
              class="
                font-medium
                text-blue-600
                dark:text-blue-500
                hover:underline
              "
              >تعديل </a
            >
              </router-link>
                
          </td>
          <td class="px-6 py-4">
                 <a
              href="#"
              class="
                font-medium
                text-red-600
                dark:text-blue-500
                hover:underline
              "
             @click="deleteProduct(product.id)" 
              >حذف </a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data(){
    },
    name:"OrdersTable",
    methods: {
    ...mapActions(['fetchProducts']),
    deleteProduct(id) {
      this.$swal
        .fire({
          title: " هل انت متاكد ؟ ",
          text: " لن تستطيع استرجاع هذا المنتج مجددا ! ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1C64F2",
          cancelButtonColor: "#d33",
          confirmButtonText: " نعم, انا متاكد ",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteProduct", id);
            this.$swal.fire({
              icon: "success",
              title: " تم ",
              text: " تم حذف المنتج بنجاح ",
              confirmButtonColor: "#16a34a",
            });
          } else {
            this.$swal.fire({
              icon: "error",
              title: " الغاء ",
              text: " تم الغاء عملية الحذف ",
              confirmButtonColor: "#16a34a",
              confirmButtonText: "حسنا",
            });
          }
        });
    }
    
    },
    computed : mapGetters(['allProducts']),
      created() {
        this.fetchProducts()
      }
    
};
console.log('');
</script>

<style>
</style>