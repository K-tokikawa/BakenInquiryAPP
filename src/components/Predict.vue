<template>
    
    <div>
        <div v-if="predictload">
            <div class="card flex justify-content-center">
                    <div class="flex flex-column gap-3">
                        <div v-for="Venue of Venues" :key="Venue.VenueName" class="flex align-items-center">
                            <Checkbox v-model="selectedVenue" :inputId="Venue.VenueName" name="Venue" :value="Venue.VenueNum" />
                            <label :for="Venue.VenueNum">{{ Venue.VenueName }}</label>
                        </div>
                    </div>
                    <div v-for="Round of Rounds" :key="Round.key" class="flex">
                            <Checkbox v-model="selectedRound" :inputId="Round.key" name="Venue" :value="Round.num" />
                            <label :for="Round.key">{{ Round.key }}</label>
                    </div>
                </div>
                <PrimevueButton @click="predict">予測開始</PrimevueButton>
                <div class="card flex justify-content-center">
                    <DropDown v-model="selectedRaces" editable :options="optionsRace" placeholder="Select a Race" class="w-full md:w-14rem" />
                    <PrimevueButton @click="Gettext">印コピー</PrimevueButton>
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
            <VueColumn field="Mark" header="Mark" ></VueColumn>
            <VueColumn field="HorseNo" header="HorseNo"></VueColumn>
            <VueColumn field="Name" header="Name" ></VueColumn>
            <VueColumn field="Predict" header="Predict"></VueColumn>
            <VueColumn field="Rank" header="Rank"></VueColumn>
        </TreeTable>
    </div>
</template>

<script lang="ts">
import Checkbox from 'primevue/checkbox';
import 'primeicons/primeicons.css';
import { Ref, defineComponent, ref } from 'vue';
import { AxiosBase } from '@/AxiosBase';
import AxiosResponseClass from '@/class/AxiosResponseClass';
import { IFPredictParentTreeNode, IFResponsePredictParentTreeNode } from '@/IF/IFPredictTreeNode';

export default defineComponent({
    name: 'HelloWorld',
    components: {
        Checkbox
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
        const Day = date.getDate()
        const selectedVenue = ref([])
        const selectedRound = ref([])
        const optionsRace: Ref<string[]> = ref([])
        const selectedRaces = ref()
        const Racetext: Ref<{
            [RaceID: string]: string}> = ref({})
        const Venues: Ref<{
            VenueNum: string,
            VenueName: string
        }[]> = ref([])
        const Rounds = ref([
            {num: 1, key: '1'},
            {num: 2, key: '2'},
            {num: 3, key: '3'},
            {num: 4, key: '4'},
            {num: 5, key: '5'},
            {num: 6, key: '6'},
            {num: 7, key: '7'},
            {num: 8, key: '8'},
            {num: 9, key: '9'},
            {num: 10, key: '10'},
            {num: 11, key: '11'},
            {num: 12, key: '12'},
        ])
        const axios: AxiosBase = new AxiosBase('http://localhost:9999/GetHoldVenue')
        axios.POST({Year: Year, Month: Month, HoldDay: Day})
            .then((res: AxiosResponseClass) => {
                Venues.value = res.Data as unknown as []
            })
        const Gettext = () => {
            const text = Racetext.value[selectedRaces.value]
            navigator.clipboard.writeText(text)
        }
        const predict = () => {
            predictload.value = false
            const axios: AxiosBase = new AxiosBase('http://localhost:9999/GetRacePredict')
            if (selectedVenue.value.length > 0 && selectedRound.value.length > 0) {
                optionsRace.value = []
                Racetext.value = {}
                selectedRaces.value = ''
                axios.POST({Year: Year, Month: Month, HoldDay: Day, Venue: selectedVenue.value, Rounds: selectedRound.value})
                    .then((res: AxiosResponseClass) => {
                        predictload.value = true
                        data.value = res.Data as unknown as IFPredictParentTreeNode
                        const resData = res.Data as unknown as IFResponsePredictParentTreeNode
                        for (const val of Object.keys(resData.root)) {
                            const RaceID = resData.root[Number(val)].data.RaceID
                            console.log(RaceID)
                            optionsRace.value.push(RaceID)
                            Racetext.value[RaceID] = resData.root[Number(val)].data.text
                        }
                        bol.value = true
                    })
            }
        }
        return {
            predictload,
            data,
            bol,
            predict,
            Venues,
            selectedVenue,
            Rounds,
            selectedRound,
            Gettext,
            selectedRaces,
            optionsRace
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
