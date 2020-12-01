import { reactive, toRefs } from "vue";

type OptionsState = {
  options: string[];
};

const optionState = reactive<OptionsState>({
  options: []
});

const useOptions = () => {
  function addOption(option: string) {
    optionState.options = [...optionState.options, option];
  }

  function removeOption(option: string) {
    const tempOptions = [...optionState.options];
    const itemToDel = tempOptions.findIndex(o => o === option);
    if (itemToDel > -1) tempOptions.splice(itemToDel, 1);
    optionState.options = [...tempOptions];
  }

  return {
    ...toRefs(optionState),
    addOption,
    removeOption
  };
};

export default useOptions;
