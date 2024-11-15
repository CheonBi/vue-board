import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { tripAxios } from "@/middlewares/common-axios";
import { useRoute, useRouter } from "vue-router";

export const useAttractionStore = defineStore("attraction", () => {
  const axios = tripAxios();
  const router = useRouter();

  const areaSido = ref([
    { no: 1, code: 1, name: "서울" },
    { no: 2, code: 2, name: "인천" },
    { no: 3, code: 3, name: "대전" },
    { no: 4, code: 4, name: "대구" },

    { no: 5, code: 5, name: "광주" },
    { no: 6, code: 6, name: "부산" },
    { no: 7, code: 7, name: "울산" },
    { no: 8, code: 8, name: "세종특별자치시" },

    { no: 9, code: 31, name: "경기도" },
    { no: 10, code: 32, name: "강원특별자치도" },
    { no: 11, code: 33, name: "충청북도" },
    { no: 12, code: 34, name: "충청남도" },

    { no: 13, code: 35, name: "경상북도" },
    { no: 14, code: 36, name: "경상남도" },
    { no: 15, code: 37, name: "전북특별자치도" },
    { no: 16, code: 38, name: "전라남도" },

    { no: 17, code: 39, name: "제주도" },
  ]);

  const selectedSido = ref("");
  const selectedGugun = ref("");
  const areaGugun = ref([]);
  const attractions = ref([]);

  function getGuguns(sidoCode) {
    axios
      .get(`trip/sido/${sidoCode}/gugun`)
      .then((response) => {
        console.log(response);
        areaGugun.value = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAttractions() {
    axios
      .get("trip/select", {
        params: {
          sido: selectedSido.value,
          gugun: selectedGugun.value,
        },
      })
      .then((response) => {
        console.log(response);
        attractions.value = response.data;
        router.push({ name: "attraction" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    areaSido,
    areaGugun,
    attractions,
    selectedSido,
    selectedGugun,
    getGuguns,
    getAttractions,
  };
});
