import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', () =>{
    const isAuth = ref(false)
    const id = ref("")

    function login(getId){
        isAuth.value = true;
        id.value = getId;
    }

    function logout(){
        isAuth.value = false;
        id.value =""
    }

    return {isAuth, login, logout, id}
})