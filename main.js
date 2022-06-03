import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js';

const scene = new THREE.Scene()
const raycaster = new THREE.Raycaster()

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
camera.position.set( - 400, 250, 400 );

//MOUSE
const mouse = {
  x: undefined,
  y: undefined
}

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

//RENDERER
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setSize( window.innerWidth, window.innerHeight );
scene.background = new THREE.Color( 0xFFFFFF );

//ORBIT CONTROLS
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.enableZoom = true;
controls.target.set(4.5, 0, 4.5);
controls.enablePan = false;
controls.maxPolarAngle = Math.PI / 2;

//LIGHTS

const hemiLight = new THREE.HemisphereLight( 0x443333, 0x111122 );
scene.add( hemiLight );

const light2 = new THREE.PointLight( 0xff0000, 1, 100 );
light2.position.set( 50, 50, 50 );
scene.add( light2 );

const spotLight = new THREE.SpotLight();
spotLight.position.set( -1, -1, -1 );
scene.add( spotLight );

const light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
light.position.set( 1, 0.39, 1 );
scene.add(light)

const ambientLight = new THREE.AmbientLight( 0x333333 );
scene.add(ambientLight)

const backLight = new THREE.DirectionalLight(0xffffff, 1)
backLight.position.set(0, 0, -10)



//OBJECTS


// Instantiate a loader
const loader = new GLTFLoader();


// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( 'https://threejs.org/examples/js/libs/draco/' );
loader.setDRACOLoader( dracoLoader );


var onOffCubes = []
let modelLoader = "15_IPC.glb";
let model
let model2
let model3


loader.load(modelLoader, (gltf) => {
  model = gltf.scene;
  scene.add( model );
  onOffCubes.push( model )

  model.traverse((o) => {
    // if (o.isMesh) {
    //   o.material.reflectivity = 1;
    //   o.material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    // }
  });
});

loader.load("15_CPC.glb", (gltf) => {
  model2 = gltf.scene;
  scene.add( model2 );
  onOffCubes.push( model2 )

  model2.traverse((o) => {
    // console.log(o);
  });
});


loader.load("15_FI.glb", (gltf) => {
  model3 = gltf.scene;
  scene.add( model3 );
  onOffCubes.push( model3 )

  model3.traverse((o) => {
    // console.log(o);
  });
});



document.addEventListener("click", (e) => raycast(e));
// document.addEventListener("touchend", (e) => raycast(e, true));

// // movement - please calibrate these values
// var xSpeed = 0.0001;
// var ySpeed = 0.0001;

// document.addEventListener("keydown", onDocumentKeyDown, false);
// function onDocumentKeyDown(event) {
//     var keyCode = event.which;
//     if (keyCode == 37) { //Left Arrow
//         camera.position.x -= 5;
//         console.log('hi')
//     } else if (keyCode == 38) { //Up Arrow
//       camera.position.z += 10;
//         console.log('hi2')
//     } else if (keyCode == 39) { //Right Arrow
//       camera.position.x += 5;
//         console.log('hi2')
//     } else if (keyCode == 40) { //Down Arrow
//       camera.position.z -= 10;
//         console.log('hi2')
//     }
// };


