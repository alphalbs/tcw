# The Circle of Waste

Ein Lernspiel zum Thema Mülltrennung und dem Kreislauf des Mülls im Rahmes eines Projekts im Fach Medienpsychologie und -didaktik der TU Dresden im Sommersemester 2014.


## Getting started

### Dependencies
- [git](http://git-scm.com/)
- [node](http://nodejs.org/)

### Setup
1. `git clone https://github.com/alphalbs/tcw.git`
2. install brunch and bower
  + `sudo npm install -g brunch`
  + `sudo npm install -g bower`
3. Run `bash -e script/bootstrap` in git root directory

#### known issues
+  `/usr/bin/env: node: No such file or directory`
  + happens on recent debian and ubuntu installs since the node binary is called nodejs to give it a more succinct name
  + install `nodejs-legacy` to get a symlink from nodejs to node

### Run brunch

In the project root dir run `npm start`.

+ watches directory for changes
+ compiles
+ runs app at localhost:3333

Open Browser at `localhost:3333`
