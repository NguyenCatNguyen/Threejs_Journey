# Threejs_Journey
## Index

### 1. Introduction to `Three.js`, `Vite`, and `WebGL`
#### Three.js
- A 3D JS library that enables developers to create 3D experiences for the web.
- Three.js is a JavaScript library under MIT license that works right above WebGL
- Work with WebGL, SVG, CSS3D, and HTML5 Canvas.

#### WebGL
- A JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins.
- Fast
- Low-level 

#### Vite
- A build tool.
- **Vite** is a build tool that helps you build web applications. It's fast, lean, and optimized for front-end development. It's a great alternative to Webpack and Parcel.
- *Build Took* a program that will take all of the js files and bundle them into one single file

#### Installation ⬇️
```bash
// Install Vite
npm init vite@latest

// Install Three.js
npm install three

// Start the server
npm run dev

// Build the project
npm run build
```

### 2. Basic Scene Setup
- In this part I am focus on learning the basic setup of the scene in Three.js which include the following:
  - Object Motion ➡️
  - Scale Object ➡️

```javascript
import * as THREE from 'three';

// Create the canvas
const canvas = document.querySelector('canvas.webgl');

// Create a scene
const scene = new THREE.Scene();

// Create a Object

// Box Geometry (Width, Height, Depth) (x,y,z)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // Add the object to the scene

/**
 * Sizes (also known as the aspect ratio)
 * Use to establish the display width and height of the scene
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
// PerspectiveCamera(field of view, aspect ratio)
const camera = new THREE.PerspectiveCamera(1, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```
##### ❗️**Object Transform**
- Use `mesh.position.set(x, y, z)` to set the position of the object.
- Use `mesh.scale.set(x, y, z)` to set the scale of the object.
- Use `mesh.rotation.set(x, y, z)` to set the rotation of the object.
- These code can be put anywhere just before the `renderer

#### Axis Helper
- Use to hep visualize the axis of the object.
```JavaScript
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
``` 

#### Group
- Use to group multiple objects together. When done grouping, we can move, rotate, or scale the group instead of moving each object individually.
```JavaScript
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = 0;
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

cube2.position.x = -2;
group.add(cube2);

// After adding the object to the group, we can move the group
group.position.y = 1;
```



### 3. Animation
- There are multiple ways to animate object in Three.js. In this lesson we will focus on learning the three main ways to animate objects in Three.js:
  - **Using the `requestAnimationFrame` function**
  - **Using the `Clock` class**
  - **Using the `GSAP` library**

#### 1. Using the `requestAnimationFrame` function
- `requestAnimationFrame` is a function that calls a function to update the animation before the next repaint. It is used to create smooth animations.
```JavaScript

const animation = () =>{
  // Update the object
  mesh.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);

  // Call the animation function every frame
  window.requestAnimationFrame(animation);
}
```

<img src="Graphic/SimpleAnimation.gif" alt="Image Description" style="width: 450px;">

#### 2. Using the `Clock` class
- The `Clock` class is used to keep track of the time in the animation. It is used to create smooth animations.
```JavaScript
const clock = new THREE.Clock();

const animation = () =>{
  // Get the time
  const elapsedTime = clock.getElapsedTime();

  // Update the object
  mesh.rotation.y = elapsedTime;

  // Render the scene
  renderer.render(scene, camera);

  // Call the animation function every frame
  window.requestAnimationFrame(animation);
}
```

#### 3. Using the `GSAP` library
- GSAP is an JS animation library that is used to create complex animations. It is used to create smooth animations.

- Install GSAP
```bash
npm install --save gsap@3.12
```

```JavaScript
// Import GSAP
import gsap from 'gsap';

// use "to" method to animate the object
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

// still need to create the animation function
const animation = () =>{
  // Render the scene
  renderer.render(scene, camera);

  // Call the animation function every frame
  window.requestAnimationFrame(animation);
}
```

### 4.Camera