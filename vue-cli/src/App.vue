<template>
  <div class="section">
  <app-switch v-model="dataSwitch"></app-switch>
  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Name" v-model.lazy="userData.name">
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icon has-icon-right">
        <input class="input is-success" type="email" placeholder="Email" v-model="userData.email">
        <span class="icon is-small">
          <i class="fa fa-check"></i>
        </span>
      </p>
      <p class="help is-success">This email is correct</p>
    </div>
  </div>
</div>

<div class="field">
  <p class="control">
    <label class="checkbox">
      <input type="checkbox" value="dealsInfo" v-model="communication">
      Send me info on deals
    </label>
  </p>
</div>

<div class="field">
  <p class="control">
    <label class="checkbox">
      <input type="checkbox" value="emailCopy" v-model="communication">
     copy of the email
    </label>
  </p>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Department</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="selectedItem" value="">
            <option v-for="item in items">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Already a member?</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <label class="radio">
        <input type="radio" name="member" value="yes" v-model="member">
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="member" value="no" v-model="member">
        No
      </label>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
      </div>
      <p class="help is-danger">
        This field is required
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Explain how we can help you" v-model="message"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
<div class="outputs">
  <h2>Here is where all the outputs will go.</h2>
  <p>
    Name: {{ userData.name }}
    <br />
    Email: {{ userData.email }}
    <br />
  </p>
  <p class="multiline">
    Message: {{ message }}
  </p>
  <p>
    Communication:
    <p v-for="items in communication">
      {{ items }}
    </p>
  </p>
  <p>
     Are they a member? {{ member }}
  </p>
  <p>
    How did they hear about us: {{ selectedItem }}
  </p>
  <p>
    Switched: {{ dataSwitch }}
  </p>


</div>
</div>
</template>

<script>

  import Switch from './Switch.vue'

  export default {
    data () {
      return {
        userData: {
          name: '',
          email: '',
          department: ''
        },
        message: '',
        communication: [],
        member: '',
        items: [
          'Facebook',
          'Twitter',
          'Instagram',
          'Snapchat'
        ],
        selectedItem: 'Instagram',
        dataSwitch: true
      }
    },
    components: {
      'app-switch': Switch
    }
  }
</script>

<style lang="sass">

@import "~bulma";

.multiline
  white-space: pre
</style>
