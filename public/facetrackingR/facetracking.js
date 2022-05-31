"use strict";

// SETTINGS of this demo :
let SETTINGS = {
  cameraFOV: 2 // in degrees, 3D camera FOV
};

// some globalz :
let THREECAMERA;
let currentGlasses;
let threeStuffs;

const textureEquirec = new THREE.TextureLoader().load("./models/studio018.jpg");
textureEquirec.mapping = THREE.SphericalReflectionMapping;
textureEquirec.magFilter = THREE.LinearFilter;
textureEquirec.minFilter = THREE.LinearMipMapLinearFilter;

const provincias = [
  { label: "Buenos Aires", value: "Buenos Aires" },
  { label: "CABA", value: "CABA" },
  { label: "Catamarca", value: "Catamarca" },
  { label: "Chaco", value: "Chaco" },
  { label: "Chubut", value: "Chubut" },
  { label: "Córdoba", value: "Córdoba" },
  { label: "Corrientes", value: "Corrientes" },
  { label: "Entre Ríos", value: "Entre Ríos" },
  { label: "Formosa", value: "Formosa" },
  { label: "Jujuy", value: "Jujuy" },
  { label: "La Pampa", value: "La Pampa" },
  { label: "La Rioja", value: "La Rioja" },
  { label: "Mendoza", value: "Mendoza" },
  { label: "Misiones", value: "Misiones" },
  { label: "Neuquén", value: "Neuquén" },
  { label: "Río Negro", value: "Río Negro" },
  { label: "Salta", value: "Salta" },
  { label: "San Juan", value: "San Juan" },
  { label: "San Luis", value: "San Luis" },
  { label: "Santa Cruz", value: "Santa Cruz" },
  { label: "Santa Fe", value: "Santa Fe" },
  { label: "Santiago del Estero", value: "Santiago del Estero" },
  { label: "Tierra del Fuego", value: "Tierra del Fuego" },
  { label: "Tucumán", value: "Tucumán" }
];

const materialNegro = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 0.9,
  color: 0x2f2f2f,
  emissive: 0x70707,
  transparent: false,
  metalness: 1,
  roughness: 0.05
});

const marcoColor1_1 = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 1,
  color: 0x2f2f2f,
  emissive: 0x70707,
  transparent: false,
  metalness: 1,
  roughness: 0.05
});

const materialRosa = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 1,
  color: 0xfb57e7,
  emissive: 0xfb57e7,
  transparent: false,
  metalness: 1,
  roughness: 0.05
});

const materialAzul = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 1,
  color: 0x003087,
  emissive: 0x003087,
  transparent: false,
  metalness: 1,
  roughness: 0.05
});

const materialBordo = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 1,
  color: 0xfd4375,
  emissive: 0xfd4375,
  transparent: false,
  metalness: 1,
  roughness: 0.05
});

const materialRojo = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 1,
  color: 0xee2737,
  emissive: 0xee2737,
  transparent: false,
  metalness: 1,
  roughness: 0.05
});

const materialGris = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 1,
  color: 0x99989e,
  emissive: 0x99989e,
  transparent: false,
  metalness: 0.9,
  roughness: 0.05
});

