<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/auth';
import { tripAxios } from '@/middlewares/common-axios';

const axios = tripAxios();
const store = useUserStore();
const user = ref({
    userid : "",
    password : "",
    username : "",
    registdate : "",
    email : "",
    role : ""

})

const detail = () => {
    axios.get('/member/detail',{
        params:{
            userid : store.id
        }
    }).then(response => {
        if(response.request.status === 200){
            user.value = response.data;
        }
    })
}
onMounted(()=> {
    detail();
})

</script>

<template>
    <div>
        <p>{{ user.userid }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.password }}</p>
        <p>{{ user.role }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.registdate }}</p>
        <!-- 나중에 수정하기 버튼 만들어서 수정하기 -->
    </div>
</template>

<style scoped>

</style>