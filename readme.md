# Great Western Buildings
## Take Home Project

Go to [SteelBuildingsProject](https://gwb-project.herokuapp.com/dist/index.html)

*Please be patient. This site is hosted on heroku so it may take a minute for the server to start.*

**Project Guidelines:**
For this project please use the following guidelines below. If you have any questions or need clarification, please let me know, and I will try to get back to you as soon as I can.

- Please design a responsive, single-page web application about either Steel Buildings or a personal hobby of yours.
- Please use the latest version of bootstrap to create this.
- Please include a dynamic input form of some sort.

**Bonus**: Incorporate some features from Edge Templating, the view part of Adonis JS.

---

## What I used:

**Written in:** edge.js, sass and bootstrap.

**For Compiling:** npm, gulp

### For Development:
``` bash
git clone https://github.com/jacobguinther/gwb.git
npm i
gulp watch
```
*This tells gulp to watch all .edge and .scss files for changes and compiles to `/dist` directory on save*


### Some things to note:

- All of the source files can be found in the `/src` directory

- I chose to use npm and gulp to generate a static landing page.
  - I assumed that including a backend was unnecessary for this project.
- The index.php file is just for hosting on heroku
- The **form** located at the top under *'Get A Free Quote' ( modal )*
- Currently the *'View details'* buttons do not go to anything
- The social icons at the bottom are linked to GWB social sites
- I chose to simulate some backend data being passed to the templating engine: `src/data/data.js`

