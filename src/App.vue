<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import routes from './routes'
export default {
  data: () => ({
      routes: routes
  })
}
</script>