let models = {};
models["Model1"] = {
  name: "MODELO 1",
  fbx: "./models/Modelo_1.fbx",
  positionx: 0,
  positiony: 0.1,
  positionz: 0.6,
  scalex: 0.06,
  scaley: 0.06,
  scalez: 0.06,
  color: "red",
  precio: 0,
  colores: [
    {
      nombre: "Rojo",
      img: "../img/rojo.png",
      materialColor1: materialRojo,
      materialColor2: materialRojo,
      materialColorPatilla: materialRojo
    },

    {
      nombre: "Azul",
      img: "../img/azul.png",
      materialColor1: materialAzul,
      materialColor2: materialAzul,
      materialColorPatilla: materialAzul
    },
    {
      nombre: "Rosa",
      img: "../img/rosa.png",
      materialColor1: materialRosa,
      materialColor2: materialRosa,
      materialColorPatilla: materialRosa
    },
    {
      nombre: "Negro",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    }
  ]
};
models["Model2"] = {
  name: "MODELO 2",
  fbx: "./models/Modelo_2.fbx",
  positionx: 0,
  positiony: 0.11,
  positionz: 0.6,
  scalex: 0.059,
  scaley: 0.059,
  scalez: 0.059,
  precio: 0,
  colores: [
    {
      nombre: "Negro-azul",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Negro-azul",
      img: "../img/negro-azul.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialAzul
    },
    {
      nombre: "Negro-Rojo",
      img: "../img/negro-rojo.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialRojo
    },
    {
      nombre: "Negro-Bordo",
      img: "../img/negro-bordo.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialBordo
    },
    {
      nombre: "Rojo",
      img: "../img/rojo.png",
      materialColor1: materialRojo,
      materialColor2: materialRojo,
      materialColorPatilla: materialRojo
    },
    {
      nombre: "Rojo-negro",
      img: "../img/rojo-negro.png",
      materialColor1: materialRojo,
      materialColor2: materialRojo,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Azul",
      img: "../img/azul.png",
      materialColor1: materialAzul,
      materialColor2: materialAzul,
      materialColorPatilla: materialAzul
    },
    {
      nombre: "Azul-negro",
      img: "../img/azul-negro.png",
      materialColor1: materialAzul,
      materialColor2: materialAzul,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Gris-Negro",
      img: "../img/gris-negro.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Gris-Bordo",
      img: "../img/gris-bordo.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialBordo
    },
    {
      nombre: "Gris-Azul",
      img: "../img/gris-azul.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialAzul
    }
  ]
};

models["Model3"] = {
  name: "MODELO 3",
  label: "FLEXA-WAY",
  fbx: "./models/Modelo_3_1.fbx",
  positionx: 0,
  positiony: 0.11,
  positionz: 0.6,
  scalex: 0.065,
  scaley: 0.065,
  scalez: 0.065,
  precio: 0,
  colores: [
    {
      nombre: "Negro-azul",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Negro-azul",
      img: "../img/negro-azul.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialAzul
    },
    {
      nombre: "Negro-Rojo",
      img: "../img/negro-rojo.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialRojo
    },
    {
      nombre: "Negro-Bordo",
      img: "../img/negro-bordo.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialBordo
    },
    {
      nombre: "Rojo",
      img: "../img/rojo.png",
      materialColor1: materialRojo,
      materialColor2: materialRojo,
      materialColorPatilla: materialRojo
    },
    {
      nombre: "Rojo-negro",
      img: "../img/rojo-negro.png",
      materialColor1: materialRojo,
      materialColor2: materialRojo,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Azul",
      img: "../img/azul.png",
      materialColor1: materialAzul,
      materialColor2: materialAzul,
      materialColorPatilla: materialAzul
    },
    {
      nombre: "Azul-negro",
      img: "../img/azul-negro.png",
      materialColor1: materialAzul,
      materialColor2: materialAzul,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Gris-Negro",
      img: "../img/gris-negro.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Gris-Bordo",
      img: "../img/gris-bordo.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialBordo
    },
    {
      nombre: "Gris-Azul",
      img: "../img/gris-azul.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialAzul
    }
  ]
};

models["Model4"] = {
  name: "MODELO 4",
  fbx: "./models/Modelo_4.fbx",
  positionx: 0,
  positiony: 0.11,
  positionz: 0.6,
  scalex: 0.059,
  scaley: 0.059,
  scalez: 0.059,
  material: materialNegro,
  precio: 0,
  colores: [
    {
      nombre: "Negro",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    },

    {
      nombre: "Negro-azul",
      img: "../img/negro-azul.png",
      materialColor1: materialNegro,
      materialColor2: materialAzul,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Gris",
      img: "../img/gris.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialGris
    }
  ]
};

