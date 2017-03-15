<template>
  <div>
    <my-header></my-header>
    <my-server-list></my-server-list>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Servers from './SeverList.vue'
  import Footer from './Footer.vue'
  export default {
    components: {
      'my-header': Header,
      'my-server-list': Servers,
      'my-footer': Footer
    }
  }
</script>

<style lang="sass">
  @import "~bulma";
</style>
