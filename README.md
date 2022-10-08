# Staytuned Frontend

This is a simple repository to showcase a price drop subscription functionality for an e-commerce store.

Main features:
- Tailwind CSS, responsive design.
- Home and product pages
- Subscription form on the product page
- Light weight and quick deployment.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Deployment
You can deploy this project on any static page service with few configurations.

We will use render.com for a quick deployment, with the following steps:
- Create an account on render.com
- Create a static site node with the name you want.
- Add the link of this repo in the field "Public Git repository".
- In the "Build command" field add the following:
```sh
npm install && npm run build
```
- In the "Publish directory" field add the following: dist
- Then hit create, it will build an run the application.

# Configuring the client-side routing on render.com
- On the static site page you created, from the navigation bar on the left click on "Redirect and Rewrite".
- Add a new rule with the following:
-- Source: /*
-- Destination: /index.html
-- Action: Rewrite
- Hit save, then you will be able to view your site on the link provided.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

