<template>
  <div class="w-full p-4">
      <h2 class="text-xl text-center">الرصيد</h2>
    <div class="md:flex justify-between items-center h-full block p-4 ">
      <payment-header />
      <payment-content />
      </div>
  </div>
</template>

<script>
import PaymentHeader from '@/components/PaymentPage/PaymentHeader.vue'
import PaymentContent from '@/components/PaymentPage/PaymentContent.vue'
export default {
  components: { PaymentHeader, PaymentContent },
name:"PaymentPage"
}
</script>

<style>

</style>