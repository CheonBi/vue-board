<script setup>
import { ref, onMounted } from "vue";
import { tripAxios } from "@/middlewares/common-axios";

const axios = tripAxios()
const attractions = ref([])
const log = ref("");
const isLoading = ref(false)

const searchAttraction = () => {

    axios
        .get('trip/sido', {
            onStart: () => (isLoading.value = true),    // 로딩 시작
            onFinish: () => (isLoading.value = false),  // 로딩 종료
        })
        .then((response) => {
            console.log(response)
            attractions.value = response.data
            log.value = response.request['__URL__']
        })
        .catch((error) => {
            console.log(error)
        })
}
</script>

<template>
    <div class="d-flex bg-body-secondary">
        <div class="container-fluid">
            <div class="alert alert-primary text-center fw-bold display-6 mt-3" role="alert">
                관광지 목록
            </div>
            <div class="row g-3 align-items-center mb-3 justify-content-center">
                <div class="col-auto">
                    <label for="attraction" class="col-form-label">관광지</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="attraction" class="form-control" />
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-secondary" @click="searchAttraction">
                        검색
                    </button>
                </div>
            </div>
            <div class="row mt-5" v-if="isLoading"></div>
            <div class="row" v-else>
                <template v-for="attraction in attractions" :key="attraction.contentid" :attraction="attraction">
                    <div>
                        {{ attraction.sidocode }} {{ attraction.sidoname }} {{ log }}
                    </div>
                </template>
                <!-- <VTripCard v-for="attraction in attractions" :key="attraction.contentid" :attraction="attraction" /> -->
            </div>
        </div>
    </div>
</template>

<style scoped></style>
