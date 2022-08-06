<template>
  <div class="child">
    <button @click="changeLayout">change layout</button>
    <button @click="handleFetchData">fetch data</button>
    <el-button type="primary">element-ui button</el-button>
    <NuxtLayout :name="layoutName">
      <template #default> here is nuxt child </template>
      <template #head> <TheHead></TheHead> </template>
      <template #foot> <h1>here is nuxt child foot</h1> </template>
      <template #extra>
        <div>
          <h2 v-for="item in asyncData" :key="item.id">
            {{ item.title }}
          </h2>
        </div>
      </template>
    </NuxtLayout>
  </div>
  <NuxtChild></NuxtChild>
</template>
<script setup>
const layoutName = "custom";
const route = useRoute();
definePageMeta({
  layout: false,
});
const changeLayout = () => {
  route.meta.layout = "custom";
};

const asyncData = ref([]);

const handleFetchData = async () => {
  const { data } = await useAsyncData("todos", () => $fetch("/api/todo"));
  console.log(data.value);
  asyncData.value = [...data.value];
};
</script>