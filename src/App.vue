<template>
  <div class="app">
    <Inputs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Inputs from "./components/Inputs.vue";

export default defineComponent({
  name: "App",
  components: {
    Inputs
  }
});
</script>

<style lang="scss">
body {
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
