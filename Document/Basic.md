## Step by step to create a 3D scene

### 1. HTML file
- This method is adding the threejs library to the HTML file

```html
<body>
    <canvas class="webgl"></canvas>


</body>

```

1. Create a canvas in HTML file
2. Create a scene using new THREE.Scene()
3. Create the object:
   - Geometry
   - Material 
   - Mesh : 
  ```js
  const mesh = new THREE.Mesh(geometry, material)
  ```
const mesh = new THREE.Mesh(Geomatry, Material)

4. Add mesh to scene 
5. Create an aspect ratio
   - The aspect ratio is the ratio of the display width and the display height.
    ```js
   const sizes = { width: 800, height: 600 }
   ``
6. Set up Camera - point of view
   - There are many types of camera in Threejs
   - Create the camera, set camera position, and add camera to scene
```js
//
const camera = new THREE.PerpectiveCamera( 75, size.width / sizes.height) 
// the auto set position is (0,0,0) = (x,y,z). We can change the position of the camera
camera.position.z = 3 // move the camera 3 units on the z axis
scene.add(camera)
```
7. Create a renderer
