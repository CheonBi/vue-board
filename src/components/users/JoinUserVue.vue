<template>
    <div>
      <h1 v-if="!isVerified">회원가입</h1>
      
      <!-- 회원가입 폼 -->
      <div v-if="!isVerified">
        <form @submit.prevent="register">
          <input
            type="email"
            v-model="email"
            placeholder="이메일을 입력하세요"
            required
          />
          <button type="submit">회원가입</button>
        </form>
        <p v-if="message">{{ message }}</p>
      </div>
  
      <!-- 인증 확인 폼 -->
      <div v-if="isVerified === false">
        <h2>이메일 인증</h2>
        <p>이메일을 확인하고 인증을 완료하세요.</p>
       인증코드 <input type="text" v-model="token">
        <button @click="check">인증하기</button>
      </div>
  
      <!-- 인증 완료된 경우 -->
      <div v-if="isVerified === true">
        <h2>이메일 인증이 완료되었습니다!</h2>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const email = ref("");
      const message = ref("");
      const isVerified = ref(false); // 인증 상태
      const token = ref("");
      const queryParams = new URLSearchParams(window.location.search);
  
      // 페이지가 로드될 때, URL의 쿼리 파라미터에서 토큰을 가져옴
      onMounted(() => {
        // token.value = queryParams.get("token");
        // email.value = queryParams.get("email");
        // if (token.value && email.value) {
          
        // }
      });
      const check = () => {
        verifyEmail()
      }
      // 회원가입 요청
      const register = async () => {
        try {
          const response = await fetch("http://localhost/auth/register", {
            method: "POST",
            body: new URLSearchParams({ email: email.value }),
          });
          const data = await response.text();
          message.value = data.message; // 인증 이메일 발송 확인 메시지
        } catch (error) {
          console.error(error);
        }
      };
  
      // 이메일 인증 확인
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
          console.log(data)
          if (data === "이메일 인증이 완료되었습니다.")
          {
            isVerified.value = true;
            message.value = "";

          } else {
            message.value = data;
            isVerified.value = false;
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
        check
      };
    },
  };
  </script>
  