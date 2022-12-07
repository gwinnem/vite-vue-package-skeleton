# vite-vue-package-skeleton
Starter template for building vue component libraries with VUE 3 and Typescript, running on vite.


## Setting up vite-vue-package-skeleton in your project

```
npm install vite-vue-package-skeleton
```
## Steps to setup your custom npm package
1. Configure your package.json file with correct name, description, author, and change 'vite-vue-package-skeleton' with the desired package name.
2. Configure build/rollup.config with the name and package file name that you did setup in package.json.
3. Search for the // TODO comment and make the required changes.
4. Clean up the unused example implementation, abd Start building your own components (similar to ExampleComponent).


## Future Development on your package
You can run the library in a standalone mode for development purposes, following these steps:

#### Installing external dependencies
```
npm install
```
#### Compiles and hot-reloads for development
```
npm run dev
```

#### Compiles and minifies for production
```
npm run build
```
#### Building the library types
```
npm run build:types
```
#### Running Eslint
```
npm run lint
```
#### Running Eslint with --fix option
```
npm run lint:fix
```

#### Auditing the package
```
 npm audit --registry=https://registry.npmjs.org/
```
### Publishing the library
In order to publish the package, you need to follow these steps
#### Bumping the package version
```
npm version patch -m "message"
```
#### Logging in to npm
```
 npm login
```
#### Publishing the package to npm
```
 npm publish
```