models["Model5"] = {
  name: "MODELO 5",
  fbx: "./models/Modelo_5.fbx",
  positionx: 0,
  positiony: 0.11,
  positionz: 0.6,
  scalex: 0.062,
  scaley: 0.062,
  scalez: 0.062,
  precio: 5000,
  colores: [
    {
      nombre: "Negro-azul",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Negro-azul",
      img: "../img/negro-azul.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialAzul
    },
    {
      nombre: "Negro-Rojo",
      img: "../img/negro-rojo.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialRojo
    },
    {
      nombre: "Negro-Bordo",
      img: "../img/negro-bordo.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialBordo
    },
    {
      nombre: "Rojo",
      img: "../img/rojo.png",
      materialColor1: materialRojo,
      materialColor2: materialRojo,
      materialColorPatilla: materialRojo
    },
    {
      nombre: "Rojo-negro",
      img: "../img/rojo-negro.png",
      materialColor1: materialRojo,
      materialColor2: materialRojo,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Azul",
      img: "../img/azul.png",
      materialColor1: materialAzul,
      materialColor2: materialAzul,
      materialColorPatilla: materialAzul
    },
    {
      nombre: "Azul-negro",
      img: "../img/azul-negro.png",
      materialColor1: materialAzul,
      materialColor2: materialAzul,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Gris-Negro",
      img: "../img/gris-negro.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialNegro
    },
    {
      nombre: "Gris-Bordo",
      img: "../img/gris-bordo.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialBordo
    },
    {
      nombre: "Gris-Azul",
      img: "../img/gris-azul.png",
      materialColor1: materialGris,
      materialColor2: materialGris,
      materialColorPatilla: materialAzul
    }
  ]
};

let selectedColor = 0;

let orden = {
  modelo: "",
  precioMarco: 0,
  esfera_derecho: 0.0,
  cilindro_derecho: 0.0,
  eje_derecho: 0,
  prisma_derecho: 0.5,
  base_derecho: "abajo",
  esfera_izquierdo: 0.0,
  cilindro_izquierdo: 0.0,
  eje_izquierdo: 0,
  prisma_izquierdo: 0.5,
  base_izquierdo: "arriba",
  adicion_derecho: 0,
  adicion_izquierdo: 0,
  graduacion: "",
  idTipoLente: 0,
  antireflejo: "",
  fotocromatico: "",
  precioAntireflejo: 0,
  precioFotocromatico: 0
};

let tipoLentes = {};
// callback : launched if a face is detected or lost. TODO : add a cool particle effect WoW !
function detect_callback(isDetected) {
  if (isDetected) {
    console.log("INFO in detect_callback() : DETECTED");
  } else {
    console.log("INFO in detect_callback() : LOST");
  }
}

function removeEntity(object) {
  if (typeof currentGlasses !== "undefined") {
    var selectedObject = threeStuffs.faceObject.getObjectByName(object.name);
    console.log("To remove : " + selectedObject.name);
    threeStuffs.faceObject.remove(selectedObject);
  }
}

function loadGlasses(glassesModel) {
  if (typeof currentGlasses !== "undefined") removeEntity(currentGlasses);
  const model = models[glassesModel];
  const loader = new THREE.FBXLoader();
  loader.load(model.fbx, function(glasses) {
    glasses.name = model.name;
    $("#modelo").html(model.label);
    $("#precio").html("$" + model.precio);
    orden.modelo = model.label;

    orden.precioMarco = model.precio;
    orden.idMarco = model.id;
    glasses.position.set(model.positionx, model.positiony, model.positionz);
    glasses.scale.set(model.scalex, model.scaley, model.scalez);
    currentGlasses = glasses;
    threeStuffs.faceObject.add(currentGlasses);
    setColor(currentGlasses, model.colores[0]);
    setColorButtons(model.colores);
  });
}
function setColorButtons(colores) {
  var container = document.getElementById("formColors");
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  var left = document.getElementsByClassName("left")[0];
  left.style.marginTop = 15 - colores.length + "%";
  for (let i = 0; i < colores.length; i++) {
    let c = colores[i];
    assignButtonColor("formColors", c);
  }
}
function setColor(currentGlasses, cc) {
  orden.color = cc.nombre;
  currentGlasses.traverse(function(child) {
    if (child instanceof THREE.Mesh) {
      console.log(child.name.toLowerCase());
      if (
        child.name.toLowerCase().includes("marco") ||
        child.name.toLowerCase().includes("pata") ||
        child.name.toLowerCase().includes("patilla")
      ) {
        child.material = cc.materialColor1;
        if (child.name.toLowerCase().includes("color_1")) {
          child.material = cc.materialColor1;
        }

        if (
          child.name.toLowerCase().includes("pata") ||
          child.name.toLowerCase().includes("patilla")
        ) {
          child.material = cc.materialColorPatilla;
        }
      }
      if (
        child.name.toLowerCase().includes("color_2") ||
        child.name.toLowerCase().includes("color2")
      ) {
        if (cc.materialColor2) {
          child.material = cc.materialColor2;
        } else {
          child.material = cc.materialColor1;
        }
      }
      if (
        child.name.toLowerCase().includes("plane") ||
        child.name.toLowerCase().includes("lentes") ||
        child.name.toLowerCase().includes("vidrio")
      ) {
        child.material = crystalMat;
      }
    }
  });
}

