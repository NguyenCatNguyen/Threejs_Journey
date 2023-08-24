import * as THREE from 'three';

const scene = new THREE.Scene();


// Making a cube

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "blue"});
const mesh = new THREE.Mesh(geometry,material);


scene.add(mesh);

const sizes = {
    width: 1000,
    height: 10000
}

const camera = new THREE.PerspectiveCamera(100, sizes.width/sizes.height)
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector(".webgl")
console.log(canvas)

const renderer = new THREE.WebGLRenderList({canvas:canvas});

renderer.setSize(size.width, size.height)

renderer.render(scene,camera)