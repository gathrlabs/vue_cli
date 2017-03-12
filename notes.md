// What makes a good workflow? //
-> should have a build process that optimizes code, like ES6
-> A development server
    .> to allow us to test under realistic circumstances
    .> don't have to load all files on startup (lazy loading)
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
You cnaa choose from a numbner of Project Templates -> vue init webpack-simple [project folder]

simple            ->    index.html + Vue CDN imported
webpack-simple    ->    Basic Webpack workflow (what we're using)
webpack           ->    Complex Webpack Workflow (Incl. Testing)
browserify /
browserify-simple ->     Browserify Workflows        

To Start the Browser -> npm run dev
