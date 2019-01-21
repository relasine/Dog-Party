# Dog Party!

## Summary

[Dog Party](http://frontend.turing.io/projects/dog-party-js-edition.html) is a Mod 1 assignment at the Turing School of Software and Design. For practice, I am making this assignment using React.

[![Waffle.io - Columns and their card count](https://badge.waffle.io/Jessica-Erickson/Dog-Party.svg?columns=all)](https://waffle.io/Jessica-Erickson/Dog-Party)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How to get it running locally:

`git clone https://github.com/Jessica-Erickson/Dog-Party.git`

`cd Dog-Party`

`npm i`

`npm start`

### See it live:

https://jessica-erickson.github.io/Dog-Party/

### Layout Spec

![Layout Spec](./src/assets/dog-party-js-edition.jpg)

## Planning

### App Structure

```
App (stateful) (filters dog cards by nav selection)
|
|_ Controls (stateless)
|   |
|   |_ Logo (stateless)
|   |
|   |_ Nav (stateless)
|
|_ Main Dog (stateful) (conditial rendering of dog form if dog doesn't have a name)
|   |
|   |_ Title (stateless)
|   |
|   |_ Dog Image (stateless)
|   |
|   |_ Dog Form or Dog Name (controlled form or stateless)
|
|_ Dogs Container (stateless)
|   |
|   |_ Dog Card (stateless)
|   |
|   |_ Dog Card (stateless)
|   |
|   |_ Dog Card (stateless)
|
|_ Footer (stateless)
    |
    |_ Text (stateless)
    |
    |_ Social Links (stateless)
```