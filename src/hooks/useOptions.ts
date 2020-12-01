import { reactive, toRefs } from "vue"

type OptionsState = {
    options: string[]
}

const optionState = reactive<OptionsState>({
    options: []
});

const useOptions = () => {
    function addOption(option: string) {
        optionState.options = [...optionState.options, option];
    }

    return {
        ...toRefs(optionState),
        addOption
    }
}

export default useOptions;