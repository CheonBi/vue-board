<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from "vue-router";
import axios from 'axios'
import { useUserStore } from "@/stores/auth";

const store = useUserStore();

const userid = ref("")
const password = ref("")
const baseurl = "http://localhost"
const router = useRouter()

const login = () => {
  var url = baseurl + '/member/login'
  axios.post(url, {
    userid : userid.value,
    password : password.value
  })
  .then(response => {
    console.log(response)
    if(response.request.status === 200){
      router.push({name : "home"})
      store.login(response.data.userid)
    }
  })
  .catch(console.error())
}

</script>

<template>
  <main class="content">
    <div class="email-login">
      <div class="page-title">
        <div class="content">
          <div class="title-row">
            <div class="title title--show">
              <h1>비즈니스 회원 로그인</h1>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent="login">
        <div class="login-input">
          <div class="labeled-input">
            <div class="labeled-input__label">
              <label for="userid">아이디</label>
            </div>
          </div>
          <div class="labeled-input__input">
            <div class="base-input-wrapper">
              <div class="input-text">
                <input type="text" v-model="userid">
              </div>
            </div>
          </div>
        </div>
        <div class="login-input">
          <div class="labeled-input">
            <div class="labeled-input__label">
              <label for="userid">비밀번호</label>
            </div>
          </div>
          <div class="labeled-input__input">
            <div class="base-input-wrapper">
              <div class="input-text">
                <input type="password" v-model="password">
              </div>
            </div>
          </div>
        </div>
        <div class="login-options">
          <div class="actions">
            <label class="checkbox-label">
              <input type="checkbox"> 로그인 유지
            </label>
            <div class="routerLink">
              <RouterLink :to="{name: 'forgetPass' }">비밀번호 재설정</RouterLink>
            </div>
          </div>
        </div>
        <button class="button-login" type="submit">
          <span>
            <span class="text"> 로그인</span>
          </span>
        </button>
      </form>
      <div class="go-register">
        <div class="caption">계정이 없으신가요?</div>
        <RouterLink :to="{name: 'join'}">회원가입</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  background-color: white;
}
.content {
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.email-login {
  background-color: white;
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  box-sizing: border-box;
}

.page-title h1 {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin-top: 160px;
}

.login-input {
  margin-bottom: 20px;
}

.labeled-input__label label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.labeled-input__input input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 8px;
  transition: border-color 0.3s;
}

.labeled-input__input input:focus {
  border-color: #6200ea;
  outline: none;
}

.checkbox-label {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  vertical-align: top;
  margin-right: 10px; /* 체크박스와 링크 사이에 여백을 추가 */
}

.routerLink {
  text-align: right;
  font-size: 14px;
  color: #6200ea;
}

.routerLink a {
  text-decoration: none;
  color: #6200ea;
}

.actions {
  display: flex;
  justify-content: space-between; /* 수평 배치 */
  align-items: center; /* 세로 정렬 */
}

.button-login {
  width: 100%;
  padding: 12px;
  background-color: #6200ea;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-login:hover {
  background-color: #3700b3;
}

.button-login:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}
/* 계정이 없으신가요?와 회원가입 링크 스타일 */
.go-register {
  margin-top: 20px; /* 로그인 버튼과의 간격 조정 */
  text-align: center; /* 가운데 정렬 */
}

.go-register .caption {
  font-size: 14px;
  color: #333;
}

.go-register a {
  text-decoration: none;
  color: #6200ea;
  font-size: 14px;
  font-weight: 500;
}
</style>
