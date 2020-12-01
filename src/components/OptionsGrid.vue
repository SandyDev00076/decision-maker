<template>
  <div class="container">
    <h1 class="sectionHeader">Options</h1>
    <div class="options">
      <div class="option" v-for="o in options" :key="o">
        {{ o }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import useOptions from "@/hooks/useOptions";
export default {
  name: "OptionsGrid",
  setup() {
    const { options } = useOptions();
    return {
      options
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #ba68c8;
  padding: 16px;
}
.sectionHeader {
  margin: 0;
  font-size: 25px;
  text-transform: uppercase;
  color: #4a148c;
}
</style>
