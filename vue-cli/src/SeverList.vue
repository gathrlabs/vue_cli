<template lang="html">

  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <div v-for="index in 5" class="box">
            <article class="media">
              <div class="media-left">
                  <figure class="image is-64x64">
                  <img src="./assets/database.png" alt="image"/>
                  </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p><strong>Server # {{ index }}</strong></p>
                  The server is running, no issues to report.
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column is-half">
          <div class="notification">
            <button class="delete"></button>
            This server is currently running. We'll keep an eye on any changes that you make.
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
