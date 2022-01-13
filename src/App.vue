<template>
  <Header/>
  <SideBar/>
  <router-view/>
    
</template>

<script>
import Header from './components/Header.vue'
import SideBar from './components/Sidebar.vue'

export default{
  name:'app',
  components:{
    Header,
    SideBar
  },
  data(){
    return {
       
    }
  },
  computed:{
    currentRouteName(){
    return this.$route.path;
  }
  },
}
</script>
