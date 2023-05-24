<template>
    <div class="field col formgroup-inline">
        <div v-if="Invalid">
            <div v-if="state.Warning">
                <span class="p-float-label">
                    <InputNumber id="number-input" v-model="state.value" class="p-invalid" :useGrouping="Grouping" @blur="CheckInvalid" @focus="focus"/>
                    <label for="number-input">{{ Label_Name }}</label>
                    <InlineMessage>{{ Warning_Name }} を入力してください。</InlineMessage>
                </span>
            </div>
            <div v-else>
                <span class="p-float-label">
                    <InputNumber id="number-input" v-model="state.value" :useGrouping="Grouping" @blur="CheckInvalid" @focus="focus"/>
                    <label for="number-input">{{ Label_Name }}</label>
                </span>
            </div>
        </div>
        <div v-else>
            <span class="p-float-label">
                <InputNumber id="number-input" v-model="state.value" :useGrouping="Grouping"/>
                <label for="number-input">{{ Label_Name }}</label>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';


export default defineComponent({
    name: "InputNumberBox",
    props: {
        Label_Name: String,
        Invalid: Boolean,
        Warning_Name: String,
        Grouping: Boolean
    },
    setup() {
        const state = reactive({
            value: null,
            Warning: false
        })
        const CheckInvalid = () => {
            // やっぱりsetTimeout内に処理を記述しないと値の更新タイミングが意図したものにならない
            setTimeout(() => {
                if (state.value != null) {
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