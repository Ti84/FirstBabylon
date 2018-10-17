window.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementById('canvas');

  var engine = new BABYLON.Engine(canvas, true);

  var createScene = function(){
      var scene = new BABYLON.Scene(engine);
      scene.clearColor = new BABYLON.Color3.White();
      var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
      var camera = new BABYLON.ArcRotateCamera("arcCam",
              BABYLON.Tools.ToRadians(45),
              BABYLON.Tools.ToRadians(45),
              10.0,box.position,scene);

      camera.attachControl(canvas,true);


      var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 10, 0), scene);
      light.parent = camera;
      light.diffuse = new BABYLON.Color3(1,1,1);

      var material = new BABYLON.StandardMaterial("material1",scene); // StandardMaterial - collection of textures!
      //material.wireframe = true; // Its just a wireframe!
      box.material = material;
      material.diffuseTexture = new BABYLON.Texture("texture.png", scene);
      // material.bumpTexture = new BABYLON.Texture("texture_normal.png", scene); // Need a normal map for this to work! (can grab image / map from https://www.gamefromscratch.com/post/2017/01/18/BabylonJS-Tutorial-Series-Materials.aspx)
      // material.diffuseColor = BABYLON.Color3.Blue();
      //material.emissiveColor = BABYLON.Color3.Red(); color of lit up object
      //material.specularColor = BABYLON.Color3.Red(); // color of light reflecting off of object
      //material.alpha = .1; // Transparency
      return scene;
  }

  var scene = createScene();
  engine.runRenderLoop(function(){
    // Reference to material named box 
      // var material = scene.getMeshByName("Box").material;
      // material.alpha -= 0.01;  // Transparency over time
      // if (material.alpha <- 0) material.alpha = 1;
      scene.render();
  });
});