function assignButtonColor(formName, c) {
  var container = document.getElementById(formName);
  var btnColor = document.createElement("button");
  btnColor.id = c.nombre;
  btnColor.name = c.nombre;
  btnColor.className = "colores-selector btn waves-effect waves-light";
  btnColor.onclick = function() {
    setColor(currentGlasses, c);
    return false;
  };

  var imgColor = document.createElement("img");
  imgColor.className = "img-colores";
  imgColor.src = c.img;
  btnColor.appendChild(imgColor);
  container.appendChild(btnColor);
}

const crystalMat = new THREE.MeshBasicMaterial({
  envMap: textureEquirec,
  opacity: 0.2,
  color: 0x628896,
  transparent: true
});

// build the 3D. called once when Jeeliz Face Filter is OK
function init_threeScene(spec) {
  threeStuffs = THREE.JeelizHelper.init(spec, detect_callback);

  const occluderMesh = THREE.JeelizHelper.create_threejsOccluder(
    "./models/face.json"
  );

  threeStuffs.faceObject.add(occluderMesh);

  window.re = occluderMesh;
  occluderMesh.rotation.set(0.5, 0, 0);
  occluderMesh.position.set(0, 0.1, -0.04);
  occluderMesh.scale.set(0.0075, 0.0075, 0.0075); //0084

  loadGlasses("Model3");
  getMarcos();
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
  $("#modalBienvenida").modal("open");
} // end init_threeScene()

function getMarcos() {
  return fetch("https://boxvision.com.ar/boxvision/products/marcos")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => getMarcosResponse(json));
}

function getMarcosResponse(json) {
  json.data.forEach(assignMarcoSpec);
}

function assignMarcoSpec(value, index, array) {
  models[value.nombre].id = value.id;
  models[value.nombre].precio = value.precio;
  models[value.nombre].label = value.label;
}

//launched by body.onload() :
function main() {
  JeelizResizer.size_canvas({
    canvasId: "jeeFaceFilterCanvas",
    callback: function(isError, bestVideoSettings) {
      init_faceFilter(bestVideoSettings);
    }
  });
  //end main()

  JEEFACEFILTERAPI.init({
    followZRot: true,
    canvasId: "jeeFaceFilterCanvas",
    NNCpath: "./dist/NNCwideAngles.json", // root of NNC.json file
    videoSettings: {
      facingMode: "user", //to use the rear camera, set to 'environment'

      idealWidth: 800, //ideal video width in pixels
      idealHeight: 600, //ideal video height in pixels
      minWidth: 480, //min video width in pixels
      maxWidth: 1280, //max video width in pixels
      minHeight: 480, //min video height in pixels
      maxHeight: 1280, //max video height in pixels,
      rotate: -90 //rotation in degrees possible values: 0,90,-90,180
    },
    maxFacesDetected: 1,
    stabilizationSettings: {
      //adjust stabilization parameters for more responsivity
      translationFactorRange: [0.0015, 0.005],
      rotationFactorRange: [0.003, 0.02],
      qualityFactorRange: [0.91, 0.98],
      alphaRange: [0.07, 1]
    },
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
      trackedCallback(detectState);
    } // end callbackTrack()
  }); // end JEEFACEFILTERAPI.init call
} // end main()

var instances;
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".modal");
  instances = M.Modal.init(elems);
});

function trackedCallback(detectState) {
  if (detectState.detected > 0.4) {
    $("#headerModelo").show();
    $("#headerTracking").hide();
    $("#trackingCara").hide();
  } else {
    $("#headerModelo").hide();
    $("#headerTracking").show();
    $("#trackingCara").show();
  }
}

function setAntireflejo(antireflejo) {
  $("#modalAntiReflejo").modal("close");
  if (antireflejo === true) {
    $("#modalAntiReflejoSpecs").modal("open");
  } else {
    getFotocromatico(orden.idTipoLente);
  }
}

function setFotocromatico(fotocromatico) {
  $("#modalFotocromatico").modal("close");
  if (fotocromatico === true) {
    $("#modalFotocromaticoSpecs").modal("open");
  } else {
    $("#modalFormData").modal("open");
  }
}

