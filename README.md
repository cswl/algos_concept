## fcc-algorithm-challenges-cli

Save your FCC algorithm challenges in git.

### How to use:
You'll need at least use node version > 8.0.

Use `yarn init` to setup a dummy package.json.  
Add this  to depedencies.  
`yarn install cswl/fcc-algorithm-challenges-cli`

Next run
`git clone --depth=5 https://github.com/freeCodeCamp/freeCodeCamp`  
Which clones the fcc project to `freeCodeCamp`

Now run
`npx falgoc init`  
Which calls `git init` and creates a `.gitignore` to  
create your repo and setup initial commit.

Then run  
`npx falgoc bootstrap`  
which creates empty files for alogrithm challenges.

Now you can copy the challenges in the files then commit them.

NOTE: If you dont have `npx` you might need to update your `npm` to latest version too.


