# Readme

## About

Digbyswift Notifier is an electron application which monitors the Uptime Robot API and displays an alert if a monitor is down.

## Installation

Requires NodeJs v16

After checking out the repository, run `npm install` to install required packages.

## Development

To run in dev mode, navigate to `/app` and enter `npx electron-forge start` in the terminal.

## Build

To build enter `npx electron-forge make`. This will build an executable located in the `/out` folder. 

## Running the app

Opening the app will present a basic landing page. The app will then proceed to check the uptime robot api every 20 seconds. This interval can be changed in the `main.js` file. If a monitor is discovered to be down, a new window is opened in the top right of the screen displaying details of the affected site.
