<script setup>
import { tripAxios } from '@/middlewares/common-axios';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import BoardListItem from '@/components/notice/item/BoardListItem.vue';

const axios = tripAxios();
const router = useRouter();
const articles = ref([]);
const getArticle = () => {
    axios.get('/notice/list')
    .then(response => {
        if(response.request.status === 200){
            articles.value = response.data;
            console.log(response)
            //router.push({name : "home"})
        }
    })
}

onMounted(() =>{
    getArticle()
})

const goToRegist = () => {
    router.push({name : "regist"})
}
</script>

<template>
    <button @click="goToRegist">등록하기</button>
     <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">내용</th>
              <th scope="col">작성일</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody>
            <BoardListItem
              v-for="article in articles"
              :key="article.articleNo"
              :article="article"
            ></BoardListItem>
          </tbody>
        </table>
</template>

<style scoped>

</style>