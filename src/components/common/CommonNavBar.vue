<script setup>
  import { RouterLink, useRouter } from "vue-router";
  import { ref, onMounted } from 'vue';
  const router = useRouter()

  const togglevisible = ref(false);  // 사이드바/메뉴의 보임 상태를 관리
  const toggleSidebar = () => {
    togglevisible.value = !togglevisible.value;
  };

  const goToLogin = () => {
    router.push({ name: 'login' });
  }
  onMounted(() => {
    router.beforeEach(() => {
      if (togglevisible.value) {
        togglevisible.value = false; // 사이드바를 닫기
      }
    });
  });
</script>

<template>
  <!-- Navbar -->
  <header class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">


      <!-- 왼쪽 Home 링크 이미지 -->
      <div class="collapse navbar-collapse justify-content-between" id="navbarButtons">
        <div class="navbar-brand align-items-center justify-content-center align-self-stretch">
          <RouterLink class="nav-link" :to="{ name: 'home' }">
            <div class="d-flex justify-content-center">
              <img src=" /src/assets/images/logo2.svg" alt="로고" style="width: 10rem; height: 4rem;" />
            </div>
          </RouterLink>
        </div>

        <!-- 임시 -->
        <div class="d-flex justify-content-center">
          <RouterLink :to="{ name: 'planner' }"> 여행계획 페이지
          </RouterLink>
        </div>

        <!-- 로그인 버튼 및 햄버거 아이콘 -->
        <div class=" nav-login d-flex justify-content-between align-items-center position-relative">
          <!-- 로그인 및 회원가입 버튼 -->
          <div class="btn-login-wrap">
            <button data-mdb-ripple-init type="button" class="btn-login btn d-flex" @click="goToLogin">
              <span>로그인/회원가입</span>
            </button>
          </div>



          <!-- 햄버거 메뉴 아이콘 -->
          <div class="menu-wrap position-relative">
            <div class="pv-box position-relative">
              <button class="menu-icon" @click="toggleSidebar" aria-label="Toggle sidebar">
                <span class="bar" :class="{ 'active': togglevisible }"></span>
                <span class="bar" :class="{ 'active': togglevisible }"></span>
                <span class="bar" :class="{ 'active': togglevisible }"></span>
              </button>

              <!-- 사이드바 콘텐츠 (공지사항, 로그아웃 등 메뉴 항목) -->
              <div v-if="togglevisible" class="sidebar-content">
                <ul>
                  <li>
                    <RouterLink to="/notices">여행지</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/logout">숙소</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/settings">공지사항</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/profile">프로필</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/profile">로그아웃</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .nav-login {
    gap: 8px;
  }

  .btn-login-wrap {
    width: 128px;
  }

  .btn-login {
    padding: 9px 13px;
    border-radius: 8px;
    border-width: 1.5px;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0px;
    width: 100%;
    /* height: 40px; */
    justify-content: center;
    align-items: center;

    /* border */
    border-color: rgb(235, 235, 235);

    color: rgb(51, 51, 51);
  }

  .btn-login:hover {
    background-color: rgb(245, 245, 245);
  }

  /* 기존 스타일 유지 */
  .menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .bar {
    background-color: #333;
    height: 4px;
    width: 100%;
    border-radius: 2px;
    transition: 0.3s;
  }

  .bar.active:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .bar.active:nth-child(2) {
    opacity: 0;
  }

  .bar.active:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  /* 사이드바 콘텐츠 위치 및 스타일 */
  .sidebar-content {
    position: absolute;
    top: 40px;
    /* menu-icon 바로 아래에 위치하도록 설정 */
    right: 0;
    background-color: #f8f9fa;
    padding: 5px 10px;
    /* 글자 크기에 맞춰 조정 */
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
    width: auto;
    /* 글자에 맞춰 크기 조정 */
    min-width: 120px;
    /* 최소 너비 지정 (필요에 따라 조정 가능) */
  }

  .sidebar-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar-content li {
    margin-bottom: 10px;
  }

  .sidebar-content li:last-child {
    margin-bottom: 0;
  }

  .sidebar-content a {
    text-decoration: none;
    color: #333;
  }

  .sidebar-content a:hover {
    color: #007bff;
  }
</style>
