<template>
  <div class="app">
    <Inputs />
    <OptionsGrid />
    <Chooser />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Inputs from "@/components/Inputs.vue";
import OptionsGrid from "@/components/OptionsGrid.vue";
import Chooser from "@/components/Chooser.vue";

export default defineComponent({
  name: "App",
  components: {
    Inputs,
    OptionsGrid,
    Chooser
  }
});
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
