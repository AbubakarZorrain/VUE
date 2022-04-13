<template>
<div >
<mainScreen />
</div>

</template>

<script>
import mainScreen from './components/main-screen.vue'
export default {
  name: 'App',
  components: {
    mainScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 180px;
}
</style>
