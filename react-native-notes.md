# React Native Notes for OSX

## SETUP

The official React Native documentation for "Getting Started" is pretty much what you need, but these notes have more detail.

### Dependencies

* XCode: packages code and the React Native library into installable app/run it on the iOS simulator -- NOTE: have the latest version, no exceptions
* HomeBrew: installing node
* Node/NPM: just just as usual, to run JavaScript outside of the browser and handle dependency management
* watchman: watches files on the HDD and waits for them to change; automatically processes changes to the code base and updates whichever app we're working on
* React Native (RN) CLI: How we'll generate new RN projects AND run them in either the iOS or Android simulator

### Commands

```brew install node```
```brew install watchman```
```npm i -g react-native-cli```

### Generate Project

```react-native init albums```
* albums is the name of the first app to be worked on

### Setting up the Simulator
```react-native run-ios```
* builds project
* launches iOS simulator
* shows project
* if simulator launches, but nothing comes up, drag the simulated Springboard and run the app manually

### Install ESLint (optional but, as we know, important)

* Swallow your perfectionist pride! Use a linter
* Setup a bit of a hassle

#### Sublime-Text


##### install eslint globally
```npm i -g eslint```

##### install Package Control

##### Install a config with npm
```npm i -D eslint-config-rallycoding```

##### add 'linter' to sublime
##### add 'eslint' to Sublime
* install packages: SublimeLinter, SublimeLinter-contrib-eslint
* Sublime Text > Tools > SublimeLinter > Lint Mode > Background
##### add config file to project
* in root directory: ```touch .eslintrc```
* MUST use double-quotes inside the JSON object
 
## WALKTHROUGH
* As a general rule, it's rare to have to deal with the contents of ios/android/node_modules folders 
* If we want to make a very low-level modification to the project, then we may have to make a calculated change to the above folders' contents

### OUR FOCUS
* index.android.js and index.ios.js
* depending on the device, the respective simulator will build the files in the corresponding folders
* There's one catch: In this course, we'll be putting ALL the files inside the index files. This may not be the case in the context of another file.

#### From here on out, refer to the comments in the index.[platform].js file


## REACT VS. REACT NATIVE

* REACT: View layer / library that knows how components should behave and how they should work together

* RN: Portal to the mobile screen

 
