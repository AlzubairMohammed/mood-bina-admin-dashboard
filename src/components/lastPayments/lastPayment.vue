<template>
  <div>
      <div class="p-4 bg-gray-200 flex items-center jusify-between rounded-xl mt-2" :key="item" v-for="item in 2">
          <span class="text-green-600">
              +159.99$
          </span>
          <span>
              رسوم الطلبيه رقم #129
          </span>
      </div>
       <div class="p-4 bg-gray-200 flex items-center jusify-between rounded-xl mt-2" :key="item" v-for="item in 2">
          <span class="text-red-600">
              -159.99$
          </span>
          <span>
            تحويل الي الحساب amnnn80@gmail.com
          </span>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>