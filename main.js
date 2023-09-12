import * as THREE from 'three';

const scene = new THREE.Scene();

// Creating a sphere
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Creating a point light
const light = new THREE.PointLight(0xffff00, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Creating a camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
camera.position.z = 30; // Adjusted the camera position for visibility
scene.add(camera);

// Setting up the renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);

// Render the scene with the camera
renderer.render(scene, camera);