function antiReflejoSpecSelected() {
  orden.antireflejo = getRadioValue("formAntireflejos");
  var antireflejoLabel = getRadioLabel("formAntireflejos");
  orden.antireflejoLabel = antireflejoLabel.substring(
    0,
    antireflejoLabel.indexOf("$") - 2
  );
  orden.precioAntireflejo = antireflejoLabel.substring(
    antireflejoLabel.indexOf("$") + 1
  );
  $("#modalAntiReflejoSpecs").modal("close");
  getFotocromatico(orden.idTipoLente);
}

function fotocromaticoSpecSelected() {
  orden.fotocromatico = getRadioValue("formFotocromatico");
  var fotocromaticoLabel = getRadioLabel("formFotocromatico");
  orden.fotocromaticoLabel = fotocromaticoLabel.substring(
    0,
    fotocromaticoLabel.indexOf("$") - 2
  );
  orden.precioFotocromatico = fotocromaticoLabel.substring(
    fotocromaticoLabel.indexOf("$") + 1
  );
  $("#modalFotocromaticoSpecs").modal("close");
  $("#modalFormData").modal("open");
}

function tipoCristalSelected() {
  var tipoCristal = getRadioValue("formTipoCristal");
  orden.idTipoLente = tipoCristal;
  var tipoCristalLabel = getRadioLabel("formTipoCristal");
  orden.tipoLenteLabel = tipoCristalLabel.substring(
    0,
    tipoCristalLabel.indexOf("$") - 2
  );
  orden.precioTipoLente = tipoCristalLabel.substring(
    tipoCristalLabel.indexOf("$") + 1
  );
  if (tipoCristal > 0) {
    $("#modalTipoCristal").modal("close");
    //getProducto(orden.idTipoLente, orden. orden.precio);
    getAntireflejos(tipoCristal);
  }
}

function getRadioValue(formName) {
  var container = document.getElementById(formName);
  var rValue = 0;
  for (let i = 0; i < container.childElementCount && rValue === 0; i++) {
    if (container.childNodes[i].firstChild.firstChild.checked) {
      rValue = container.childNodes[i].firstChild.firstChild.value;
    }
  }
  return rValue;
}

function getRadioLabel(formName) {
  var container = document.getElementById(formName);
  var rValue = 0;
  for (let i = 0; i < container.childElementCount && rValue === 0; i++) {
    if (container.childNodes[i].firstChild.firstChild.checked) {
      rValue =
        container.childNodes[i].firstChild.firstChild.labels[0].innerText;
    }
  }
  return rValue;
}

function getFotocromatico(idTipoLente) {
  return fetch(
    "https://boxvision.com.ar/boxvision/products/fotocromatico?idTipoLente=" +
      idTipoLente,
    {
      idTipoLente: idTipoLente
    }
  )
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => getFotocromaticoResponse(json));
}

function getFotocromaticoResponse(json) {
  var container = document.getElementById("formFotocromatico");
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  if (json.data.length > 0) {
    json.data.forEach(assignInputFotocromatico);
    $("#modalFotocromatico").modal("open");
  } else {
    $("#modalFormData").modal("open");
  }
}

function assignInputFotocromatico(value, index, array) {
  assignInput("formFotocromatico", value);
}

function getAntireflejos(idTipoLente) {
  return fetch(
    "https://boxvision.com.ar/boxvision/products/antireflejo?idTipoLente=" +
      idTipoLente,
    {
      idTipoLente: idTipoLente
    }
  )
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => getAntireflejosResponse(json));
}

function getAntireflejosResponse(json) {
  var container = document.getElementById("formAntireflejos");

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  if (json.data.length > 0) {
    json.data.forEach(assignInputAntireflejo);
    $("#modalAntiReflejo").modal("open");
  } else {
    getFotocromatico(orden.idTipoLente);
  }
}

function assignInputAntireflejo(value, index, array) {
  assignInput("formAntireflejos", value);
}

function bienvenidoClick() {
  $("#modalBienvenida").modal("close");
}

