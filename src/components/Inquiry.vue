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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosBase } from '@/AxiosBase';
import AxiosResponseClass from '@/AxiosResponseClass';


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

        const inquiry = () => {
            inguiryload.value = false
            const axios: AxiosBase = new AxiosBase('http://localhost:9999/GetJRAtohyoData')
            axios.POST({ jsessionid: props.jsessionid, m: props.m })
                .then((res: AxiosResponseClass) => {
                    inguiryload.value = true
                    console.log(res)
                })
        }
        return {
            inguiryload,
            inquiry
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.InputNum {
    margin-top: 10px;
}
</style>
