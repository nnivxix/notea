<script setup lang="ts"></script>

<template>
  <main
    class="max-w-lg rounded-2xl flex flex-col min-h-screen bg-gray-100 px-4 mx-auto"
  >
    <header class="py-3">
      <RouterLink to="/" class="text-2xl" title="Notea"> Notea</RouterLink>
    </header>
    <div class="flex-1">
      <RouterView />
    </div>
  </main>
</template>
