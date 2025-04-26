<script setup lang="ts">
import { App as CapacitorApp } from "@capacitor/app";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

CapacitorApp.addListener("backButton", (event) => {
  if (!event.canGoBack || route.path === "/") {
    CapacitorApp.exitApp();
  } else {
    router.back();
  }
});
</script>

<template>
  <Suspense>
    <main
      class="max-w-lg rounded-2xl flex flex-col min-h-screen bg-gray-50 px-4 mx-auto"
    >
      <header class="py-3">
        <RouterLink to="/" class="text-2xl" title="Notea"> Notea</RouterLink>
      </header>
      <div class="flex-1 mb-6">
        <RouterView />
      </div>
    </main>
  </Suspense>
</template>