function formGraduacionDataSubmit() {
  orden.esfera_derecho = $("#esfera_derecho")[0].value;
  orden.cilindro_derecho = $("#cilindro_derecho")[0].value;
  orden.esfera_izquierdo = $("#esfera_izquierdo")[0].value;
  orden.cilindro_izquierdo = $("#cilindro_izquierdo")[0].value;
  orden.eje_derecho = $("#eje_derecho")[0].value;
  orden.prisma_derecho = $("#prisma_derecho")[0].value;
  orden.base_derecho = $("#base_derecho")[0].value;
  orden.adicion_derecho = $("#adicion_derecho")[0].value;

  orden.eje_izquierdo = $("#eje_izquierdo")[0].value;
  orden.prisma_izquierdo = $("#prisma_izquierdo")[0].value;
  orden.base_izquierdo = $("#base_izquierdo")[0].value;
  orden.adicion_izquierdo = $("#adicion_izquierdo")[0].value;

  let valido = false;
  if (
    Math.abs(orden.esfera_derecho) <= 4 &&
    Math.abs(orden.cilindro_derecho) <= 2 &&
    (Math.abs(orden.esfera_izquierdo) <= 4 &&
      Math.abs(orden.cilindro_izquierdo) <= 2)
  ) {
    console.log("BAJO");
    orden.graduacion = 1;
    valido = true;
  } else if (
    Math.abs(orden.esfera_derecho) <= 8 &&
    Math.abs(orden.cilindro_derecho) <= 4 &&
    (Math.abs(orden.esfera_izquierdo) <= 8 &&
      Math.abs(orden.cilindro_izquierdo) <= 4)
  ) {
    console.log("MEDIO");
    orden.graduacion = 2;
    valido = true;
  } else if (
    Math.abs(orden.esfera_derecho) > 8 ||
    Math.abs(orden.cilindro_derecho) > 4 ||
    Math.abs(orden.esfera_izquierdo) > 8 ||
    Math.abs(orden.cilindro_izquierdo) > 4
  ) {
    if (
      Math.abs(orden.esfera_derecho) > 12 ||
      Math.abs(orden.cilindro_derecho) > 6 ||
      Math.abs(orden.esfera_izquierdo) > 12 ||
      Math.abs(orden.cilindro_izquierdo) > 6
    ) {
      console.log("INVALIDO");
      window.alert("La graduación ingresada es inválida");
    } else {
      console.log("ALTO");
      orden.graduacion = 3;
      valido = true;
    }
  }
  if (valido === true) {
    $("#modalFormGraduacion").modal("close");
    getTiposCristal();
  }
}

function getTiposCristal() {
  return fetch("https://boxvision.com.ar/boxvision/products/tipolentes")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => getTipoCristalResponse(json));
}

function getTipoCristalResponse(json) {
  var container = document.getElementById("formTipoCristal");
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  json.data.forEach(assignInputCristal);
  $("#modalTipoCristal").modal("open");
}

function assignInput(formName, value) {
  var container = document.getElementById(formName);
  var input = document.createElement("input");
  input.type = "radio";
  input.class = "with-gap";
  input.value = value.value;
  input.name = "tipo-cristal";
  var span = document.createElement("span");
  span.innerHTML = value.label + " - $" + value.precio;
  var label = document.createElement("label");
  label.appendChild(input);
  label.appendChild(span);
  var p = document.createElement("p");
  p.appendChild(label);
  container.appendChild(p);
}

function assignInputCristal(value, index, array) {
  if (value.rangograduacion === orden.graduacion) {
    assignInput("formTipoCristal", value);
  }
}

function backGraduacion() {
  $("#modalFormGraduacion").modal("close");
}

function backTipoCristal() {
  $("#modalTipoCristal").modal("close");
  $("#modalFormGraduacion").modal("open");
}

function backAntireflejo() {
  $("#modalAntiReflejo").modal("close");
  $("#modalTipoCristal").modal("open");
}

function backAntiReflejoSpec() {
  $("#modalAntiReflejoSpecs").modal("close");
  $("#modalAntiReflejo").modal("open");
}

function backFotocromatico() {
  $("#modalFotocromatico").modal("close");
  $("#modalAntiReflejo").modal("open");
}

function backFotocromaticoSpec() {
  $("#modalFotocromaticoSpecs").modal("close");
  $("#modalFotocromatico").modal("open");
}

function backFormData() {
  $("#modalFormData").modal("close");
  $("#modalTipoCristal").modal("open");
}

function backFormEnvio() {
  $("#modalFormData").modal("open");
  $("#modalFormEnvio").modal("close");
}

