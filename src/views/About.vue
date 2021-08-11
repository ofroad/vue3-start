<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{name}}</p>
    <button @click="changeName">change</button>
  </div>
</template>

<script>
//import { watchEffect, provide, inject, reactive, readonly, h, ref, toRef, toRefs, reactive, getCurrentInstance  } from 'vue'
import { toRefs, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, ref, watchEffect, reactive, getCurrentInstance } from 'vue'

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

    const { title } = toRefs(props);
    console.log("==============title.value================",title.value);

    const count = ref(0);
    console.log("=============count==============",count);
    console.log("=============count==============",count.value);
    //会立即执行
    watchEffect(() => console.log(count.value));
    // -> logs 0

    setTimeout(() => {
      count.value++
      // -> logs 1
    }, 2500);

    const state = reactive({ count: 0 });
    console.log("=============state==============",state);
    console.log("=============state==============",state.count);
    
    const internalInstance = getCurrentInstance();
    console.log("=============internalInstance==============",internalInstance);
    console.log("=============internalInstance.name==============",internalInstance.name); //访问不到


    onBeforeMount(() => {
      console.log("===============setup onBeforeMount===============",this);
    });
    console.log("=================onBeforeMount to onMounted=====================");
    onMounted(() => {
      console.log("===============setup onMounted===============",this);
    });

    onBeforeUnmount(() => {
      console.log("===============setup onBeforeUnmount===============",this);
    });

    onUnmounted(() => {
      console.log("===============setup onUnmounted===============",this);
    });
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
