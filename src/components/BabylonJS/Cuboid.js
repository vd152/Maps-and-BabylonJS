import React from "react";
import {
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Color4,
  StandardMaterial,
  Texture,
} from "@babylonjs/core";
import Scene from "./Scene";

let box;

const onSceneReady = (scene, image) => {

  scene.clearColor = new Color4(0.137, 0.216, 0.3, 1);

  var camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, Vector3.Zero(), scene);
  camera.lowerRadiusLimit = 8;
  camera.upperRadiusLimit = 20;

  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);
  camera.useBouncingBehavior = true;

  var materialPlane = new StandardMaterial("texturePlane", scene);
  materialPlane.diffuseTexture = new Texture(image, scene);
  materialPlane.specularColor = new Color4(0, 0, 0, 1);
  materialPlane.backFaceCulling = false; 

  var light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);

  light.intensity = 1.3;

  box = MeshBuilder.CreateBox("box", { size: 5, height: 3 }, scene);

  box.position.y = 1;
  box.material = materialPlane;
  //   MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};

const onRender = (scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 5;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

export default ({image}) => (
  <Scene
    antialias
    onSceneReady={(scene)=>onSceneReady(scene, image)}
    onRender={onRender}
    id="my-canvas"
  />
 
);
