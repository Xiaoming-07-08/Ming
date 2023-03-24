<template>
  <div class="box">
    <div class="title">{{ CurCatName }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { GetCategoryByID, GetBlogListByCatId } from "@/api/video_blog";

onMounted(() => {
  // 通过路由的id去分类表中找到对应的名字
  // 再去blog表中根据cid(路由的id)获取列表
});
const route = useRoute();
CurRouteId.value = route.params.id;
let CurRouteId = ref("");

let CurCatName = ref("");
const getCatName = async () => {
  CurCatName.value = await GetCategoryByID({ id: CurRouteId });
};

let BlogList = ref({});
const GetBlogList = async () => {
  BlogList.value = await GetBlogListByCatId({ id: CurRouteId });
};
</script>

<style>
</style>