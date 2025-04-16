<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { uid } = route.params;
</script>
<template>
  <div>uid : {{ uid }}</div>
</template>
