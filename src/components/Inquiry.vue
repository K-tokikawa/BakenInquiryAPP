<template>
    <div>
        <div v-if="inguiryload">
            <PrimevueButton @click="inquiry">照会</PrimevueButton>
        </div>
        <div v-else class="card flex justify-content-center">
            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>
    </div>
    <div v-if="bol" class="card">
        <TreeTable :value="value.root">
            <VueColumn class="resultcolumn" field="TotalBet単勝" header="単勝" expander="true"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBet複勝" header="複勝"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBet馬連" header="馬連"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBet枠連" header="枠連"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBet馬単" header="馬単"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBetワイド" header="ワイド"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBet三連複" header="三連複"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBet三連単" header="三連単"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalBet" header="Bet"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn単勝" header="単勝"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn複勝" header="複勝"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn馬連" header="馬連"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn枠連" header="枠連"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn馬単" header="馬単"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturnワイド" header="ワイド"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn三連複" header="三連複"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn三連単" header="三連単"></VueColumn>
            <VueColumn class="resultcolumn" field="TotalReturn" header="Return"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBet単勝" header="単勝"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBet複勝" header="複勝"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBet馬連" header="馬連"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBet枠連" header="枠連"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBet馬単" header="馬単"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBetワイド" header="ワイド"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBet三連複" header="三連複"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBet三連単" header="三連単"></VueColumn>
            <VueColumn class="resultcolumn" field="CountBetTotal" header="Total"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturn単勝" header="単勝"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturn複勝" header="複勝"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturn馬連" header="馬連"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturn枠連" header="枠連"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturn馬単" header="馬単"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturnワイド" header="ワイド"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturn三連複" header="三連複"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturn三連単" header="三連単"></VueColumn>
            <VueColumn class="resultcolumn" field="CountReturnTotal" header="Total"></VueColumn>
        </TreeTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosBase } from '@/AxiosBase';
import AxiosResponseClass from '@/AxiosResponseClass';
import JRADayBettingtohyoClass from '@/JRADayBettingtohyoClass';


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
        const value = ref()

        const bol = ref(false)
        const inquiry = () => {
            inguiryload.value = false
            const axios: AxiosBase = new AxiosBase('http://localhost:9999/GetJRAtohyoData')
            axios.POST({ jsessionid: props.jsessionid, m: props.m })
                .then((res: AxiosResponseClass) => {
                    inguiryload.value = true
                    value.value = CreateTree(res.Data as unknown as JRADayBettingtohyoClass)
                    bol.value = true
                })
        }
        return {
            inguiryload,
            inquiry,
            value,
            bol,
        }
    }

});
function CreateTree(data: JRADayBettingtohyoClass) {
    console.log(data)
    return {
        "root": [
            {
                key: "0",
                data: {
                    "TotalBet単勝": `${data.totalBet単勝}`,
                    "TotalBet複勝": `${data.totalBet複勝}`,
                    "TotalBet馬連": `${data.totalBet馬連}`,
                    "TotalBet枠連": `${data.totalBet枠連}`,
                    "TotalBet馬単": `${data.totalBet馬単}`,
                    "TotalBetワイド": `${data.totalBetワイド}`,
                    "TotalBet三連複": `${data.totalBet三連複}`,
                    "TotalBet三連単": `${data.totalBet三連単}`,
                    "TotalBet": `${data.totalBet}`,
                    "TotalReturn単勝": `${data.totalReturn単勝}`,
                    "TotalReturn複勝": `${data.totalReturn複勝}`,
                    "TotalReturn馬連": `${data.totalReturn馬連}`,
                    "TotalReturn枠連": `${data.totalReturn枠連}`,
                    "TotalReturn馬単": `${data.totalReturn馬単}`,
                    "TotalReturnワイド": `${data.totalReturnワイド}`,
                    "TotalReturn三連複": `${data.totalReturn三連複}`,
                    "TotalReturn三連単": `${data.totalReturn三連単}`,
                    "TotalReturn": `${data.totalReturn}`,
                    "CountBet単勝": `${data.countBet単勝}`,
                    "CountBet複勝": `${data.countBet複勝}`,
                    "CountBet馬連": `${data.countBet馬連}`,
                    "CountBet枠連": `${data.countBet枠連}`,
                    "CountBet馬単": `${data.countBet馬単}`,
                    "CountBetワイド": `${data.countBetワイド}`,
                    "CountBet三連複": `${data.countBet三連複}`,
                    "CountBet三連単": `${data.countBet三連単}`,
                    "CountBetTotal": `${data.countBetTotal}`,
                    "CountReturn単勝": `${data.countReturn単勝}`,
                    "CountReturn複勝": `${data.countReturn複勝}`,
                    "CountReturn馬連": `${data.countReturn馬連}`,
                    "CountReturn枠連": `${data.countReturn枠連}`,
                    "CountReturn馬単": `${data.countReturn馬単}`,
                    "CountReturnワイド": `${data.countReturnワイド}`,
                    "CountReturn三連複": `${data.countReturn三連複}`,
                    "CountReturn三連単": `${data.countReturn三連単}`,
                    "CountReturnTotal": `${data.countReturnTotal}`,
                }
            }
        ]
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resultcolumn{
    font-size: 1px !important;
}
</style>
