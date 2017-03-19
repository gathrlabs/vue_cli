<template>
  <section class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container">
        <a @click="selectedComponent='app-quotes'" class="button is-dark">Quote</a>
        <a @click="selectedComponent='app-author'" class="button is-dark">Author</a>
        <a @click="selectedComponent='app-new'" class="button is-dark">New</a>
        <hr />
        <p>
          {{ selectedComponent }}
        </p>
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
        <!-- <app-quotes>
          <h1 slot="title" class="title">{{ quoteTitle }}</h1>
            <h2 slot="content" class="subtitle">
              -Author
            </h2>
        </app-quotes> -->
      </div>
    </div>
  </section>
</template>

<script>
  import Quotes from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue'
  export default {
    data: function() {
      return {
        quoteTitle: 'A wonderful quote',
        selectedComponent: 'app-quotes'

      }
    },
    components : {
      'app-quotes': Quotes,
      'app-author': Author,
      'app-new': New
    }
  }
</script>

<style lang="sass">

@import "~bulma";

</style>
