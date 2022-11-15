<template>
  <div class="p-4 w-full">
      <h2 class="text-center">
          العمليات السابقه
      </h2>
      <last-payment />
  </div>
</template>

<script>
import LastPayment from '@/components/lastPayments/lastPayment.vue'
export default {
name:"lastPayments",
components:{
    LastPayment
}
}
</script>


<style>

</style>