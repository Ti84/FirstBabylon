// Wrap in event listener (Waiting for dom to load before running)
window.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById('canvas');

  const engine = new BABYLON.Engine(canvas, true);

  const createScene = function(){
      const scene = new BABYLON.Scene(engine);
      scene.clearColor = new BABYLON.Color3.White();
      const box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
      const box2 = BABYLON.Mesh.CreateBox("Box",4.0,scene);
      const material = new BABYLON.StandardMaterial("material1", scene);
      material.wireframe = true;
      box2.material = material;
      box2.position = new BABYLON.Vector3(0, 5 ,0);
      const camera = new BABYLON.ArcRotateCamera('arcCamera', 
      BABYLON.Tools.ToRadians(45),
      BABYLON.Tools.ToRadians(45),
      10.0, box.position, scene); // Rotational camera!

      new BABYLON.SpotLight("spotLight",
      new BABYLON.Vector3(0, 10, 0),
      new BABYLON.Vector3(0, -1, 0),
      BABYLON.Tools.ToRadians(45), 0.1, scene);
      
      
      camera.attachControl(canvas,true);
      return scene;
  }

  const scene = createScene();
  engine.runRenderLoop(function(){
      var light = scene.getLightByName("spotLight");
      light.position.y -= 0.01; // Moving light down!
      scene.render();
  });
});