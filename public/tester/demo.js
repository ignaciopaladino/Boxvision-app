"use strict";

// SETTINGS of this demo :
let SETTINGS = {
  cameraFOV: 40 // in degrees, 3D camera FOV
};

// some globalz :
let THREECAMERA;
let currentGlasses;
let threeStuffs;

// callback : launched if a face is detected or lost. TODO : add a cool particle effect WoW !
function detect_callback(isDetected) {
  if (isDetected) {
    console.log("INFO in detect_callback() : DETECTED");
  } else {
    console.log("INFO in detect_callback() : LOST");
  }
}

function removeEntity(object) {
  var selectedObject = threeStuffs.faceObject.getObjectByName(object.name);
  console.log("To remove : " + selectedObject.name);
  threeStuffs.faceObject.remove(selectedObject);
}

function loadGlasses(glassesModel) {
  removeEntity(currentGlasses);

  const loader = new THREE.FBXLoader();

  loader.load(glassesModel, function(glasses) {
    glasses.name = glassesModel;
    glasses.position.set(0, 0.11, 0.5);
    glasses.scale.multiplyScalar(0.07);

    currentGlasses = glasses;

    threeStuffs.faceObject.add(currentGlasses);
  });
}

// build the 3D. called once when Jeeliz Face Filter is OK
function init_threeScene(spec) {
  threeStuffs = THREE.JeelizHelper.init(spec, detect_callback);

  const occluderMesh = THREE.JeelizHelper.create_threejsOccluder(
    "./models/face.json"
  );

  threeStuffs.faceObject.add(occluderMesh);

  window.re = occluderMesh;
  occluderMesh.rotation.set(0.35, 0, 0);
  occluderMesh.position.set(0, 0.11, -0.5);
  occluderMesh.scale.multiplyScalar(0.0094); //0084

  // Create the FBXLoader for our glasses
  const loader = new THREE.FBXLoader();

  loader.load("./models/Modelo_6.fbx", function(glasses) {
    glasses.name = "./models/Modelo_6.fbx";
    glasses.position.set(0, 0.11, 0.65);
    glasses.scale.multiplyScalar(0.07);
    currentGlasses = glasses;
    threeStuffs.faceObject.add(currentGlasses);
  });
  // CREATE LIGHT
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  threeStuffs.scene.add(ambientLight);

  // CREATE THE CAMERA
  const aspecRatio = spec.canvasElement.width / spec.canvasElement.height;
  THREECAMERA = new THREE.PerspectiveCamera(
    SETTINGS.cameraFOV,
    aspecRatio,
    0.1,
    100
  );
} // end init_threeScene()

//launched by body.onload() :
function main() {
  JeelizResizer.size_canvas({
    canvasId: "jeeFaceFilterCanvas",
    callback: function(isError, bestVideoSettings) {
      init_faceFilter(bestVideoSettings);
    }
  });
} //end main()

function init_faceFilter(videoSettings) {
  JEEFACEFILTERAPI.init({
    canvasId: "jeeFaceFilterCanvas",
    NNCpath: "./dist/", // root of NNC.json file
    videoSettings: videoSettings,
    callbackReady: function(errCode, spec) {
      if (errCode) {
        console.log("AN ERROR HAPPENED. SORRY BRO :( . ERR =", errCode);
        return;
      }

      console.log("INFO : JEEFACEFILTERAPI IS READY");
      init_threeScene(spec);
    }, // end callbackReady()

    // called at each render iteration (drawing loop)
    callbackTrack: function(detectState) {
      THREE.JeelizHelper.render(detectState, THREECAMERA);
    } // end callbackTrack()
  }); // end JEEFACEFILTERAPI.init call
} // end main()
