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
          <th scope="col" class="px-6 py-3">رقم المستخدم</th>
          <th scope="col" class="px-6 py-3">اسم المستخدم</th>
          <th scope="col" class="px-6 py-3"> الايميل </th>
          <th scope="col" class="px-6 py-3"> رقم الهاتف </th>
          <th scope="col" class="px-6 py-3">نوع المستخدم</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" :key="item" v-for="item in 5">
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
            1
          </th>
          <td class="px-6 py-4">
              احمد عادل
          </td>
          <td class="px-6 py-4"> amnnn80@ggmail.com</td>
          <td class="px-6 py-4">01225803725 </td>
          <td class="px-6 py-4">
           زبون
          </td>
            <td class="px-6 py-4">
                 <a
              href="#"
              class="
                font-medium
                text-blue-600
                dark:text-blue-500
                hover:underline
              "
              data-modal-toggle="EditUser"
              >تعديل </a
            >
                
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
              >حذف </a
            >
          </td>
        </tr>
      </tbody>
    </table>

<!-- modaaaaaaaaal -->
      <div id="EditUser" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    تعديل القسم
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="EditUser">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
               <edit-user-input />
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import EditUserInput from '../EditUser/EditUserInput.vue';
export default {
  components: { EditUserInput },
    name:"UsersTabel"
};
</script>

<style>
</style>