<script setup lang="ts"></script>

<template>
  <main>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <RouterView />
  </main>
</template>
