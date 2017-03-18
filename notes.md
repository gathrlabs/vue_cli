// What makes a good workflow? //
-> should have a build process that optimizes code, like ES6
-> A development server
    -> to allow us to test under realistic circumstances
    -> don't have to load all files on startup (lazy loading)
-> compiled gives a 30% reduced package size

// Understanding workflow //
You want to be able to bundle everything together

{ CODE } - - - > Special Features - - - > Production Server
            -Compile single file templates
            -Case-insensitive Component Selectors
            -Preprocessors and more

// Using the VUE CLI to create projects //
Could use webpack to set up our own server
But Vue cli allows us to fetch Project templates

SO to install?

First run npm command to install globally -> npm install -g vue-cli
You can choose from a number of Project Templates -> vue init webpack-simple [project folder]

simple            ->    index.html + Vue CDN imported
webpack-simple    ->    Basic Webpack workflow (what we're using)
webpack           ->    Complex Webpack Workflow (Incl. Testing)
browserify /
browserify-simple ->     Browserify Workflows        

To Start the Browser -> npm run dev

// Webpack Folder Structure //
src -> this is where we write our {code}
babel -> sets up babel transpiler which allows us to write ES6 which transpiles to ES5
index.html -> The file gets served.
dist folder? -> won't see it in development mode, because that's held in memory. When we build for production we will see the dist.
webpack.config.js -> responsible for build process

// What is the .VUE file //
A special kind of file that ships compiled code to the browser, no need to use el or the template property. We can outsource the template to vue.

main.js file first to be executed and it does the following:

import Vue from 'vue' ##import Vue
import App from './App.vue' ##import the App.vue

new Vue({
  el: '#app',
  render: h => h(App) ##using this will automatically render a compiled template. The h function is running the app.VUE file.
})

// the .VUE file Structure //
always
1)  <template>
      <div id="app"></div>
    </template>
2) <script></script>
3) <style></style>

// building the app for production //

-> npm run build
if you wanted to deploy the application

// Components //

We want to be able to display components in multiple parts of the app. But we can't do that with the normal vue instance set up. ie:

<div id="App"></div>
<hr>
<div id="App"></div>

we can't do this, we call the data element in too many places but the instance will only render once.

new Vue({
  el: "#App",
  data: {
    greeting: "Hello world"
  }
})

Instead we need to use the below setup.

the data property becomes a function and returns the property values instead.

<div id="app">
  <my-cmp></my-cmp>
</div>

Vue.component('my-cmp', {
  data: function() {
    <!-- because you can't have data both here and in the vue instance below, this data becomes a function which then needs to be returned -->
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{ status }}'</p>
});

new Vue({
  el: '#app',
  })

  // The Difference between registering a component Locally versus globally //

  THIS IS HOW YOU SET A COMP GLOBALLY

  calling Vue.component('component-name', {
    data: function() {
      return {
        status: "Critical"
      };
    },
    methods: {
      foo: bar(){
        return x;
      }
    }
    computer: {
      foo: bar(){
        return y;
      }
    }
    });

    new Vue({
      el: '#app',
      }
    })

    THIS IS HOW YOU SET A COMPONENT LOCALLY

    var cmp = {
      data: function() {
        return {
          status: "Critical"
        },
      }
    }

    new Vue({
      el: '#app',
      components: {
        <!-- IN here we are just listing our local components by giving the components selectors and then just setting it to the component we set up as a var -->
        'my-cmp': cmp,
      }
    })

// The Root Component //

The root component is an element that sits in app.vue which then gets rendered to main.js. That means that App.vue actually becomes like a staging ground for other components.

But lets create a component that feeds in to App.vue. WE'll make it home.vue.

IN home.vue were creating a template which is showing a LOCAL component called <app-server-status></app-server-status>

This component exists locally on the page. But we didn't create it there. It is actully being held in a component called ServerStatus.vue. So how do you import a component so that it stays local?

You import it using ES6 terminology. So in <script>
  import status from './ServerStatus.vue'
  <!-- Use the local component pattern -->
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }

  To us a global component, import directly into the main.js file. and render using the Vue.component('nameofcomponent', importnameofcomponent);

  // Structure //

  Its a good idea to structure folders by feature. Maybe a shared folder for header and footer. Or a server folder which holds all of the server information.

  Even better would be to create a folder for components, which then is subdivided by feature.

  For big projects there is another alternative folder structure:

  Instead of heaving components in a components folder and storing and then subdividing. Files might be grouped as follows:

  -main.js
  -users/
    --account/
    --analytics/
  -shop/
    --main/
    --checkout/

  So here we are subdividing the site into its various functions. The shop function, the user management function, with then features that sit below that.

  // Naming the Components //

  You can use case selective Selectors
  for example
  'appHeader': Header,

  BUT its pretty common to use the "-" like "app-server" because HTML is used to having lowercase separated by a "-"

  // Styles and components //

  A style added to any component will become a global style.
  If this is not the functionality that is required then you just need to add the "scoped" tag
  so
  <style scoped>
    div {
      border: 1px solid blue;
    }
  </style>

  Also important to note is how vuejs actually applies the style to the global dom. In fact, it is not being applied to the global dom, it is actually being applied to a shadow dom.

  When looking at the html generted in the developer tools, we can see that scoped styles are actually add to the head of the document and assigned data tags. These tags are then applied to the particular component div using the data property. This allows components to have dynamic styling.

  
