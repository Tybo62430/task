<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./App-header.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