function formDataSubmit() {
  if ($("#formDataUsuario").valid()) {
    orden.num_afiliado = $("#num_afiliado")[0].value;
    orden.numero_voucher = $("#numero_voucher")[0].value;
    orden.first_name = $("#first_name")[0].value;
    orden.last_name = $("#last_name")[0].value;
    orden.email = $("#email")[0].value;
    orden.telefono = $("#telefono")[0].value;

    $("#modalFormData").modal("close");
    $("#modalFormEnvio").modal("open");
  }
}

function formEnvioSubmit() {
  if ($("#formDataEnvio").valid()) {
    orden.direccion = $("#direccion")[0].value;
    orden.ciudad = $("#ciudad")[0].value;
    orden.provincia = $("#provincia")[0].value;

    $("#modalFormEnvio").modal("close");
    $("#esfera_derecho_resumen")[0].value = orden.esfera_derecho;
    $("#cilindro_derecho_resumen")[0].value = orden.cilindro_derecho;
    $("#esfera_izquierdo_resumen")[0].value = orden.esfera_izquierdo;
    $("#cilindro_izquierdo_resumen")[0].value = orden.cilindro_izquierdo;
    $("#eje_derecho_resumen")[0].value = orden.eje_derecho;
    $("#prisma_derecho_resumen")[0].value = orden.prisma_derecho;
    $("#base_derecho_resumen")[0].value = orden.base_derecho;
    $("#adicion_derecho_resumen")[0].value = orden.adicion_derecho;

    $("#eje_izquierdo_resumen")[0].value = orden.eje_izquierdo;
    $("#prisma_izquierdo_resumen")[0].value = orden.prisma_izquierdo;
    $("#base_izquierdo_resumen")[0].value = orden.base_izquierdo;
    $("#adicion_izquierdo_resumen")[0].value = orden.adicion_izquierdo;

    $("#modalResumenGraduacion").modal("open");
  }
}

function backGraduacionResumen() {
  $("#modalResumenGraduacion").modal("close");
  $("#modalFormEnvio").modal("open");
}

function formGraduacionResumenSubmit() {
  if ($("#formGraduacionCheck")[0].checked) {
    $("#modalResumenGraduacion").modal("close");

    $("#marco_resumen")[0].value = orden.modelo;
    $("#color_resumen")[0].value = orden.color;

    $("#precio_marco_resumen")[0].value = "$ " + orden.precioMarco;
    $("#cristal_resumen")[0].value = orden.tipoLenteLabel;
    $("#precio_cristal_resumen")[0].value = "$ " + orden.precioTipoLente;
    var total =
      parseFloat(orden.precioMarco) + parseFloat(orden.precioTipoLente);
    if (orden.antireflejoLabel) {
      $("#antireflejo_resumen")[0].value = orden.antireflejoLabel;
      $("#precio_antireflejo_resumen")[0].value =
        "$ " + orden.precioAntireflejo;
      total += parseFloat(orden.precioAntireflejo);
    }
    if (orden.fotocromaticoLabel) {
      $("#fotocromatico_resumen")[0].value = orden.fotocromaticoLabel;
      $("#precio_fotocromatico_resumen")[0].value =
        "$ " + orden.precioFotocromatico;
      total += parseFloat(orden.precioFotocromatico);
    }
    $("#precio_total_resumen")[0].value = "$ " + total;
    orden.total = total;
    $("#modalResumenPedido").modal("open");
  }
}

function backFormResumen() {
  $("#modalResumenPedido").modal("close");
  $("#modalResumenGraduacion").modal("open");
}

function formResumenSubmit() {
  if ($("#formResumenCheck")[0].checked) {
    $("#modalResumenPedido").modal("close");
    $("#num_afiliado_resumen")[0].value = orden.num_afiliado;
    $("#numero_voucher_resumen")[0].value = orden.numero_voucher;
    $("#first_name_resumen")[0].value = orden.first_name;
    $("#last_name_resumen")[0].value = orden.last_name;
    $("#email_resumen")[0].value = orden.email;
    $("#telefono_resumen")[0].value = orden.telefono;
    $("#direccion_resumen")[0].value = orden.direccion;
    $("#ciudad_resumen")[0].value = orden.ciudad;
    $("#provincia_resumen")[0].value = orden.provincia;
    $("#modalFormDataResumen").modal("open");
  }
}

function backFormDataResumen() {
  $("#modalFormDataResumen").modal("close");
  $("#modalResumenPedido").modal("open");
}

