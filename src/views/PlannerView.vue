<script setup>
    import PlannerSide from "@/components/planner/PlannerSide.vue";

    PlannerSide
</script>

<template>
    <div class="d-flex flex-row justify-content-center ">
        <div class="side-wrap">
            <PlannerSide />
        </div>
        <div class="basket-wrap bg-info">
            <div>
                basket
            </div>
        </div>

        <div class="planner-map-wrap bg-body">
            <div>
                map
            </div>
        </div>
    </div>
</template>

<style scoped>

    .side-wrap {
        background-color: aqua;
        width: 100%;
        min-height: 100vh;
    }

    .basket-wrap {
        width: 100%;
        min-height: 100vh;
    }
</style>