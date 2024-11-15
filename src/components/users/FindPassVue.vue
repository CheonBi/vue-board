<template>
    <div class="container">
      <h1 class="title">비밀번호 찾기</h1>
      <p class="subtitle">가입 시 등록하신 이메일 주소로 인증번호를 발송해 드립니다.</p>
      
      <div class="pass-find">
        <!-- 이메일 입력 필드 -->
        <div class="input-group">
          <label for="email" class="input-label">이메일 주소</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="input-field"
            placeholder="이메일 주소를 입력하세요"
            required
          />
        </div>
  
        <!-- 인증 상태 메시지 -->
        <div class="auth-status">
          <span v-if="isVerified === null" class="auth-message info">이메일 인증을 해주세요.</span>
          <span v-if="isVerified === false" class="auth-message error">이메일 인증에 실패하셨습니다.</span>
          <span v-if="isVerified === true" class="auth-message success">이메일 인증에 성공하셨습니다.</span>
        </div>
        
        <!-- 인증 버튼 -->
        <div class="input-group">
          <button @click="sendVerification" class="pass-auth">인증</button>
        </div>
        <div class="result-pass">
            <p v-if="isVerified === true">패스워드: {{ password }}</p>
        </div>
        <div class="GotoLogin">
            <button v-if="isVerified === true" @click="goToLogin">로그인하러 가기</button>
        </div>
      </div>
      
      <!-- <p v-if="message" class="message">{{ message }}</p> -->
    </div>
  </template>
  
<script>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";

export default {

  setup() {
    const router = useRouter()
    const password = ref("")
    // password를 vertifyEmail 을 하면 data를 넘겨줘야 한다.
    const email = ref("");
    const message = ref("");
    const isVerified = ref(null);
    const token = ref("");

    const check = () => {
      verifyEmail();
    };

    const goToLogin = () => {
    router.push({ name: 'login' });
  }

    const sendVerification = async () => {
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
          message.value = "";
          password.value = "";

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
      sendVerification,
      token,
      check,
      password,
      goToLogin
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
    margin-bottom: 10px;
  }
  
  .subtitle {
    text-align: center;
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
  }
  
  .pass-find {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .input-group {
    width: 100%;
    margin-bottom: 20px;
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
  
  .pass-auth {
    padding: 12px 20px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  
  .pass-auth:hover {
    background-color: #45a049;
  }
  
  .pass-auth:active {
    background-color: #388e3c;
  }
  
  .message {
    color: #f44336;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
  }
  
  .auth-status {
    margin-top: 10px;
    text-align: center;
  }
  
  .auth-message {
    display: block;
    font-size: 14px;
    margin: 5px 0;
  }
  
  .auth-message.info {
    color: #2196f3; /* 블루 */
  }
  
  .auth-message.error {
    color: #f44336; /* 레드 */
  }
  
  .auth-message.success {
    color: #4caf50; /* 그린 */
  }
  
  .email-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .email-input {
    flex: 1;
    margin-right: 10px;
  }
  .GotoLogin button {
  padding: 12px 20px;
  background-color: #007bff; /* 파란색 배경 */
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
}

.GotoLogin button:hover {
  background-color: #0056b3; /* 호버시 다크 블루 */
  border-color: #0056b3;
}

.GotoLogin button:active {
  background-color: #004085; /* 클릭 시 다크 블루 */
  border-color: #004085;
}

.GotoLogin button:focus {
  outline: none; /* 포커스 시 기본 테두리 제거 */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 파란색 그림자 */
}
  </style>
  