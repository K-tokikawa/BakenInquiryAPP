<template>
  <div>
    <div class="InputNum">
      <InputNumberBox :Label_Name="Label_PID" ref="PID" :Invalid="true" :Warning_Name="'PID'" :Grouping="false"/>
    </div>
    <div class="InputNum">
      <InputPasswordBox :Label_Name="Label_PWD" ref="PWD" :Invalid="true"/>
    </div>
    <div class="InputNum">
      <InputNumberBox :Label_Name="Label_PARS" ref="PARS" :Invalid="true" :Warning_Name="'PARS'" :Grouping="false"/>
    </div>
    <div v-if="loginload">
      <PrimevueButton @click="login">Login</PrimevueButton>
    </div>
    <div v-else class="card flex justify-content-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InputNumberBox from '@/components/controller/InputNumber.vue'
import InputPasswordBox from '@/components/controller/InputPassword.vue'
import { AxiosBase } from '@/AxiosBase';
import AxiosResponseClass from '@/class/AxiosResponseClass';
import router from'../router/index'

interface loginResponse {
  jsessionid: string
  m: string
}

export default defineComponent({
  name: 'HelloWorld',
  components: {
    InputNumberBox,
    InputPasswordBox
  },
  props: {
    msg: String,
  },
  setup() {
    const Label_PID = 'PID'
    const Label_PWD = 'PWD'
    const Label_PARS = 'PARS'
    const PID = ref()
    const PWD = ref()
    const PARS = ref()

    const loginload = ref(true)

    const login = () => {
      loginload.value = false
      if (
        PID.value.Value() != null&&
        PWD.value.Value() != null&&
        PARS.value.Value() != null
      ) {
        const axios: AxiosBase = new AxiosBase('http://localhost:9999/JRAtohyoLogin')
        axios.POST({ UID: PID.value.Value(), PWD: PWD.value.Value(), PARS: PARS.value.Value(), FROM: '000' })
          .then((res: AxiosResponseClass) => {
            loginload.value = true
            const data = res.Data as unknown as loginResponse
            const m = data.m
            const jsessionid = data.jsessionid
            router.push({ name: 'Inquiry', params: { jsessionid, m } })
          })
      } else {
        const axios: AxiosBase = new AxiosBase('http://localhost:9999/JRAtohyoLogin')
        axios.POST({ UID: 63638205, PWD: 5739, PARS: 2019, FROM: '000' })
          .then((res: AxiosResponseClass) => {
            loginload.value = true
            const data = res.Data as unknown as loginResponse
            const m = data.m
            const jsessionid = data.jsessionid
            router.push({name: 'Inquiry', params:{jsessionid, m}})
          })
      }
    }

    return {
      Label_PID,
      Label_PWD,
      Label_PARS,
      PID,
      PWD,
      PARS,
      loginload,
      login
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.InputNum{
  margin-top: 10px;
}
</style>
