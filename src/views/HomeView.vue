<script setup>

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
            <div class="sido-box-inner">
              <div class="sido-box-lbl">
                <div class="sido-box-lbl-inner">
                  <div class="svg-wrap">
                    <svg width="20" height="20" viewBox="0 0 20 20" sxmlns="http://www.w3.org/2000/svg"
                      class="svg-fill d-block">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.85 16.1a6.707 6.707 0 004.394-1.642l-.027.034 3.4 3.508L18 16.574l-3.47-3.58A7.163 7.163 0 0015.7 9.05C15.7 5.156 12.633 2 8.85 2 5.067 2 2 5.156 2 9.05c0 3.894 3.067 7.05 6.85 7.05zm0-1.99c2.695 0 4.88-2.263 4.88-5.055S11.545 4 8.85 4 3.97 6.263 3.97 9.055s2.185 5.055 4.88 5.055z"
                        fill="current"></path>
                    </svg>
                  </div>

                  <div class="sido-input-wrap">
                    <input name="sido" type="text" aria-disabled="false" placeholder="여행지나 숙소를 검색해보세요." maxlength="50"
                      autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" class="sido-input"
                      value="">

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="gugun-box">

          </div>
          <div class="date-box">

          </div>
          <div class="num-box">

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
    max-width: 1200px;
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

  /* search boxes */
  .svg-wrap {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }

  .svg-fill {
    fill: rgb(177, 174, 174);
  }

  /* # 1. sido-box  */
  .sido-box {
    max-width: 420px;
    flex-basis: 40%;
  }

  .sido-box-inner {
    position: relative;
  }

  .sido-box-lbl {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sido-box-lbl-inner {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    height: 48px;
    background-color: rgb(245, 245, 245);
    padding: 4px 14px;
  }

  .sido-input-wrap {
    height: 20px;
    width: 100%;
    position: relative;
  }

  .sido-input {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    font-size: 1rem;
    letter-spacing: 0px;
    line-height: 1.1rem;
    font-weight: 600;
    color: rgb(51 51 51);
    caret-color: rgb(18, 115, 228);
  }

  .gugun-box {
    max-width: 298px;
    flex-basis: 35%;
  }

  .date-box {
    max-width: 298px;
    flex-basis: 35%;
  }

  .num-box {
    min-width: 120px;
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
