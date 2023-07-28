<template>
    <div>
        <div v-if="predictload">
            <div v-if="!bol">
                <PrimevueButton @click="predict">予測開始</PrimevueButton>
            </div>
        </div>
        <div v-else class="card flex justify-content-center">
            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </div>
    <div v-if="bol" class="card">
        <TreeTable :value="data.root">
            <VueColumn field="RaceID" header="RaceID" expander="true"></VueColumn>
            <VueColumn field="HorseNo" header="HorseNo" ></VueColumn>
            <VueColumn field="Name" header="Name" ></VueColumn>
            <VueColumn field="Predict" header="Predict" ></VueColumn>
            <VueColumn field="Rank" header="Rank" ></VueColumn>
        </TreeTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosBase } from '@/AxiosBase';
import AxiosResponseClass from '@/class/AxiosResponseClass';

export default defineComponent({
    name: 'HelloWorld',
    components: {
        // InputNumberBox,
        // InputPasswordBox
    },
    props: {
        jsessionid: String,
        m: String
    },
    setup() {
        const predictload = ref(true)
        const data = ref()

        const bol = ref(false)
        const date = new Date()
        const Year = `${date.getFullYear()}`
        const Month = date.getMonth() + 1
        const Day = date.getDate() + 1

        const predict = () => {
            predictload.value = false
            const axios: AxiosBase = new AxiosBase('http://localhost:9999/GetRacePredict')
            axios.POST({Year: Year, Month: Month, HoldDay: Day})
                    .then((res: AxiosResponseClass) => {
                        predictload.value = true
                        data.value = res.Data
                        console.log(res.Data)
                        bol.value = true
                    })
        }
        return {
            predictload,
            data,
            bol,
            predict
        }
    }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resultcolumn{
    font-size: 1px !important;
}
</style>
