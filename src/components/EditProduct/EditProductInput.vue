<template>
  <form ref="form" class="w-full p-4" @submit.prevent="updateProduct()">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="name"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="product.name"
      />
      <label
        for="email"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
        >الاسم</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="price"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="product.price"
      />
      <label
        for="phone"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
      >
        سعر الشراء</label
      >
    </div>

        <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="price"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="product.price"
      />
      <label
        for="phone"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
      >
        سعر البيع</label
      >
    </div>

        <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="price"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="product.price"
      />
      <label
        for="phone"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
      >
        الضريبه</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="qty"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="product.qty"
      />
      <label
        for="phone"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
      >
        الكميه</label
      >
    </div>


        <div class="total-price">
            <div class="shadow p-4">
              
                <div class="products grid grid-cols-2">
                  <div color="dark">
                    <span> السعر مع الضريبه</span>
                  </div>
                  <div color="dark" class="">
                    <span class="font-semibold ml-8"
                      >{{
                        delPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}

                      <span class="text-[12px]"> ر.س</span>
                    </span>
                  </div>
                </div>
                <div class="products grid grid-cols-2">
                  <div color="dark">
                    <span style="font-size: 17px">الربح</span>
                  </div>
                  <div color="dark" class="">
                    <span class="font-semibold" style="font-size: 17px"
                      >{{
                        (totalCart + delPrice)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      <span class="text-[12px]"> ر.س</span>
                    </span>
                  </div>
                </div>
            </div>
          </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      > التصنيف </label
    >
    <select
      id="countries"
      name="sub_section_id"
      class="
        bg-gray-50
        border border-gray-300
        text-gray-900 text-sm
        rounded-lg
        focus:ring-black focus:border-black
        block
        w-full
        p-2.5
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
    >
      <option :value="sub_section_id" v-for="category in allCategories" :key="category.id">{{category.name}}</option>
    </select>
<div class="drag py-2">
  <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      > صور المنتج </label>
    <div class="flex justify-center items-center w-full ">
      
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" name="photos" type="file" class="hidden" />
    </label>
</div> 
</div>

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
      >
        تعديل  المنتج
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditProductInput",
  inject: ["responseAlert"],
  data() {
    return {
      product: {},
      delPrice: 0,
      totalCart: 0,
      sub_section_id:this.$route.params.id,
    };
  },
  methods: {
    updateProduct() {
      const formData = new FormData(this.$refs.form);
      const validationData = Object.fromEntries(formData)
      const id = this.product.id;
      if(!validationData.name) {
        this.error = 'الرجاء ادخال اسم المنتج'
        console.log(this.error);
        this.responseAlert(this.error, " عفوا ", "warning");
        return
      }
      if(!validationData.qty) {
        this.error = 'الرجاء ادخال كمية المنتج'
        console.log(this.error);
        this.responseAlert(this.error, " عفوا ", "warning");
        return
      }
      if(!validationData.photos.name) {
        this.error = 'الرجاء ادخال صورة المنتج'
        console.log(this.error);
        this.responseAlert(this.error, " عفوا ", "warning");
        return
      }
      const payload = { id, product: formData };
      this.$store.dispatch("updateProduct", payload);
      this.success = true;
      this.$router.push({path: '/ProductsPage'});
    },
    ...mapActions(['fetchCategories'])
  },
  created() {
    const id = this.$route.params.id;
    const self = this;
    this.$store.state.products.products.forEach((product) => {
      if (product.id == id) {
        self.product = product;
      }
    });
    this.fetchCategories()
  },
 computed: mapGetters(["allCategories"]),
  
};
</script>

<style>
</style>