function formDataResumenSubmit() {
  if ($("#formResumenDataCheck")[0].checked) {
    $("#modalFormDataResumen").modal("close");
    return axios
      .post("https://boxvision.com.ar/boxvision/usuario/", {
        values: orden
      })
      .then(json => usuarioSaveResponse(json));
  }
}

function usuarioSaveResponse(json) {
  orden.usuarioId = json.data.data.insertId;

  return axios
    .post("https://boxvision.com.ar/boxvision/graduacion/", {
      values: orden
    })
    .then(json => graduacionSaveResponse(json));
}

function graduacionSaveResponse(json) {
  orden.idRecetaGraduacion = json.data.data.insertId;
  return axios
    .post("https://boxvision.com.ar/boxvision/pedido/", {
      values: orden
    })
    .then(json => ordenSaveResponse(json));
}

function ordenSaveResponse(json) {
  orden.orderId = json.data.data.insertId;
  $("#idPedidoConfirmacion")[0].value = orden.orderId;
  $("#modalConfirmation").modal("open");
}

function confirmacionDone() {
  orden = {
    modelo: "",
    precioMarco: 0,
    esfera_derecho: 0.0,
    cilindro_derecho: 0.0,
    eje_derecho: 0,
    prisma_derecho: 0.5,
    base_derecho: "abajo",
    esfera_izquierdo: 0.0,
    cilindro_izquierdo: 0.0,
    eje_izquierdo: 0,
    prisma_izquierdo: 0.5,
    base_izquierdo: "arriba",
    adicion_derecho: 0,
    adicion_izquierdo: 0,
    graduacion: "",
    idTipoLente: 0,
    antireflejo: "",
    fotocromatico: "",
    precioAntireflejo: 0,
    precioFotocromatico: 0,
    num_afiliado: "",
    numero_voucher: "",
    first_name: "",
    last_name: "",
    email: "",
    telefono: ""
  };
  $("#modalConfirmation").modal("close");
  window.location.reload(false);
}

function getProducto(idProducto, value) {
  return fetch("https://boxvision.com.ar/boxvision/products/tipolentes")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => getProductoResponse(json, value));
}

function getProductoResponse(json) {
  var container = document.getElementById("formTipoCristal");
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  json.data.forEach(assignInputCristal);
  $("#modalTipoCristal").modal("open");
}

$(document).ready(function() {
  $("#formDataUsuario").attr("autocomplete", "off");
  $("#formDataUsuario").validate({
    rules: {
      num_afiliado: {
        required: true,
        minlength: 1
      },
      numero_voucher: {
        required: true,
        minlength: 1
      },
      first_name: {
        required: true,
        minlength: 3
      },
      last_name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        minlength: 3
      },
      telefono: {
        required: true,
        minlength: 3
      }
    },
    //For custom messages
    messages: {
      first_name: {
        required: "Enter your first name",
        text: true,
        minlength: "Enter at least 2 characters"
      },
      last_name: {
        required: "Enter your second name",
        text: true,
        minlength: "Enter at least 2 characters"
      },
      num_afiliado: {
        required: "Enter a username",
        minlength: "Enter at least 3 characters"
      },
      numero_voucher: {
        required: "Enter a username",
        minlength: "Enter at least 3 characters"
      }
    },
    errorClass: "invalid",
    validClass: "valid",
    errorPlacement: function(error, element) {
      $(element)
        .closest("form")
        .find("label[for='" + element.attr("id") + "']")
        .attr("data-error", error.text());
    }
  });

  $("#formDataEnvio").attr("autocomplete", "off");
  $("#formDataEnvio").validate({
    rules: {
      direccion: {
        required: true,
        minlength: 3
      },
      ciudad: {
        required: true,
        minlength: 3
      },
      provincia: {
        required: true,
        minlength: 3
      }
    },
    errorClass: "invalid",
    validClass: "valid",
    errorPlacement: function(error, element) {
      $(element)
        .closest("form")
        .find("label[for='" + element.attr("id") + "']")
        .attr("data-error", error.text());
    }
  });
});

function upGraduacion(idInput) {
  event.preventDefault();
  var v = parseFloat($("#" + idInput)[0].value);

  $("#" + idInput)[0].value = v + 0.25;
}

function downGraduacion(idInput) {
  event.preventDefault();
  var v = parseFloat($("#" + idInput)[0].value);

  $("#" + idInput)[0].value = v - 0.25;
}
