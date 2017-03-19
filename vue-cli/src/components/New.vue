<template>
  <div>
    <h3>New Quote</h3>
    <a @click="counter++" class="button is-dark">Increase</a>
    <p>
      {{ counter }}
    </p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        counter: 0
      }
    },
    deactivated() {
      console.log("deactivated");
    },
    activated() {
      console.log("activated");
    }
  }
</script>

<styles scoped>

</styles>
