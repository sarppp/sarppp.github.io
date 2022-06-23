import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
camera.position.set( - 400, 250, 400 );



//COLORS

const redd =  new THREE.Color( 0xbe0f05 );
const whitee = new THREE.Color( 1, 1, 1 );
const blackk = new THREE.Color( 0x5f7b8f );
const grayy = new THREE.Color( 0x404955 );

let model, model2, model3, model4

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

const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1 );
scene.add(ambientLight)


//OBJECTS

var manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

    console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

};

manager.onLoad = function ( ) {

    console.log( 'Loading complete!');

};


manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

    console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

};

manager.onError = function ( url ) {

    console.log( 'There was an error loading ' + url );

};


var onOffCubes = []
var onOffCubes2 = []
var onOffCubes3 = []


// Instantiate a loader
// const loader = new GLTFLoader();
const loader = new GLTFLoader(manager);
// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();

dracoLoader.setDecoderPath( 'https://threejs.org/examples/js/libs/draco/' );
loader.setDRACOLoader( dracoLoader );

loader.load(
	// resource URL
	"15_IPC.glb",
	// called when the resource is loaded
	function ( gltf ) {
    model = gltf.scene;

		scene.add( model );

		// gltf.animations; // Array<THREE.AnimationClip>
		// gltf.scene; // THREE.Group
		// gltf.scenes; // Array<THREE.Group>
		// gltf.cameras; // Array<THREE.Camera>
		// gltf.asset; // Object
    var object2 = model.getObjectByName( "IPC_A" );
    var object3 = model.getObjectByName( "IPC_B" );
    var object4 = model.getObjectByName( "IPC_C" );
    var object5 = model.getObjectByName( "IPC_D" );
    var object6 = model.getObjectByName( "IPC_E" );
    var object7 = model.getObjectByName( "IPC_F" );
    var object8 = model.getObjectByName( "IPC_G" );
    var object9 = model.getObjectByName( "IPC_H" );
    onOffCubes.push.apply(onOffCubes, [
      object2,
      object3,
      object4,
      object5,
      object6,
      object7,
      object8,
      object9])
    model.traverse((o) => {
    // console.log(o);
  });
	});

loader.load("15_CPC.glb", (gltf) => {
  model2 = gltf.scene;
  scene.add( model2 );
  var object10 = model2.getObjectByName( "CPC_A" );
  var object11 = model2.getObjectByName( "CPC_B" );
  var object12 = model2.getObjectByName( "CPC_C" );
  var object13 = model2.getObjectByName( "CPC_D" );
  var object14 = model2.getObjectByName( "CPC_E" );
  var object15 = model2.getObjectByName( "CPC_F" );
  var object16 = model2.getObjectByName( "CPC_G" );
  var object17 = model2.getObjectByName( "CPC_H" );
  var object18 = model2.getObjectByName( "CPC_Y" );
  onOffCubes.push.apply(onOffCubes2, [
    object10,
    object11,
    object12,
    object13,
    object14,
    object15,
    object16,
    object17,
    object18])
  model2.traverse((o) => {
    // console.log(o);
  });
});

loader.load("15_FI.glb", (gltf) => {
  model3 = gltf.scene;
  scene.add( model3 );
  var object19 = model3.getObjectByName( "FI_A" );
  var object20 = model3.getObjectByName( "FI_B" );
  var object21 = model3.getObjectByName( "FI_C" );
  var object22 = model3.getObjectByName( "FI_D" );
  var object23 = model3.getObjectByName( "FI_E" );
  var object24 = model3.getObjectByName( "FI_F" );
  var object25 = model3.getObjectByName( "FI_G" );
  var object26 = model3.getObjectByName( "FI_H" );
  var object27 = model3.getObjectByName( "FI_Y" );
  onOffCubes.push.apply(onOffCubes3, [
    object19,
    object20,
    object21,
    object22,
    object23,
    object24,
    object25,
    object26,
    object27])
  model3.traverse((o) => {
    // console.log(o);
  });
});

loader.load("15_Bridge.glb", (gltf) => {
  model4 = gltf.scene;
  scene.add( model4 );
  model4.traverse((o) => {
    // console.log(o);
  });
});

document.addEventListener("click", (e) => raycast(e));
// document.addEventListener("mousemove", (e) => raycast(e, true));

document.addEventListener('mousemove',movee)


function movee(e) {
  
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects( scene.children, true );

  if (
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[0]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[1]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[2]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[3]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[4]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[5]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[6]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[7]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[8])) {
      onOffCubes[0].children[0].material.color = redd
  } else {
    onOffCubes[0].children[0].material.color = whitee
  }
  if (
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[0]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[1]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[2]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[3]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[4]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[5]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[6]) ||
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[7]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[8])) {
      onOffCubes2[0].children[0].material.color = blackk
  } else {
    onOffCubes2[0].children[0].material.color = whitee
  }
  if  (
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[0]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[1]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[2]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[3]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[4]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[5]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[6]) ||
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[7]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[8])) {
      onOffCubes3[0].children[0].material.color = grayy
  } else {
    onOffCubes3[0].children[0].material.color = whitee
  }
  if (scene.background.equals(redd)) {
    onOffCubes[0].children[0].material.color = redd
    console.log("IPCCC")
  }
  if (scene.background.equals(blackk)) {
    onOffCubes2[0].children[0].material.color = blackk
  }
  if (scene.background.equals(grayy)) {
    onOffCubes3[0].children[0].material.color = grayy
  }
}


