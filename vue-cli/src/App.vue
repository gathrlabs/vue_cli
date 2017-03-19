<template>
    <div class="container">
        <app-header></app-header>
        <hr>
          <div class="section">
            <div class="container">
              <div class="columns">
                <servers></servers>
              <app-server-details></app-server-details>
            </div>
          </div>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style lang="sass">
  @import "~bulma";
</style>
