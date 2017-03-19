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

  // How can components communicate with each other? //

//Passing from parent to child//

in App.vue call a component called UserDetail/

we then call appUserDetail in the User.vue component using the tag <app-user-detail></app user detail>

we can pass a property to child by making sure we bind to the property declared in User.vue using vbind or :property . Like so:

<template>

  <app-user-detail :myName="name"></app-user-detail>

</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
    data: function() {
      return {
        name: 'Tom'
      };
    },

    methods: {
      changeName: function() {
        this.name = 'Anna';
      }
    }

    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    }
}
</script>

Then in UserDetail component, we do the following. We use props to name an imported property.

<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}
        </p>
    </div>
</template>

<script>
  export default {
    props: ['myName'],
    // This is props for porperties. Is actually and arrary in which we define a number of strings which define a property set outside of the current component. The name defined has to match the property name we are calling the the component ie. {{ name }}.
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("")
        //Thats the es6 way of creating a function
        //then becasue it is an array we need to split the array out, reverse the name and join it back together
      }
    }
  }


</script>

//Validating the incoming props //

We want to make sure what we are doing with props, with methods, is valid. Fore the above example, we can only pass a string, we cant pass a number.

Thus we need to validate the incoming props for its type.

So then on the UserDetail view where we are imorting the prop name, we can valdiate by setting props as an object and specifically setting the property type. This also means you can declare multiple property types using myName: [String, Array] it can also be another property like
myName: {
  type: String,
  required: true
}

props: {
  myName: {
    String
}

//Passing from child to parent //

In order to do this we need to emit a custom event.
  In each view instance yoiu can access this.$emit('nameWasReset', this.myName)

  Then in the parent componet we listen by adding an event listener with an @nameWasReset="name = $event"
   Where $event is the data being passed through when the event is triggered and name is a data property in the User component.

   // Understanding Unidirectional Dataflow //

               -- Parent --

  ---Child 1    --Child 2   --Child3

  Talks between children directly is not possible. Data flow is only unidirectional. That means data can only travel from the child to the parent.

  Instead, the parent gives us a method we cna execute a callback function.

  First we need to udnerstand that a function can be passed from the parent to the child.

  On the parent component we can create a new method called resetName, so

  methods: {
    resetName() {
      this.name = "Tom"
    }
  }

  So then lets pass another prop to the child component using :resetFn="resetName" which is a function we set below.

So then in the child component props were declaring a function using:

resetFn: Function

// Passing Data Between Siblings //

IN another comopnent -> UserEdit.vue, you'll have a button that on click exectues a method called editAge()

so:

methods: {
  editAge() {
   this.age = 30;
 }
}

In the parent component we will create and age object in the data object and then oass it as a prop to the child component so :userAge="age"

then in UserEdit we create props: ['userAge']

Then lets say we want ot use the same property on another child component.

we do the same thing. We place the :userAge="age" in the parent component import tags. Then in UserDetail we add to the props a new function userAge: Number

Then to pass the enw update age value back to the view details component, we need to emit the new property form the UserEdit component.

So that means in UserEdit we are emitting an event called ageWasEdited and the $data

We capture this event change in the User.Vue component by using the @ageWasEdited = "age= $event" with the event carrying the data from the change


// Simplifying the communication process with an event bus //

WHat we are making is method which uses a central class or object to pass the data. AKA services in angular 2.

THis is also the place where you can set up tasks or methods that can be used across the whole application.

//creating a new vue instance.

export const eventBus = new Vue();

import { eventBus } from '../main.js'

then in the method emit an event ageWasEdited when the editAge() is called.

editAge() {
  this.userAge = 30;
  eventBus.$emit('ageWasEdited', this.userAge);
  //so now the same data is rendered, but it is emitted to a completely sperarate instance. Making it independent.
}

create this on the UserDetail component:

make sure the eventBus is imported

created() {
  eventBus.$on('ageWasEdited', (age) => {
    this.userAge = age;
  });
  //Using ES6 syntax here. SO we calla ageWasEdited and we get some data which we can call using the es6
}