function raycast(e) {

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();


  e.preventDefault();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  
  var intersects = raycaster.intersectObjects( scene.children, true );
  // console.log(scene.children);

  if (
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[0]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[1]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[2]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[3]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[4]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[5]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[6]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[7]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes[8])) {
    scene.background = redd
    onOffCubes[0].children[0].material.color = redd
    onOffCubes2[0].children[0].material.color = whitee
    onOffCubes3[0].children[0].material.color = whitee
    // object2.position.set( 115, 115, 300 );
    // object2.children[1].material = new THREE.MeshPhongMaterial;
    // object2.children[0].material.color.setRGB(0,0,255);
    $( ".main-contenttwo" ).empty();
    $( ".popuptwo" ).css("background-color","rgba(190, 0.15, 0.5, 0.958)").append("<div class='main-contenttwo'><h1>IPC</h1> <h2>International</h2> <h2>Patent</h2> <h2>Classification</h2> <p>The <strong>International Patent Classification</strong> is commonly referred to as the IPC. It is based on an international multi-lateral treaty administered by the <strong>World Intellectual Property Organization (WIPO) </strong>and called the <strong>Strasbourg Agreement</strong> Concerning the International Patent Classification. The Strasbourg agreement was concluded in 1971 and entered into force in 1975. The Agreement is open to States party to the <strong>Paris Convention</strong> for the Protection of Industrial Property.</p> <p>The industrial property offices of more than 100 States, four regional offices and the International Bureau of WIPO under the Patent Cooperation Treaty (PCT) actually use the IPC for classifying their published patent applications and patents.</p> <p>In order to keep the IPC up to date with advances in technology, it is continuously revised and an updated version is published <strong>once a year</strong>. All versions can be consulted on the WIPO internet site, including the most recent one.</p> <p>With each new version of the IPC the already classified documentation is reclassified accordingly. Thus, only the current IPC version has to be consulted for retrieving relevant classification symbols.</p> <a href='https://www.epo.org/'>Click here</a>");
    $(".popuptwo").show();
    $('.box .close').on('click', function() {
      scene.background = whitee
      onOffCubes[0].children[0].material.color = whitee
      $(".popuptwo" ).fadeOut();

    });
  } else if (
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[0]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[1]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[2]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[3]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[4]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[5]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[6]) ||
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[7]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes2[8])) {
    scene.background = blackk
    onOffCubes2[0].children[0].material.color = blackk
    onOffCubes[0].children[0].material.color = whitee
    onOffCubes3[0].children[0].material.color = whitee
    // object10.children[0].material.color.setRGB(255,0,0);
    $( ".main-contenttwo" ).empty();
    $( ".popuptwo" ).css("background-color","rgba(95, 123,143, 0.958)").append( "<div class='main-contenttwo'><h1>CPC</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p> <a href='https://www.epo.org/'>Click here</a>" );
    $(".popuptwo").show();
    $('.box .close').on('click', function() {
      $(".popuptwo" ).fadeOut();
      scene.background = whitee
      onOffCubes2[0].children[0].material.color = whitee
    });
  } else if  (
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[0]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[1]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[2]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[3]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[4]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[5]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[6]) ||
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[7]) || 
    (intersects.length > 0 && intersects[ 0 ].object.parent === onOffCubes3[8])) {
    scene.background = grayy
    onOffCubes3[0].children[0].material.color = grayy
    onOffCubes[0].children[0].material.color = whitee
    onOffCubes2[0].children[0].material.color = whitee
    // object19.children[0].material.color.setRGB(0,0,0);
    $( ".main-contenttwo" ).empty();
    $( ".popuptwo" ).css("background-color","rgba(64, 73, 85, 0.958)").append( "<div class='main-contenttwo'><h1>FI</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis adipisci quas voluptas voluptates quae debitis doloremque quisquam atque reiciendis soluta necessitatibus nam incidunt nostrum est, rem labore aliquam placeat maiores.</p> <a href='https://www.epo.org/'>Click here</a>" );
    $(".popuptwo").show();
    $('.box .close').on('click', function() {
      $(".popuptwo" ).fadeOut();
      scene.background = whitee
      onOffCubes3[0].children[0].material.color = whitee
    });
  }
}

window.onresize = function () {

  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize( width, height );

  bloomComposer.setSize( width, height );
  finalComposer.setSize( width, height );

  render();

};

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
}

animate()



