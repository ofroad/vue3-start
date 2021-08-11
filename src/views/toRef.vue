<template>
  <div class="about">
    <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
//import { watchEffect, provide, inject, reactive, readonly, h, ref, toRef, toRefs, reactive, getCurrentInstance  } from 'vue'
//import { toRefs, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, ref, watchEffect, reactive, getCurrentInstance } from 'vue'
import {toRef} from 'vue';

export default {
  props: {
    title: {
      type: String,
      default: "www"
    }
  },
  data() {
    return {
      name: "xiaom"
    }
  },
  methods: {
    changeName() {
      console.log("==================changeName===============",this);
      this.name="jack";
    }
  },
  setup(props,context) {
    console.log("=============setup props=============",props);
    console.log("=============setup context=============",context);
    /**
     ref和toRef区别:
      ref->复制, 修改响应式数据不会影响原始数据
      toRef->引用, 修改响应式数据会影响原始数据
      ref->数据发生改变, 界面就会自动更新
      toRef->数据发生改变, 界面也不会自动更新

      toRef应用场景:
      如果想让响应式数据和以前的数据关联起来, 并且更新响应式数据之后还不想更新UI, 那么就可以使用toRef
    */
    let obj = {name:'lnj'};
    let state = toRef(obj, 'name'); 
    function myFn() {
        state.value = 'zs';
        console.log(obj); //{name:'lnj'}
        console.log(state); // {name:'zs'}
        console.log(state.value); //
    }
    return {
      state,
      myFn
    }
  },
  beforeCreate() {
    console.log("===============beforeCreate===============",this);
  },
  created() {
    console.log("===============created===============",this);
  },
  beforeMount() {
    console.log("===============beforeMount===============",this);
  },
  mounted() {
    console.log("===============mounted===============",this);
  },
  beforeUnmount() {
    console.log("===============beforeUnmount===============",this);
  },
  unmounted() {
    console.log("===============unmounted===============",this);
  }
}
</script>

<style scoped>

</style>
