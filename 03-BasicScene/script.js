const scene = new THREE.Scene()

// To create a visible object, we need three things: geometry, material, mesh

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
// THREE.BoxGeometry(width, height, depth)
const material = new THREE.MeshBasicMaterial({ color: "red" })
const mesh = new THREE.Mesh(geometry, material)

// Follow the order: create geometry, create material, create mesh
scene.add(mesh)

// The aspect ratio is the ratio of the display width divided by the display height.
const sizes = {
    width: 800,
    height: 600
}

// Camera - point of view
const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector(".webgl") // DOM element
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene,camera)

