import React, { useEffect } from 'react';
import './App.css';
import * as THREE from "three";
import SceneInit from '../src/lib/SceneInit';
import earthmap1k from '../src/images/earthmap1k.jpeg';
import earthbumpthumb from '../src/images/earthbumpthumb.jpeg';
import earthcloudmapthumb from '../src/images/earthcloudmapthumb.png';
import earthlightsthumb from '../src/images/earthlightsthumb.jpeg';
import earthspecthumb from '../src/images/earthspecthumb.jpeg';
import earthcloudmaptransthumb from '../src/images/earthcloudmaptransthumb.jpeg';
import moonmap2k from '../src/images/moonmap2k.jpeg';
import moonbump2k from '../src/images/moonbump2k.jpeg';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const uvTexture = new THREE.TextureLoader().load(earthmap1k);
    const earthBump = new THREE.TextureLoader().load(earthbumpthumb);
    const earthCloud = new THREE.TextureLoader().load(earthcloudmapthumb);
    const earthCloudTrans = new THREE.TextureLoader().load(earthcloudmaptransthumb);
    const earthLight = new THREE.TextureLoader().load(earthlightsthumb);
    const earthSpec = new THREE.TextureLoader().load(earthspecthumb);

    // moon
    const moonTexture = new THREE.TextureLoader().load(moonmap2k);
    const moonBump = new THREE.TextureLoader().load(moonbump2k);

    // added in the 3 lines below for auto rotation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();

    const ge3 = new THREE.SphereGeometry(4);
    const me3 = new THREE.MeshStandardMaterial({
      map: uvTexture,
      bumpMap: earthBump,
    });
    const sphereMe3 = new THREE.Mesh(ge3, me3);
    sphereMe3.position.x = 0;
    sphereMe3.position.y = 0;
    test.scene.add(sphereMe3);

    const moon1 = new THREE.SphereGeometry(1);
    const moon2 = new THREE.MeshStandardMaterial({
      map: moonTexture,
      bumpMap: moonBump,
    });
    const sphereMe4 = new THREE.Mesh(moon1, moon2);
    sphereMe4.position.x = 16;
    sphereMe3.add(sphereMe4);

    //  const dl = new THREE.DirectionalLight(0xfffff0, 1);
    //  dl.position.set(50, 20, 0);
    //  const dlHelper = new THREE.DirectionalLightHelper(dl, 3); // remove this in prod
    //  test.scene.add(dl)

    // const ge4 = new THREE.SphereGeometry(8.05, 30, 30);
    // var me4  = new THREE.MeshPhongMaterial({
    //   map         : earthCloud,
    //   side        : THREE.DoubleSide,
    //   opacity     : 0.25,
    //   transparent : true,
    //   depthWrite  : false,
    // });
    // var cloudMesh = new THREE.Mesh(ge4, me4)
    // test.scene.add(cloudMesh)

    // added in the animate function below with its call for auto rotation
    function animate() {
      const t = test.clock.getElapsedTime();

      requestAnimationFrame(animate);
      //sphereMe3.rotation.x += 0.01;
      // sphereMe3.rotation.y += 0.005;
      sphereMe3.rotation.y += 0.005;
      sphereMe4.rotation.y += 0.01;
      // sphereMe4.rotation.y += 0.01 * Math.cos(t / 12);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
