<template>
  <div class="container">
    <h1 class="sectionHeader">Options</h1>
    <div class="options">
      <div class="option" v-for="o in options" :key="o">
        <div class="optionText">{{ o }}</div>
        <button class="delBtn" @click="removeOption(o)">
          <i class="material-icons delIcon">delete</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import useOptions from "@/hooks/useOptions";
import "@/styles/globals.scss";
export default {
  name: "OptionsGrid",
  setup() {
    const { options, removeOption } = useOptions();
    return {
      options,
      removeOption
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #f3e5f5;
  padding: 16px;
}

.options {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
}

.option {
  padding: 10px;
  border-radius: 10px;
  background-color: #4a148c;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.optionText {
  color: white;
  font-weight: bold;
  overflow: hidden;
  max-width: 210px;
  text-overflow: ellipsis;
}

.delBtn {
  padding: 0;
  background-color: transparent;
  border: none;
}

.delIcon {
  color: #e0e0e0;
  cursor: pointer;
  &:hover {
    color: white;
  }
}
</style>
