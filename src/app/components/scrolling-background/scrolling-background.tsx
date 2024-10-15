import React, { useEffect } from "react";
import { render } from "react-dom";
var FBXLoader = require("three-fbx-loader");
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

//function to return random hex color
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Math.random() * 0xffffff;
}

interface ScrollingBackgroundProps {
  setMilestone: (milestone: number) => void;
}

export const ScrollingBackground: React.FC<ScrollingBackgroundProps> = ({
  setMilestone,
}) => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //geometry
    function addCamera() {
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        250
      );
      camera.position.setZ(30);
      renderer.render(scene, camera);

      let scroll = () => {
        console.log("scrolling so rendering");
        camera.position.z = 30 + window.scrollY * 0.1;
        renderer.render(scene, camera);
      };

      let resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
      };

      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", resize);
      return camera;
    }
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(0)
        .map(() => THREE.MathUtils.randFloatSpread(1000));

      star.position.set(x, y, z);
      scene.add(star);
    }
    function addStars() {
      for (let i = 0; i < 2000; i++) {
        addStar();
      }
    }
    function addFloor() {
      const geometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      });
      const floor = new THREE.Mesh(geometry, material);
      floor.position.x = 0;
      floor.position.y = -10;
      floor.position.z = 0;
      floor.rotation.x = -Math.PI / 2;
      scene.add(floor);

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
      const changeColor = () => {
        //set a random color
        const color = Math.random() * 0xffffff;
        material.color.set(color);
      };

      window.addEventListener("click", changeColor);
      window.addEventListener("scroll", () => {
        console.log("scrolling so rendering");
        renderer.render(scene, camera);
      });
    }
    function addTorus(camera: THREE.Camera) {
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshBasicMaterial({
        color: 0xff6347,
        wireframe: true,
      });
      const torus = new THREE.Mesh(geometry, material);
      scene.add(torus);
      const scroll = () => {
        torus.rotation.x += 0.05;
        torus.rotation.y += 0.02;
        torus.rotation.z += 0.1;
        renderer.render(scene, camera);
      };

      const changeColor = () => {
        //set a random color
        const color = Math.random() * 0xffffff;
        material.color.set(color);
      };
      function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.001;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.001;

        renderer.render(scene, camera);
      }
      animate();
      window.addEventListener("scroll", scroll);
      window.addEventListener("click", changeColor);
    }
    function addText() {
      const loader = new FontLoader();

      loader.load(
        "fonts/Inter24ptBlack_Regular.json",
        function (font) {
          const geometry = new TextGeometry("Hello three.js!", {
            font: font,
            size: 100,
            depth: 2,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5,
          });
          const textEl = new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({ color: 0xffffff })
          );
          textEl.scale.set(0.1, 0.1, 0.1);
          scene.add(textEl);
        },
        (progress) => {
          console.log("loading: " + progress.loaded / progress.total + "%");
        },
        (error) => {
          console.error("Error loading font: " + error);
        }
      );
    }
    function addMesh() {
      const loader = new GLTFLoader();

      loader.load(
        "models/car.glb",
        function (gltf) {
          scene.add(gltf.scene);
        },
        undefined,
        function (error) {
          console.error("Error loading cube: " + error);
        }
      );
    }
    var camera = addCamera();
    addStars();
    addFloor();
    // addTorus(camera);
    // addMesh();
    // addText();
    // addRoad(scene);

    //lighting
    const pointlight = new THREE.PointLight(0xffffff);
    pointlight.power = 1000;
    pointlight.position.set(0, 0, 0);
    scene.add(pointlight);

    const ambientlight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientlight);

    // const lightHelper = new THREE.PointLightHelper(pointlight);
    // scene.add(lightHelper);
  }, []);

  return (
    <div>
      <canvas className="z-0" id="bg">
        {" "}
      </canvas>
    </div>
  );
};
function addRoad(scene: THREE.Scene) {
  let length = 12,
    width = 0.5;
  const roadShape = new THREE.Shape();
  roadShape.moveTo(0, 0);
  roadShape.lineTo(0, width);
  roadShape.lineTo(length, width);
  roadShape.lineTo(length, 0);
  roadShape.lineTo(0, 0);
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(-5, 5, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 0),
    new THREE.Vector3(10, 0, 0),
  ]);
  const roadGeo = new THREE.ExtrudeGeometry(roadShape, {
    steps: 200,
    depth: 1,
    bevelEnabled: false,
    extrudePath: path,
  });
  const roadMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const roadMesh = new THREE.Mesh(roadGeo, roadMat);
  scene.add(roadMesh);
}
