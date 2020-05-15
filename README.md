# Venturus Challenge: Spotify Frontend Project

This is my project for the Venturus code challenge. In this document I will describe my development process.

## Step 1 - Structuring the Project

As a first step, since I've been gifted the screens already mocked up, I started to analyze the component, feature, state structure and replicated it in the app structure, creating the
following initial structure: 
```
    |-- src/
            |-- app
            |-- core
                |-- auth
                |-- home
            |-- modules
                |-- feature 1
                    |-- feature1-routes.module.ts
                    |-- feature1.module.ts
                    |-- feature1.component.ts
                    |-- feature1.component.scss
                    |-- feature1.component.html
                |-- feature 2
                ...
            |-- shared
            |-- store
        |-- assets
        |-- environment
```

After designing the structure I started building the main blocks and doing the boilerplate work

## Step 2 - Implementing Authentication

I decided implementing authentication from the beginning because this is something that is going to 
be part of the core of the project. To implement Oauth2 in Angular, I just used the procedure described in the Spotify 
Documentation.

## Built With
* **[NgRx](https://ngrx.io/)** - 9.1.2
* **[NgRx-Store-Logger](https://www.npmjs.com/package/ngrx-store-logger)** - 0.2.4
