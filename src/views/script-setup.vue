<template>
  <div class="about">
    <p>{{count}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script setup>
//import { watchEffect, provide, inject, reactive, readonly, h, ref, toRef, toRefs, reactive, getCurrentInstance  } from 'vue'
//import { toRefs, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, ref, watchEffect, reactive, getCurrentInstance } from 'vue'
import { ref } from "vue";

//在单文件组件（SFC）中引入一个新的 <script> 类型 setup。它向模板公开了所有的顶层绑定。

const count = ref(0);
const myFn = () => {
  count.value++;
};


</script>

<style scoped>

</style>
