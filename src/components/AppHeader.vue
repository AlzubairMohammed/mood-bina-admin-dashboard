<template>
  <aside class="md:w-64 w-full" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <div class="flex items-center md:justify-center justify-between pl-2.">
        <span class="self-center text-xl font-semibold whitespace-nowrap"
          >لوحه التحكم</span
        >
        <svg
          @click="menuToggle()"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul class="md:block" :class="{ block: menuOpen, hidden: menuClose }">
        <!-- home -->
        <router-link to="/">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span class="mr-3">الرئيسيه </span>
            </a>
          </li>
        </router-link>

        <!-- profile -->
        <router-link to="/ProfilePage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  w-6
                  h-6
                  text-gray-500
                  transition
                  duration-75
                  group-hover:text-gray-900
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span class="mr-3">الملف الشخصي</span>
            </a>
          </li>
        </router-link>

        <!-- orders -->
        <router-link to="/OrdersPage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
              <span class="mr-3">الطلبات</span>
            </a>
          </li>
        </router-link>

        <!-- products -->
        <router-link to="/ProductsPage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <span class="mr-3">المنتجات</span>
            </a>
          </li>
        </router-link>

        <!-- payment -->
        <router-link to="/PaymentPage"
          ><li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="mr-3">الرصيد</span>
            </a>
          </li>
        </router-link>

        <!-- logout -->
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              text-base
              font-normal
              text-gray-900
              rounded-lg
              hover:bg-gray-100
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="mr-3 text-red-500" @click="logOut()">تسجيل الخروج</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuClose: true,
      menuOpen: false,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('user_token')
      location.reload();
      console.log('hi');
    },
    menuToggle() {
      this.menuClose = !this.menuClose;
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
</style>