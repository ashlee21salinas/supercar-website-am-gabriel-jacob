import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 100);
camera.position.set(0, 3, 16);
let renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", event => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
})

let controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.minPolarAngle = THREE.MathUtils.degToRad(45);
controls.maxPolarAngle = THREE.MathUtils.degToRad(75);
controls.minDistance = 10;
controls.maxDistance = 30;
controls.enableDamping = true;

let light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(3, 5, 8);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

for(let i = 0; i < 100; i++){
  let box = new THREE.Mesh(new THREE.BoxGeometry().translate(0, 0.51, 0), new THREE.MeshLambertMaterial({color: "pink"}));
  box.position.setFromCylindricalCoords(Math.random() * 10, Math.random() * Math.PI * 2, 0);
  let distRatio = 1. - Math.hypot(box.position.x, box.position.z) / 10;
  box.scale.y = 1 + distRatio * distRatio * distRatio * 5; 
  scene.add(box);
}

let ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300).rotateX(-Math.PI * 0.5), new THREE.MeshBasicMaterial({color: new THREE.Color(0x442288).multiplyScalar(1.5)}));
scene.add(ground);

renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
})