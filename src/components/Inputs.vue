<template>
  <form v-on:submit.prevent="addOptionToState()" class="container">
    <input
      v-model="option"
      placeholder="Enter your Option"
      class="optionInput"
    />
    <button type="submit" class="addOption">Add</button>
  </form>
</template>
<script lang="ts">
import { ref } from "vue";
import useOptions from "../hooks/useOptions";
export default {
  name: "Inputs",
  setup() {
    const option = ref("");
    const options = ref<string[]>([]);
    const { addOption } = useOptions();

    function addOptionToState() {
      addOption(option.value);
      option.value = "";
    }

    return {
      option,
      options,
      addOptionToState
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #5c6bc0;
  padding: 16px;
  display: flex;
  justify-content: center;
}

.optionInput {
  padding: 5px 16px;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 10px;
  min-width: 50%;
  margin-right: 16px;
}

.addOption {
  padding: 5px 10px;
  font-weight: bold;
  background-color: #3f51b5;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #e8eaf6;
  border-radius: 10px;
  transition: background-color 0.5s;
  font-size: 20px;

  &:hover {
    background-color: #3949ab;
  }
}
</style>
