import * as THREE from 'three';
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'; 


//gui
const gui = new GUI();
// console.log(dat)


//canvas
const canvas = document.querySelector('canvas.webgl');
//scene
const scene = new THREE.Scene();

//camera
const camera= new THREE.PerspectiveCamera(75,window.innerWidth / window.innerWidth ,0.1,1000);
camera.position.z = 3;


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera,canvas);
// controls.enableDamping=true;


const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({
    color:'red'
});
const cube = new THREE.Mesh(geometry,material);
scene.add(cube);

const colorFormats = {
	color:0xff0000
};

gui.addColor( colorFormats, 'color' )
.onChange(() =>
{
    material.color.set(colorFormats.color)
});


const clock = new THREE.Clock();
const animate = () =>{
    const elapsedTime = clock.getElapsedTime();
    controls.update();
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}

animate();
