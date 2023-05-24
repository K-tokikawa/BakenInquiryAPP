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
    <div v-if="bol">
        {{ value }}
        <TreeTable :value="test">
            <VueColumn field="aaaaa" header="CountBetTotal" expander></VueColumn>
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
        const test = [{"aaaaa": 11}]
        const bol = ref(false)
        const inquiry = () => {
            inguiryload.value = false
            const axios: AxiosBase = new AxiosBase('http://localhost:9999/GetJRAtohyoData')
            axios.POST({ jsessionid: props.jsessionid, m: props.m })
                .then((res: AxiosResponseClass) => {
                    inguiryload.value = true
                    value.value = res.Data as unknown as JRADayBettingtohyoClass

                    bol.value = true
                })
        }
        return {
            inguiryload,
            inquiry,
            test,
            value,
            bol,
        }
    }

});
function CreateTree(data: JRADayBettingtohyoClass) {
    const tree = {
        "root": [
            {
                key: "0",
                data: {
                    "TotalBet単勝": `${data.TotalBet単勝}`,
                    "TotalBet複勝": `${data.TotalBet複勝}`,
                    "TotalBet馬連": `${data.TotalBet馬連}`,
                    "TotalBet枠連": `${data.TotalBet枠連}`,
                    "TotalBet馬単": `${data.TotalBet馬単}`,
                    "TotalBetワイド": `${data.TotalBetワイド}`,
                    "TotalBet三連複": `${data.TotalBet三連複}`,
                    "TotalBet三連単": `${data.TotalBet三連単}`,
                    "TotalBet": `${data.TotalBet}`,
                    "TotalReturn単勝": `${data.TotalReturn単勝}`,
                    "TotalReturn複勝": `${data.TotalReturn複勝}`,
                    "TotalReturn馬連": `${data.TotalReturn馬連}`,
                    "TotalReturn枠連": `${data.TotalReturn枠連}`,
                    "TotalReturn馬単": `${data.TotalReturn馬単}`,
                    "TotalReturnワイド": `${data.TotalReturnワイド}`,
                    "TotalReturn三連複": `${data.TotalReturn三連複}`,
                    "TotalReturn三連単": `${data.TotalReturn三連単}`,
                    "TotalReturn": `${data.TotalReturn}`,
                    "CountBet単勝": `${data.CountBet単勝}`,
                    "CountBet複勝": `${data.CountBet複勝}`,
                    "CountBet馬連": `${data.CountBet馬連}`,
                    "CountBet枠連": `${data.CountBet枠連}`,
                    "CountBet馬単": `${data.CountBet馬単}`,
                    "CountBetワイド": `${data.CountBetワイド}`,
                    "CountBet三連複": `${data.CountBet三連複}`,
                    "CountBet三連単": `${data.CountBet三連単}`,
                    "CountBetTotal": `${data.CountBetTotal}`,
                    "CountReturn単勝": `${data.CountReturn単勝}`,
                    "CountReturn複勝": `${data.CountReturn複勝}`,
                    "CountReturn馬連": `${data.CountReturn馬連}`,
                    "CountReturn枠連": `${data.CountReturn枠連}`,
                    "CountReturn馬単": `${data.CountReturn馬単}`,
                    "CountReturnワイド": `${data.CountReturnワイド}`,
                    "CountReturn三連複": `${data.CountReturn三連複}`,
                    "CountReturn三連単": `${data.CountReturn三連単}`,
                    "CountReturnTotal": `${data.CountReturnTotal}`
                }
            }
        ]
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.InputNum {
    margin-top: 10px;
}
</style>
