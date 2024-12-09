import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Sky } from 'three/addons/objects/Sky.js';

const green = document.getElementById("fancygreen-exterior")
const blue = document.getElementById("fancyblue-exterior")
const red = document.getElementById("fancyred-exterior")
const black = document.getElementById("fancyblack-exterior")
var loader = new GLTFLoader().setPath('../nemesis-3d-model/green/');


green.addEventListener("click", green_click)
blue.addEventListener("click", blue_click)
red.addEventListener("click", red_click)
black.addEventListener("click", black_click)





const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;


//adjust height and width

renderer.setSize((window.innerWidth /4) * 3, window.innerHeight * 0.9);
renderer.setClearColor(0xd6d4d4);

// const texture = new THREE.TextureLoader().load( "../img/configurator-img/sky.jpg" );
// const bg = new THREE.TextureLoader();
// bg.load('../img/configurator-img/sky.jpg' , function(texture)
//             {
//              scene.background = texture;  
//             });



renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.toneMapping = THREE.NeutralToneMapping;




document.body.appendChild(renderer.domElement);




const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
// camera.zoom = 8;
camera.position.set(-7, 3, -11);



const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// scene.add(groundMesh);



const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x999999,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

// const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
// spotLight.position.set(0, 25, 0);

// scene.add(spotLight);

// const ambient = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(0, 10, 0);
light.castShadow = true;
scene.add(light);

const light2 = new THREE.DirectionalLight(0xffffff, 3);
light2.position.set(6, 3, 0);
light2.castShadow = false;
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xffffff, 3);
light3.position.set(-6, 3, 0);
light3.castShadow = false;
scene.add(light3);


const ambientLight = new THREE.AmbientLight(0xffffff, 1); // color (white), intensity (0.5)
scene.add(ambientLight);



loader.load('scene.gltf', (gltf) => {
  console.log('loading model');
  const mesh = gltf.scene;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  
  mesh.traverse((child) => {
    if (child.material) {
      child.castShadow = true;
      child.receiveShadow = true;
    
    }
  });

  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});
















window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}














function green_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  green.classList.add("clicked")
  loader = new GLTFLoader().setPath('../nemesis-3d-model/green/');
  refresh_model()
}

function blue_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  blue.classList.add("clicked")
  loader = new GLTFLoader().setPath('../nemesis-3d-model/blue/');
  refresh_model()
  
}

function red_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  red.classList.add("clicked")
  loader = new GLTFLoader().setPath('../nemesis-3d-model/red/');
  refresh_model()
}

function black_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  black.classList.add("clicked")
  loader = new GLTFLoader().setPath('../nemesis-3d-model/black/');
  refresh_model()
}


function refresh_model(){
  loader.load('scene.gltf', (gltf) => {
    console.log('loading model');
    const mesh = gltf.scene;
    const model = gltf.scene;
    
  
    mesh.position.set(0, 0, 0);

    model.traverse((child) => {
      // Check if the child is a mesh (this will exclude other objects like lights or cameras)
      if (child.isMesh) {
          // You can target specific meshes based on their name, material, or other properties
          if (child.name === "chassis_hi.3") {
              // Change the material color for this mesh
              child.material = new THREE.MeshStandardMaterial({ color: 0xf2ff00 });  // Example: red
          }
      }
  });




    scene.add(mesh);
  
    document.getElementById('progress-container').style.display = 'none';
  }, (xhr) => {
    console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
  }, (error) => {
    console.error(error);
  });
  
}




// function selectSwatch(e) {
//   let color = colors[parseInt(e.target.dataset.key)];
//   let new_mtl;
//   let new_color = parseInt('0x' + color.color)

//   if (color.texture) {

//     let txt = new THREE.TextureLoader().load(color.texture);

//     txt.repeat.set(color.size[0], color.size[1], color.size[2]);
//     txt.wrapS = THREE.RepeatWrapping;
//     txt.wrapT = THREE.RepeatWrapping;

//     new_mtl = new THREE.MeshPhongMaterial({
//       map: txt,
//       shininess: color.shininess ? color.shininess : 10 });

//   } else

//   {    
//     new_mtl = new THREE.MeshPhongMaterial({
//       color: parseInt('0x' + color.color),
//       shininess: color.shininess ? color.shininess : 10 });
//   }

//   setMaterial(theModel, activeOption, new_mtl, new_color);
// }

// function setMaterial(parent, type, mtl, new_color) {
//   parent.traverse(o => {
//     if (o.isMesh && o.nameID != null) {
//       if (o.nameID == type) {
//         //o.material = mtl;
//         o.material.color.set(new_color);                       
//       }
//     }
//   });
// }










animate();