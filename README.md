# Veams Blueprint - React Component (`@veams/bp-react-component`)

With this blueprint you can scaffold a react component with multiple options:

1. Add a description for your component.
1. Do you want import the SCSS file inline?


## Setup

1. First of all be sure you have installed `veams-cli`.
1. After that be sure your project contains a [`veams-cli.json`](https://github.com/Sebastian-Fitzner/generator-veams/blob/dev/generators/app/templates/veams-cli.json).
1. Make sure you have updated `veams-cli.json` to fit the needs of your project.
1. Install the package with `npm i @veams/bp-react-container --save-dev`.
1. Reference the package in `veams-cli.json` by adding `component` to the `blueprint` object like so:

``` json
{
    "blueprints": {
        "component": {
            "skipImports": true,
            "path": "node_modules/@veams/bp-react-component"
        }
    }
}
```

## Usage

Now you can use this blueprint with `veams` by executing:

``` bash
veams generate component modules/articles/components/article
```

 The output in your file system will be:

``` bash
└── articles
    └── components
        └── article
            └── article.js
```

Have fun!
