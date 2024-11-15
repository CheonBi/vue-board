<template>
  <div class="container">
    <h1 class="title">회원가입</h1>
    
    <!-- 회원가입 폼 -->
    <div class="form-container">
      <form @submit.prevent="register">
        <!-- 이메일 입력 필드와 인증 버튼을 수평으로 배치 -->
        <div class="input-group email-group">
          <input
            type="email"
            v-model="email"
            class="input-field email-input"
            placeholder="이메일을 입력하세요"
            required
          />
          <button type="submit" class="submit-button">인증번호 받기</button>
        </div>

        
        
        <!-- 이메일 인증 -->
        <div class="email-auth">
          <div>
            <p v-if="isVerified === null" class ="auth-start">이메일 인증을 진행해주세요.</p>
            <p v-if="isVerified === false" class="auth-message">이메일을 확인하고 인증을 완료하세요.</p>
            <p v-if="isVerified === true" class="auth-message success">이메일 인증이 완료되었습니다</p>
            
          </div>
        </div>
        <div class="auth-input-group">
              <input type="text" v-model="token" class="input-field auth-input" placeholder="인증코드를 입력하세요" />
              <input type="button" @click="check" class="auth-button" value="인증하기"/>
            </div>
        
        <div class="input-group">
          <label for="username" class="input-label">이름</label>
          <input v-model="username" type="text" id="username" class="input-field" placeholder="이름을 입력하세요" />
        </div>
        <!-- 아이디와 비밀번호 입력 -->
        <div class="input-group">
          <label for="userid" class="input-label">아이디</label>
          <input v-model="userid" type="text" id="userid" class="input-field" placeholder="아이디를 입력하세요" />
        </div>
        
        <div class="input-group">
          <label for="password" class="input-label">비밀번호</label>
          <input v-model="password" type="password" id="password" class="input-field" placeholder="비밀번호를 입력하세요" />
        </div>

        <div class="register-btn">
          <input type="button" value="회원가입" @click="join"/>
        </div>
        
      </form>
      <!-- <div class="auth-input-group">
              <input type="text" v-model="token" class="input-field auth-input" placeholder="인증코드를 입력하세요" />
              <input type="button" @click="check" class="auth-button" value="인증하기"/>
            </div> -->
      <!-- <p v-if="message" class="message">{{ message }}</p> -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { tripAxios } from "@/middlewares/common-axios";
import { RouterLink, useRouter } from "vue-router";

export default {

  setup() {
    const userid = ref("")
    const password = ref("")
    const username = ref("")
    const email = ref("");
    const message = ref("");
    const isVerified = ref(null);
    const token = ref("");
    const axios = tripAxios();
    const router = useRouter()
    
    const join = () => {
      axios.post('/member/join',{
        userid : userid.value,
        username : username.value,
        password : password.value,
        email : email.value
      })
      .then(response => {
        if(response.request.status === 200){
          router.push({name : "home"})
        }
      })
    }

    const check = () => {
      console.log("check method")
      verifyEmail();
    };

    const register = async () => {
      try {
        const response = await fetch("http://localhost/auth/register", {
          method: "POST",
          body: new URLSearchParams({ email: email.value }),
        });
        const data = await response.text();
        message.value = data.message;
      } catch (error) {
        console.error(error);
      }
    };

    const verifyEmail = async () => {
      if (!token.value || !email.value) {
        message.value = "인증에 필요한 정보가 부족합니다.";
        return;
      }

      try {
        const response = await fetch(
          `http://localhost/auth/verify?email=${email.value}&token=${token.value}`,
          { method: "GET" }
        );
        const data = await response.text();
        if (data === "이메일 인증이 완료되었습니다.") {
          isVerified.value = true;
          console.log(isVerified.value)
          message.value = "";
        } else {
          message.value = data;
          isVerified.value = false;
          console.log(isVerified.value)
        }
      } catch (error) {
        console.error(error);
        message.value = "인증에 실패했습니다.";
        isVerified.value = false;
      }
    };

    return {
      email,
      message,
      isVerified,
      register,
      token,
      check,
      userid,
      username,
      password,
      join,
      router
    };
  },
};
</script>

<style scoped>
/* 전체 배경과 폼의 배경 설정 */
.container {
  margin-top: 150px;
  max-width: 480px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
}

.input-label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-group {
  margin-top: 20px;
}

.submit-button {
  width: auto;
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #1976d2;
}

.email-auth {
  margin-top: 10px;
}

.auth-message {
  font-size: 14px;
  color: #f44336;
}

.auth-message.success {
  color: #4caf50;
}

.auth-input-group {
  display: flex;
  margin-top: 10px;
}

.auth-input {
  flex: 1;
  margin-right: 10px;
}

.auth-button {
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.auth-button:hover {
  background-color: #1976d2;
}

.message {
  color: #f44336;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}

/* 이메일 입력 필드와 인증 버튼을 수평으로 배치 */
.email-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.email-input {
  flex: 1;
  margin-right: 10px;
}

.submit-button {
  width: auto;
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #1976d2;
}

/* 인증 입력과 인증하기 버튼 크기 통일 */
.auth-input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.auth-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.auth-button:hover {
  background-color: #45a049;
}
/* 회원가입 버튼 스타일 */
.register-btn {
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
/* '이메일 인증을 진행해주세요' 메시지 스타일 */
.auth-start {
  font-size: 14px;
  color: #2196f3;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
}
</style>
