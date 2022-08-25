import React, { useEffect } from 'react';
import './App.css';
import * as THREE from "three";
import earthmap1k from '../src/images/earthmap1k.jpeg';
import SceneInit from '../src/lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const uvTexture = new THREE.TextureLoader().load(earthmap1k);

    const ge3 = new THREE.SphereGeometry(8);
    const me3 = new THREE.MeshStandardMaterial({
      map: uvTexture,
    });
    const sphereMe3 = new THREE.Mesh(ge3, me3);
    sphereMe3.position.x = 0;
    sphereMe3.position.y = 0;
    test.scene.add(sphereMe3);
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
