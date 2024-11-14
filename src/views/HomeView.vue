<script setup>
import MainSelectBox from "@/components/common/MainSelectBox.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconHuman from "@/components/icons/IconHuman.vue";

</script>

<template>
  <div class="top-search-wrap position-relative" aria-label="top-search">
    <div class="top-search container-fluid d-flex flex-column justify-content-end">
      <h1 class="main-guide">
        <span>메인페이지 안내 문구 </span>
        <br>
        <span>메인페이지 안내 문구 </span>
      </h1>
      <div class="search-box d-flex flex-column">
        <form class="search-form d-flex" role="search">
          <div class="sido-box">
            <MainSelectBox :placeholder="`큰 지역을 선택해보세요`">
              <template #icon>
                <IconSearch />
              </template>
            </MainSelectBox>
          </div>

          <div class="gugun-box">
            <MainSelectBox :placeholder="`작은 지역을 선택해보세요`">
              <template #icon>
                <IconSearch />
              </template>
            </MainSelectBox>
          </div>

          <div class="date-box">
            <MainSelectBox :placeholder="`날짜 선택`">
              <template #icon>
                <IconCalendar />
              </template>
            </MainSelectBox>
          </div>
          <div class="num-box">
            <MainSelectBox :placeholder="`작은 지역을 선택해보세요`">
              <template #icon>
                <IconHuman />
              </template>
            </MainSelectBox>
          </div>
          <div class="search-btn-wrap">
            <button class="search-btn d-flex align-items-center justify-content-center" type="button">
              <span>검색</span>
            </button>
          </div>

        </form>

      </div>

    </div>
    <img src=" ../assets/images/homeview3.jpg" class="z-0 object-fit-cover"
      style="position: absolute;height: 100%;width: 100%;inset: 0px;color: transparent;">
  </div>


  <div aria-label="middle-event">

  </div>


</template>

<style scoped>
.top-search-wrap {
  height: 464px;
}

.top-search {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  z-index: 11;
  padding-bottom: 70px;
}

h1.main-guide {
  font-weight: 700;
  color: white;
  letter-spacing: 0px;
  line-height: 2.75rem;
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Search Box */

.search-box {
  padding: 20px;
  /* size */
  width: 100%;
  border-radius: 16px;
  background-color: white;
  z-index: 11;
  gap: 20px;
}

.search-form {
  height: 100%;
  width: 100%;
  gap: 12px;
}

.sido-box {
  max-width: 298px;
  flex-basis: 30%;
}

.gugun-box {
  max-width: 298px;
  flex-basis: 30%;
}

.date-box {
  max-width: 298px;
  flex-basis: 35%;
}

.num-box {
  max-width: 298px;
  flex-basis: 30%;
}

/* Button */
.search-btn-wrap {
  min-width: 120px
}

.search-btn {
  /* style */
  cursor: pointer;
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(18, 155, 228);
  border-style: none;
  padding: 10px 18px;
  height: 48px;
  border-radius: 10px;
  border-width: 2px;
  font-size: 1rem;
  line-height: normal;
  letter-spacing: 0px;
  font-weight: 600;

}
</style>
