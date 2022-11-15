<template>
  <div class="w-full">
    <home-charts></home-charts>
    <home-services></home-services>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCharts from "../components/HomePage/HomeCharts.vue"
import HomeServices from "../components/HomePage/HomeServices.vue"
export default {
  name: 'HomeView',
components:{
  HomeCharts,
  HomeServices
}
}
</script>
