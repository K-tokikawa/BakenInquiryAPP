<template>
    <div class="field col formgroup-inline">
        <div v-if="Invalid">
            <div v-if="state.Warning">
                <span class="p-float-label">
                    <InputPassword id="number-input" v-model="state.value" class="p-invalid" :feedback="false"
                        @blur="CheckInvalid"
                        @focus="focus" />
                    <label for="number-input">{{ Label_Name }}</label>
                    <InlineMessage>Password を入力してください。</InlineMessage>
                </span>
            </div>
            <div v-else>
                <span class="p-float-label">
                    <InputPassword id="number-input" v-model="state.value" :feedback="false"
                    @blur="CheckInvalid"
                    @focus="focus" />
                    <label for="number-input">{{ Label_Name }}</label>
                </span>
            </div>
        </div>
        <div v-else>
            <span class="p-float-label">
                <InputPassword id="number-input" v-model="state.value" />
                <label for="number-input">{{ Label_Name }}</label>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';


export default defineComponent({
    name: "InputPasswordBox",
    props: {
        Label_Name: String,
        Invalid: Boolean
    },
    setup() {
        const state = reactive({
            value: null,
            Warning: false
        })
        const CheckInvalid = () => {
            // やっぱりsetTimeout内に処理を記述しないと値の更新タイミングが意図したものにならない
            setTimeout(() => {
                if (state.value != null && state.value != '') {
                    state.Warning = false
                } else {
                    state.Warning = true
                }
            })
        }

        const Value = () => {
            return state.value
        }

        return {
            state,
            CheckInvalid,
            focus,
            Value
        }
    }
})
</script>
<style>
.field {
    margin: 0px;
}
</style>