import React, { Component } from 'react';
import './App.css';
import * as THREE from "three";

class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    const geometry = new THREE.ConeGeometry( 2, 2, 10 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const cone = new THREE.Mesh( geometry, material );
    scene.add( cone );

    camera.position.z = 5;

      var animate = function () {
        requestAnimationFrame( animate );
        cone.rotation.x += 0.01;
        cone.rotation.y += 0.01;
        renderer.render( scene, camera );
      };
      animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}

export default App;
