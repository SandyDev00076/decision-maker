<template>
  <div class="app">
    <Inputs />
    <OptionsGrid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Inputs from "./components/Inputs.vue";
import OptionsGrid from "./components/OptionsGrid.vue";

export default defineComponent({
  name: "App",
  components: {
    Inputs,
    OptionsGrid
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
