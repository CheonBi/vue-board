<script setup>
const props = defineProps({
    placeholder: String,
})
</script>

<template>
    <div class="select-box-inner">
        <div class="select-box-lbl">
            <div class="select-box-lbl-inner">
                <div class="svg-wrap">
                    <slot name="icon"></slot>
                </div>
                <div class="select-input-wrap">
                    <input name="select" type="text" aria-disabled="false" :maxlength="50" :placeholder="placeholder"
                        autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false"
                        class="select-input" value="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.svg-wrap {
    height: 20px;
    width: 20px;
    margin-right: 8px;
}

.svg-fill {
    fill: rgb(177, 174, 174);
}

.select-box-inner {
    position: relative;
}

.select-box-lbl {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.select-box-lbl-inner {
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

.select-input-wrap {
    height: 20px;
    width: 100%;
    position: relative;
}

.select-input {
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
</style>