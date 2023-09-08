import * as THREE from 'three'
const scene = new THREE.Scene()


//creating a sphere 

const geomentry  = new THREE.SphereGeometry(15,32,16)
const material = new THREE.MeshStandardMaterial({color:'#00ff83'})
const mesh  = new THREE.Mesh(geomentry , material)
scene.add(mesh)

const light = new THREE.PointLight(0xffff00,1,100)
light.position.set(0,10,10)
scene.add(light)

// camera 

const camera = new THREE.PerspectiveCamera(45,800/600)
camera.position.z=20
scene.add(camera)

//light


const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800, 600)
renderer.render(scene,camera)