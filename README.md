# Threejs_Journey

## Index





### Lesson 1: Basic Scene
#### First Scene










































### Lesson 1: Basic Scene
#### First scene
- We need 4 elements to get started:
  - A scene that will contain objects
  - Some object
  - A camera 
  - A renderer


### Lesson 2: Local Server
#### Problem wth the way we loaded Three.js in the previous lesson
1. Only be able to access to "core" classes.
   - Can't access to class outside of core classes
2. When open HTML file like that, the browser won't let JS execute any instructions
   - Won't be able to load *local files* like textures or models.
   - This actually is for safety reason, you don't want your computer to open an HTML file that you thought was safe.
- But still, we need to be able to run JS code as if it were an online website and to do that, we need to  run  a local server
- **The solution is** using a *build tool* or *bundler*.

##### Build tool
- A build tool is a program that will take all of our JS files and bundle them into one single file.
- We going to use **Vite** today.

##### Vite
- We write web code like HTML, CSS, JS,  and Vite will build the final website for us.
- Vite will do a bunch of other things like optimizations, other languages support, cache breaking, source mapping, running a local server.
- 