function raycast(e, touch = false) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();


  e.preventDefault();

  if (touch) {
    mouse.x = 2 * (e.changedTouches[0].clientX / window.innerWidth) - 1;
    mouse.y = 1 - 2 * (e.changedTouches[0].clientY / window.innerHeight);
  } else {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  raycaster.setFromCamera(mouse, camera);
  var object2 = model.getObjectByName( "IPC_A" );
  var object3 = model.getObjectByName( "IPC_B" );
  var object4 = model.getObjectByName( "IPC_C" );
  var object5 = model.getObjectByName( "IPC_D" );
  var object6 = model.getObjectByName( "IPC_E" );
  var object7 = model.getObjectByName( "IPC_F" );
  var object8 = model.getObjectByName( "IPC_G" );
  var object9 = model.getObjectByName( "IPC_H" );
  var object10 = model2.getObjectByName( "CPC_A" );
  var object11 = model2.getObjectByName( "CPC_B" );
  var object12 = model2.getObjectByName( "CPC_C" );
  var object13 = model2.getObjectByName( "CPC_D" );
  var object14 = model2.getObjectByName( "CPC_E" );
  var object15 = model2.getObjectByName( "CPC_F" );
  var object16 = model2.getObjectByName( "CPC_G" );
  var object17 = model2.getObjectByName( "CPC_H" );
  var object18 = model2.getObjectByName( "CPC_Y" );
  var object19 = model3.getObjectByName( "FI_A" );
  var object20 = model3.getObjectByName( "FI_B" );
  var object21 = model3.getObjectByName( "FI_C" );
  var object22 = model3.getObjectByName( "FI_D" );
  var object23 = model3.getObjectByName( "FI_E" );
  var object24 = model3.getObjectByName( "FI_F" );
  var object25 = model3.getObjectByName( "FI_G" );
  var object26 = model3.getObjectByName( "FI_H" );
  var object27 = model3.getObjectByName( "FI_Y" );

  var intersects = raycaster.intersectObjects( scene.children, true );
  console.log(scene.children);
  // object2.children[0].material.color.setRGB(1,1,1);
  // object10.children[0].material.color.setRGB(1,1,1);
  // object19.children[0].material.color.setRGB(1,1,1);
  if ((intersects.length > 0 && intersects[ 0 ].object.parent === object2) || (intersects.length > 0 && intersects[ 0 ].object.parent === object3)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object4)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object5)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object6)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object7)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object8)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object9)) {
    // object2.children[0].material.color.setRGB(0,0,255);
    scene.background = new THREE.Color( 0xbe0f05 );
    // object2.position.set( 115, 115, 300 );
    $( ".main-content" ).empty();
    $( ".main-contenttwo" ).empty();
    $( ".popuptwo" ).append( "<div class='main-contenttwo'><h1>IPC</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p> <a href='https://www.youtube.com'>Click here</a>" );
    $(".popuptwo").show();
    $('.box .close').on('click', function() {
      $(".popuptwo" ).fadeOut();
    });
    console.log("hi");
  } else if ((intersects.length > 0 && intersects[ 0 ].object.parent === object10) || (intersects.length > 0 && intersects[ 0 ].object.parent === object11)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object12)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object13)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object14)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object15)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object16)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object17)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object18)) {
    scene.background = new THREE.Color( 0x5f7b8f );
    // object10.children[0].material.color.setRGB(255,0,0);
    $( ".main-content" ).empty();
    $( ".main-contenttwo" ).empty();
    $( ".popupthree" ).append( "<div class='main-contenttwo'><h1>CPC</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p> <a href='https://www.youtube.com'>Click here</a>" );
    $(".popupthree").show();
    $('.box .close').on('click', function() {
      $(".popupthree" ).fadeOut();
    });
    console.log("hi2");
  } else if ((intersects.length > 0 && intersects[ 0 ].object.parent === object19) || (intersects.length > 0 && intersects[ 0 ].object.parent === object20)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object21)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object22)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object23)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object24)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object25)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object26)|| (intersects.length > 0 && intersects[ 0 ].object.parent === object27)){
    scene.background = new THREE.Color( 0x404955 );
    // object19.children[0].material.color.setRGB(0,0,0);
    $( ".main-content" ).empty();
    $( ".main-contenttwo" ).empty();
    $( ".popupfour" ).append( "<div class='main-contenttwo'><h1>FI</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p> <a href='https://www.youtube.com'>Click here</a>" );
    $(".popupfour").show();
    $('.box .close').on('click', function() {
      $(".popupfour" ).fadeOut();
    });
  } else {
    // object2.children[0].material.color.setRGB(1,1,1);
    // object10.children[0].material.color.setRGB(1,1,1);
    // object19.children[0].material.color.setRGB(1,1,1);
    // scene.background = new THREE.Color( 0xFFFFFF);
    // $( ".main-content" ).empty();
    // $( ".main-contenttwo" ).empty();
  }
}


// window.onresize = function () {

//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();

//   renderer.setSize( width, height );

//   bloomComposer.setSize( width, height );
//   finalComposer.setSize( width, height );

//   render();

// };


function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  // onOffCubes.rotation.y += 0.01
  
  controls.update()

}

animate()



