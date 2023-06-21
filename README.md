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

#### Node.js
- Node.js is use to running JS on our computer outside of a browser. 
- Node.js is a runtime environment for JS.
  - Use `node -v` to check if Node.js is installed.

#### Dependencies
- Twon dependencies we need to install:
  - Three.js
  - Vite
#### Run the server
``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

### Lesson 3: Transform objects
#### Properties
- There are 4 main properties to transform  objects in our scene:
  - `position`  to move the object
  - `scale` to scale the object
  - `rotation` to rotate the object
  - `quaternion` to rotate the object in a different way

#### The direction of each axis is arbitrary
- x, y, z can be put anywhere we want just not after the `render` function.
  - `x` is going to your right
  - `y` is going up
  - `z` is going toward you 
- The unit of the position is up to the creator depend on what they want to do specifically.
  - In this case, the unit is in meters.

#### Vector3
- `Vector3` is a class that represent a 3D vector.
- `position` inherit from Vector3 which has many useful methods, you can get the length of a vector.




#### Position
```js
// Way to position object
// Move object
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

// Another way to move object
mesh.position.set(0.7, -0.6, 1); // order is x, y, z
```

##### Vector3
- `Vector3` is a class that represent a 3D vector.
- Some useful methods
```js
// Get the length of a vector
console.log(mesh.position.length());

// Get a distance from another Vector3
console.log(mesh.position.distanceTo(camera.position));

// Normalize its values (mean that you can reduce the length of the vector to 1)
console.log(mesh.position.normalize())
```

#### Scale
```js
// Scale object
mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;

// Another way to scale object
mesh.scale.set(2, 0.5, 0.5); // order is x, y, z
```

#### Rotation
```js



```

- Help check classroom technologies
- Check for troubleshooting
- Grain skill in AV, productivity, presentation and production technologies
- Performing classroom AV checks, assiting users in those classroom , supporting auditorium AV technologies
- Learning new technologies and working in a team environment
- Classroom Technologies, IT Training ,Digital Signage, Educational Technologies, Accessibility, Promotion of KU IT services








