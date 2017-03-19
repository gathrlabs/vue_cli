<template>
  <section class="section">
    <div class="container">
      <a @click="selectedColor='app-blue'" class="button is-info">Blue</a>
      <a @click="selectedColor='app-green'" class="button is-success">Green</a>
      <a @click="selectedColor='app-red'" class="button is-danger">Red</a>
      <hr />
      <keep-alive>
        <component :is="selectedColor">
          <p>THis is the content</p>
        </component>
      </keep-alive>
    </div>
  </section>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    data: function() {
      return {
        color: 'This is my color',
        selectedColor: 'app-blue'
      }
    },
    components : {
      'app-blue': Blue,
      'app-green': Green,
      'app-red': Red
    }
  }
</script>

<style lang="sass">

@import "~bulma";

</style>
