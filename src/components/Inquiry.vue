<template>
    <div>
        <div v-if="inguiryload">
            <div v-if="!bol">
                <PrimevueButton @click="inquiry">照会</PrimevueButton>
            </div>
        </div>
        <div v-else class="card flex justify-content-center">
            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </div>
    <div v-if="bol" class="card">
        <TreeTable :value="data.root">
            <VueColumn field="項目" header="項目" expander="true"></VueColumn>
            <VueColumn field="TotalBet" header="TotalBet" ></VueColumn>
            <VueColumn field="TotalReturn" header="TotalReturn"></VueColumn>
            <VueColumn field="ReturnRate" header="ReturnRate"></VueColumn>
            <VueColumn field="CountBet" header="CountBet"></VueColumn>
            <VueColumn field="HitRate" header="HitRate"></VueColumn>
        </TreeTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosBase } from '@/AxiosBase';
import AxiosResponseClass from '@/AxiosResponseClass';
import {IFInquiryParentTreeNode} from '@/IF/IFInquiryTreeNode'

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
    setup(props) {
        console.log(props.jsessionid)
        console.log(props.m)
        const inguiryload = ref(true)
        const data = ref()

        const mindate = ref()
        const maxdate = ref()

        const bol = ref(false)
        const inquiry = () => {
            inguiryload.value = false
            const axios: AxiosBase = new AxiosBase('http://localhost:9999/GetJRAtohyoData')
            axios.POST({ jsessionid: props.jsessionid, m: props.m, mindate: mindate, maxdate: maxdate })
                .then((res: AxiosResponseClass) => {
                    inguiryload.value = true
                    data.value = res.Data as unknown as IFInquiryParentTreeNode
                    console.log(res.Data)
                    bol.value = true
                })
        }
        return {
            inguiryload,
            inquiry,
            data,
            bol,
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
