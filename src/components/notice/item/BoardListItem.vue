<script setup>
defineProps({ article: Object });

</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ article.noticeid }}</th>
   
      <td class="text-start">
      <router-link
        :to="{ name: 'detail', params: { noticeid: article.noticeid } }"
        class="article-title link-dark"
      >
        {{ article.title }}
      </router-link>
    </td>

      
      <td>
      {{ article.content }}
    </td>
    <td>{{ article.registdate }}</td>
    <td>{{ article.view }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
