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

      // const camera = new BABYLON.FollowCamera("followCam",BABYLON.Vector3.Zero(), scene);
      // camera.lockedTarget = box;
      // camera.radius = 10;
      // camera.heightOffset = 0;
      // camera.setTarget(BABYLON.Vector3.Zero());

      const light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 10, 0), scene);
      light.diffuse = new BABYLON.Color3(1, 0, 0);

      scene.actionManager = new BABYLON.ActionManager(scene);
      scene.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction( { trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: " " },
        function() {
          light.setEnabled(!light.isEnabled());
        }));
      camera.attachControl(canvas,true);
      return scene;
  }

  const scene = createScene();
  engine.runRenderLoop(function(){
      // scene.getMeshByName("Box").position.z -= 0.01; moves dat black box
      // var light = scene.getLightByName("pointLight");
      // light.diffuse.g += 0.01; changes light color over time!
      // light.diffuse.b += 0.01;


      scene.render();
  });
});