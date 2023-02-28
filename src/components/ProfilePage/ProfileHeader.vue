<template>
  <div class="image bg-gray-100 rounded w-full">
        <div class="flex justify-center flex-col items-center p-4">
          <img
          :src="'https://mod-bina.com/uploads/' + userData?.data?.image"
            alt=""
            class="
              rounded-full
              w-36
              h-36
              -mt-14
              border border-gray-100
              shadow-xl
            "
          />
          <div class="rounded-xl flex bg-white mt-2 py-1 px-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span>تغيير الصورة</span>
          </div>
          <div class="text-center py-2">
            <h2>{{ userData?.data?.name }}</h2>
            <span class="block text-gray-600"></span>
          </div>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name:"ProfileHeader",

  computed : mapGetters(["userData"]),
}
</script>

<style>

</style>