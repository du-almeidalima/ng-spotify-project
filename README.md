# Spotify Frontend Project

This is my project for the Venturus code challenge. In this document I will describe my development process.

Featuring [video](https://youtu.be/f_VKp_qUt-M).

The final version can be seen in this [link](https://ng-spotify-project.web.app/)

The project [repository](https://github.com/du-almeidalima/ng-spotify-project)

## Features
* **Redux State Management**
* **Side Effects treatment with NgRx Effects**
* **Automatic Login**
* **Spotify SSO**
* **Music Preview**

## Run

To run this project just:
```
  npm install
```

and

```
  ng serve
```

## Step 1 - Structuring the Project

As a first step, since I've been gifted the screens already mocked up, I started to analyze the component, feature, state structure and replicated it in the app structure, creating the
following initial structure: 
```
    |-- src/
            |-- app
            |-- core
                |-- auth
                |-- header
            |-- modules
                |-- music
                    |-- search
                    |-- albums
                    |-- feature1-routes.module.ts
                    |-- feature1.module.ts
                    |-- feature1.component.ts
                    |-- feature1.component.scss
                    |-- feature1.component.html
                ...
            |-- shared
                |-- directives
                |-- components
                |-- models
                ...
            |-- store
                |-- app.reducers.ts
        |-- assets
            |-- img
            |-- scss
        |-- environment
```

After designing the structure I started building the main blocks and doing the boilerplate work

## Step 2 - Implementing Authentication

I decided implementing authentication from the beginning because this is something that is going to 
be part of the core of the project. To implement Oauth2 in Angular, I just used the procedure described in the Spotify 
Documentation. To implement the user state I used NgRx, the dispatch actions when it receives the user from the Spotify and set this user
on state. Also, a JWT token is stored in the Local Storage so when the user refreshes the page it doesn't loose the user data.

## Step 3 - Implementing the Music Feature Module

With the Authentication and the App structure set, I started implementing the main feature, the albums and music search. For this
I created a feature module, located in the ./modules folder. I also used Lazy Loading of this module to decrease the initial bundle size.

In this module I'll have the component used for search (Search Component) that will be assigned to ``/music/search``. And for every type
of result, Albums, Artists, Episodes, a component can be created to display the details. In this app there's only the ``/music/album/{id}``

### Step 3.1 - Music Component

I choose to implement a less opinionated design approach, even though the app is being only used for searching albums, I designed the 
search result as an object that, for now contains only Albums, but in the future could extend to have Tracks, Artists, Shows...

### Step 3.2 - Tracks

For the tracks component, I decided to go without the Redux, because their state is localized just for them.

So I created a Track List Component that will hold all the Tracks Components, and the Audio object that is responsible for 
playing a song. Those two components communicate with Property Binding, and this make very easy to debug them.

### Step 3.3 - Storing the Albums in Local Storage

In order to give the User a nice experience, I stored his 10 most recently viewed albums in LocalStorage, this way, when the User
is on Search screen and there's no search, he/she can se its previous searches.

To implement this I created a Service that would handle those get/set LS operations, every user has its own records, so multiple users
can share the same device. Also, the fetch operation is made only when the app is loaded, after that it's sync with the state and only updates
the LocalStore.

### Step 3.4 - Retrieving Albums from Cache

The app will store the last 10 viewed albums in Local Storage cache under the property ``albumsCache.albums``. So, whenever the user tries
to se an album, the AlbumResolveService will ask the AlbumService if this album is cached, if it's a action will be fired setting this Album
but without any request! If the Album is not in cache, then the normal flow of making an HTTP request will be taken.

## Step 4 - Tests

Due to lack of my time, I could only test the AlbumService which is responsible for making Cache operations.


## Built With
* **[Angular](https://angular.io/)** - 9.1.6
* **[NgRx](https://ngrx.io/)** - 9.1.2
* **[NgRx-Store-Logger](https://www.npmjs.com/package/ngrx-store-logger)** - 0.2.4
* **[Ngx-infinite-scroll](https://github.com/orizens/ngx-infinite-scroll)** - 9.0.0
* **[Firebase Hosting](https://firebase.google.com/docs/hosting)**

And <b>Love</b>...
