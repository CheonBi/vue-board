<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { tripAxios } from "@/middlewares/common-axios";
import { useUserStore } from "@/stores/auth";

const router = useRouter()
const store = useUserStore()

const props = defineProps({type:String})
const axios = tripAxios()

const article = ref({
    title: "",
    content: "",
})

const Regist = () => {
    axios.post('/notice/regist',{
        title : article.value.title,
        content : article.value.content
    })
    .then(response => {
        if(response.request.status === 200){
            router.push({name: 'list'})
        }
    })
}
const moveList = () => {
    router.push({name: 'list'})
}

</script>

<template>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="userid" class="form-label">작성자 ID :</label>
        <input
          type="text"
          class="form-control"
          :disabled="true"
          :value= store.id
        />
        
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">제목 : </label>
        <input type="text" class="form-control" v-model="article.title" placeholder="제목..." />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용 : </label>
        <textarea class="form-control" v-model="article.content" rows="10"></textarea>
      </div>
      <div class="col-auto text-center">
        <button @click="Regist" type="submit" class="btn btn-outline-primary mb-3" v-if="type === 'regist'">
          글작성
        </button>
        <button type="submit" class="btn btn-outline-success mb-3" v-else>글수정</button>
        <button type="button" class="btn btn-outline-danger mb-3 ms-1" @click="moveList">
          목록으로이동...
        </button>
      </div>
    </form>
  </template>