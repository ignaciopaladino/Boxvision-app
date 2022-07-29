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

const materialOro = new THREE.MeshStandardMaterial({
  envMap: textureEquirec,
  opacity: 1,
  color: 0xd87e1e,
  emissive: 0x282828,
  transparent: false,
  metalness: 0.8,
  roughness: 0.12
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

models["Model7"] = {
  name: "MODELO 7",
  label: "1002",
  fbx: "./models/Modelo_7.fbx",
  positionx: 0,
  positiony: 0.05,
  positionz: 0.15,
  scalex: 0.038,
  scaley: 0.038,
  scalez: 0.038,
  precio: 0,
  colores: [
    {
      nombre: "Oro",
      img: "../img/oro.png",
      materialColor1: materialOro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    }
  ]
};

models["Model8"] = {
  name: "MODELO 8",
  label: "Metal 1009 Gun",
  fbx: "./models/Modelo_8.fbx",
  positionx: 0,
  positiony: 0.05,
  positionz: 0.15,
  scalex: 0.038,
  scaley: 0.038,
  scalez: 0.038,
  precio: 0,
  colores: [
    {
      nombre: "Negro",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    }
  ]
};

models["Model9"] = {
  name: "MODELO 9",
  fbx: "./models/Modelo_9.fbx",
  label: "Metal 1012",
  positionx: 0,
  positiony: 0.05,
  positionz: 0.15,
  scalex: 0.038,
  scaley: 0.038,
  scalez: 0.038,
  precio: 0,
  colores: [
    {
      nombre: "Negro",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    }
  ]
};

models["Model10"] = {
  name: "MODELO 10",
  label: "H 100",
  fbx: "./models/Modelo_10.fbx",
  positionx: 0,
  positiony: 0.18,
  positionz: 0.15,
  scalex: 0.04,
  scaley: 0.04,
  scalez: 0.04,
  precio: 0,
  colores: [
    {
      nombre: "Negro",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
    }
  ]
};

models["Model11"] = {
  name: "MODELO 11",
  label: "H 129",
  fbx: "./models/Modelo_11.fbx",
  positionx: 0,
  positiony: 0.05,
  positionz: 0.15,
  scalex: 0.042,
  scaley: 0.042,
  scalez: 0.042,
  precio: 0,
  colores: [
    {
      nombre: "Negro",
      img: "../img/negro.png",
      materialColor1: materialNegro,
      materialColor2: materialNegro,
      materialColorPatilla: materialNegro
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
  precioFotocromatico: 0,
  recetaImage: "-"
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
  /*threeStuffs = THREE.JeelizHelper.init(spec, detect_callback);

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
  );*/
  //$("#modalBienvenida").modal("open");
} // end init_threeScene()

function getMarcos() {
  return fetch("https://boxvision.com.ar/boxvision/tablets/products/marcos")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => getMarcosResponse(json));
}

setTimeout(function(){ getMarcos(); },1000);

function getMarcosResponse(json) {
  //console.log(json);
  json.data.forEach(assignMarcoSpec);
}

function assignMarcoSpec(value, index, array) {
  //console.log(value)
  //console.log(value)
  var imgLente = (value.imgUrl !== "") ? value.imgUrl : '../img/news/lentes.png';
  var linkInsta = (value.instagramLink !== "") ? value.instagramLink : 'https://www.instagram.com/';
  var descLente = (value.descripcion !== "") ? value.descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi asperiores corporis laboriosam voluptatum! Explicabo corporis asperiores eum neque, cupiditate perspiciatis!';
  var lista = value.precio==0 ? "#listaLentes" : "#listaLentes2";
  var color = (value.color !== "") ? value.color : '-';
  var price = (value.precio !== 0) ? '$'+value.precio : '';
  $(lista).append('<div id="lente-'+value.id+'" class="item-lente" data-id="'+value.id+'" data-label="'+value.label+'" data-precio="'+value.precio+'" data-img="'+imgLente+'"><div class="imgLente"><img src="'+imgLente+'" class="imgList"/></div><b>'+value.label+'</b><div class="colList">'+color+'</div><b>'+price+'</b><br><div class="lineSep"></div><a onclick="loadTest(\''+linkInsta+'\')" class="linkIsnta">Probar</a><a onclick="loadLente('+value.id+')" target="_blank" class="linkConti">Continuar</a><div class="description">'+descLente+'</div></div>');
  /*orden.modelo = value.label;
  //orden.nombre = value.label;
  orden.precioMarco = value.precio;
  orden.idMarco = value.id; */
  orden.color = 'negro'; // falta en el front la parte de los colores
  /*models[value.nombre].id = value.id;
  models[value.nombre].precio = value.precio;
  models[value.nombre].label = value.label;*/
}

function loadLente(id) {
  console.log(id)
  $(".description").hide();
  /*$(".item-lente").removeClass('active');
  $("#lente-"+id).addClass('active');
  $("#lente-"+id+" .description").show();*/
   orden.modelo = $("#lente-"+id).data('label'); 
   orden.nombre = $("#lente-"+id).data('label'); 
   orden.precioMarco = $("#lente-"+id).data('precio'); 
   orden.idMarco = $("#lente-"+id).data('id'); 
   orden.imageMarco = $("#lente-"+id).data('img');
   nextStep();
   //$("#btnSegSe").attr('disabled',false);
   //window.location.href = "#btnSegSe";
};

let urlProbar;
function loadTest(url){
  urlProbar = url;
  console.log(urlProbar)
  $("#modalProbarLente").modal("open");  
}

function selectedList(num) {
  if(num==1){
    if($("#listaLentes").hasClass('active')){
      $(".titleMarcos2").removeClass('active');
      $(".titleMarcos1").removeClass('active');      
      $("#listaLentes2").removeClass('active');
      $("#listaLentes").removeClass('active');
      $("#icDwo").removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $("#icDwo2").removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }else{
      $(".titleMarcos1").addClass('active'); $(".titleMarcos2").removeClass('active');
      $("#listaLentes2").removeClass('active');
      $("#listaLentes").addClass('active');
      $("#icDwo").removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $("#icDwo2").removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
  }else{
    if($("#listaLentes2").hasClass('active')){
      $(".titleMarcos2").removeClass('active');
      $(".titleMarcos1").removeClass('active');
      $("#listaLentes2").removeClass('active');
      $("#listaLentes").removeClass('active');
      $("#icDwo").removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $("#icDwo2").removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }else{   
      $(".titleMarcos2").addClass('active'); $(".titleMarcos1").removeClass('active');
      $("#listaLentes").removeClass('active');
      $("#listaLentes2").addClass('active');
      $("#icDwo").removeClass('fa-chevron-up').addClass('fa-chevron-down');  
      $("#icDwo2").removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }  
  }
}
setTimeout(() => {
  //console.log('asd');
  selectedList(1);
},2000);

function nextStep(){
    if(orden.modelo != ""){          
      $("#modalFormGraduacion").modal("open");
      publis();
    }
}


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
  $("#headerModelo").hide();
  JEEFACEFILTERAPI.init({
    followZRot: true,
    canvasId: "jeeFaceFilterCanvas",
    NNCpath: "./dist/NNCwideAngles.json", // root of NNC.json file
    videoSettings: videoSettings,
    maxFacesDetected: 1,
    antialias: true,
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
      console.log("SPECS" + spec.antialias);
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
    orden.antireflejo = "";
    orden.precioAntireflejo = 0;
    orden.antireflejoLabel = "";
    getFotocromatico(orden.idTipoLente);
  }
}

function setFotocromatico(fotocromatico) {
  $("#modalFotocromatico").modal("close");
  if (fotocromatico === true) {
    $("#modalFotocromaticoSpecs").modal("open");
  } else {
    orden.fotocromatico = "";
    orden.precioFotocromatico = 0;
    orden.fotocromaticoLabel = "";
    $("#modalFormData").modal("open");
    publis();
  }
}

function antiReflejoSpecSelected() {
  /*var alerting;
  $("#formAntireflejos input[type=radio]").each(function( index ) {
    alerting = ($( this ).prop('checked') == true) ? 'ok' : 'error';
  });
  if(alerting=='error'){ alert('¡Por favor selecciona un antireflex!'); }*/
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
  publis();
}

function tipoCristalSelected(num = 0) {
  $("#modalFormGraduacionFotoReceta").modal("close");
  var tipoCristal = getRadioValue("formTipoCristal");
  if (tipoCristal > 0) {
    orden.idTipoLente = tipoCristal;
    var tipoCristalLabel = getRadioLabel("formTipoCristal");
    orden.tipoLenteLabel = tipoCristalLabel.substring(
      0,
      tipoCristalLabel.indexOf("$") - 2
    );
    orden.precioTipoLente = tipoCristalLabel.substring(
      tipoCristalLabel.indexOf("$") + 1
    );
    if(num==0){
      $("#modalTipoCristal").modal("close");
      //getProducto(orden.idTipoLente, orden. orden.precio);
      $("#modalFormGraduacionFotoReceta").modal('open');
      //getAntireflejos(tipoCristal);
    }else{
      //alert('bann');
      $("#modalTipoCristal").modal("close");
      getAntireflejos(orden.idTipoLente);
    }
  }else{
    alert('¡Seleccione un tipo de cristal!')
  }
}


function tipoCristalSelected22() {
  //$("#modalFormGraduacionFotoReceta").modal("close");
  var tipoCristal = 1;
  if (tipoCristal > 0) {
    orden.idTipoLente = tipoCristal;
    var tipoCristalLabel = getRadioLabel("formTipoCristal");
    orden.tipoLenteLabel = tipoCristalLabel.substring(
      0,
      tipoCristalLabel.indexOf("$") - 2
    );
    orden.precioTipoLente = tipoCristalLabel.substring(
      tipoCristalLabel.indexOf("$") + 1
    );
  }
}

function formGraduacionDataSubmitRecetaFoto(){
  orden.recetaImage = "-";
  $("#modalFormGraduacionFotoReceta").modal('close');
  getAntireflejos(orden.idTipoLente);
  //getTiposCristal();
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
    "https://boxvision.com.ar/boxvision/tablets/products/fotocromatico?idTipoLente=" +
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
    publis();
  }
}

function assignInputFotocromatico(value, index, array) {
  assignInput("formFotocromatico", value);
}

function getAntireflejos(idTipoLente) {
  return fetch(
    "https://boxvision.com.ar/boxvision/tablets/products/antireflejo?idTipoLente=" +
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
    orden
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
  orden.base_derecho = 0; //$("#base_derecho")[0].value;
  orden.adicion_derecho = $("#adicion_derecho")[0].value;

  orden.eje_izquierdo = $("#eje_izquierdo")[0].value;
  orden.prisma_izquierdo = $("#prisma_izquierdo")[0].value;
  orden.base_izquierdo = 0; //$("#base_izquierdo")[0].value;
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
      Math.abs(orden.esfera_derecho) > 25 ||
      Math.abs(orden.cilindro_derecho) > 25 ||
      Math.abs(orden.esfera_izquierdo) > 25 ||
      Math.abs(orden.cilindro_izquierdo) > 25
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
    //$("#modalFormGraduacionFotoReceta").modal('open');
    getTiposCristal();
  }
}

function getTiposCristal() {
  return fetch("https://boxvision.com.ar/boxvision/tablets/products/tipolentes")
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
  publis();
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
  $("#modalFormGraduacionFotoReceta").modal("close");
  $("#modalFormGraduacion").modal("close");
}

function backTipoCristal2() {  
  $("#modalFormGraduacionFotoReceta").modal("close");
  $("#modalTipoCristal").modal("open");
}

function backTipoCristal() {  
  $(".camera-cont").hide();
  $("#modalTipoCristal").modal("close");
  $("#modalFormGraduacion").modal("open");
  //$("#modalFormGraduacionFotoReceta").modal("open");
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
  publis();
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
    //$("#base_derecho_resumen")[0].value = 0;//orden.base_derecho;
    $("#adicion_derecho_resumen")[0].value = orden.adicion_derecho;

    $("#eje_izquierdo_resumen")[0].value = orden.eje_izquierdo;
    $("#prisma_izquierdo_resumen")[0].value = orden.prisma_izquierdo;
    //$("#base_izquierdo_resumen")[0].value = 0;//orden.base_izquierdo;
    $("#adicion_izquierdo_resumen")[0].value = orden.adicion_izquierdo;

    $("#modalResumenGraduacion").modal("open");
  }
}

function backGraduacionResumen() {
  $("#modalResumenGraduacion").modal("close");
  $("#modalFormEnvio").modal("open");
}

function formGraduacionDataSubmit2() {
  orden.esfera_derecho = $("#esfera_derecho_resumen")[0].value;
  orden.cilindro_derecho = $("#cilindro_derecho_resumen")[0].value;
  orden.esfera_izquierdo = $("#esfera_izquierdo_resumen")[0].value;
  orden.cilindro_izquierdo = $("#cilindro_izquierdo_resumen")[0].value;
  orden.eje_derecho = $("#eje_derecho_resumen")[0].value;
  orden.prisma_derecho = $("#prisma_derecho_resumen")[0].value;
  orden.base_derecho = 0; //$("#base_derecho")[0].value;
  orden.adicion_derecho = $("#adicion_derecho_resumen")[0].value;

  orden.eje_izquierdo = $("#eje_izquierdo_resumen")[0].value;
  orden.prisma_izquierdo = $("#prisma_izquierdo_resumen")[0].value;
  orden.base_izquierdo = 0; //$("#base_izquierdo")[0].value;
  orden.adicion_izquierdo = $("#adicion_izquierdo_resumen")[0].value;

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
      Math.abs(orden.esfera_derecho) > 25 ||
      Math.abs(orden.cilindro_derecho) > 25 ||
      Math.abs(orden.esfera_izquierdo) > 25 ||
      Math.abs(orden.cilindro_izquierdo) > 25
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
    //$("#modalFormGraduacion").modal("close");
    //getTiposCristal();
    return true;
  }else{
    //alert('¡Graduacion invalida!');
    return false;
  }
}

function formGraduacionResumenSubmit() {
  if ($("#formGraduacionCheck")[0].checked) {
    $("#modalResumenGraduacion").modal("close");

    //let srcImgResumen = '../img/'+currentGlasses.name.toLocaleLowerCase().replace(' ','')+'.png';
    //$("#image_resumen").attr('src',srcImgResumen);

    /*$("#marco_resumen")[0].value = orden.modelo;
    $("#color_resumen")[0].value = orden.color;*/

    $("#marco_resumen").html('Modelo: '+orden.modelo);
    $("#color_resumen").html('Color: '+orden.color);
    $("#precio_marco_resumen").html("<b>$ "+orden.precioMarco+"</b>");

    $("#image_resumen").attr('src', orden.imageMarco);    

    $("#cristal_resumen").html(orden.tipoLenteLabel);
    $("#precio_cristal_resumen").html("<b>$ "+orden.precioTipoLente+"</b>");

    var total =
      parseFloat(orden.precioMarco) + parseFloat(orden.precioTipoLente);
    if (orden.antireflejo != "") {
      $("#antireflejo_resumen").html(orden.antireflejoLabel);
      $("#precio_antireflejo_resumen").html("<b>$ "+orden.precioAntireflejo+"</b>");
      total += parseFloat(orden.precioAntireflejo);
    } else {
      $("#antireflejo_resumen").html("-");
      $("#precio_antireflejo_resumen").html("<b>$ 0</b>");
    }
    if (orden.fotocromaticoLabel) {
      $("#fotocromatico_resumen").html(orden.fotocromaticoLabel);
      $("#precio_fotocromatico_resumen").html("<b>$ "+orden.precioFotocromatico+"</b>");
      total += parseFloat(orden.precioFotocromatico);
    } else {
      $("#fotocromatico_resumen").html("-");
      $("#precio_fotocromatico_resumen").html("<b>$ 0</b>");
    }

    if(orden.recetaImage != "-"){
      $("#imgRec img").attr('src',orden.recetaImage);
      $(".rowFotoReceta").show();
    }else{

    }

    axios.get("https://boxvision.com.ar/boxvision/tablets/products/antireflejo?idTipoLente=" + orden.idTipoLente ,{ idTipoLente: orden.idTipoLente })
    .then(response => {
        if(response.data.data.length == 0){
            $(".rowAntirefljo").hide();
        }else{
            $(".rowAntirefljo").show();
        }
    });
    axios.get("https://boxvision.com.ar/boxvision/tablets/products/fotocromatico?idTipoLente=" + orden.idTipoLente ,{ idTipoLente: orden.idTipoLente })
    .then(response => {    
      if(response.data.data.length == 0){
          $(".rowFotocromatico").hide();
      }else{
          $(".rowFotocromatico").show();
      }   
    });  


    /*$("#precio_total_resumen")[0].value = "$ " + total;*/
    $("#precio_total_resumen").html("Total: <b>$ "+total+"</b>");

    orden.total = total;
    $("#modalResumenPedido").modal("open");
  }else{
    alert('¡Confirme que la información es correcta!')
  }
}

function delPhoto(){
  orden.recetaImage = "-";
  $(".photo.imgHeadRight").hide();
  $(".rowFotoReceta").hide();
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
  }else{
    alert('¡Confirme que la información es correcta!')
  }
}

function backFormDataResumen() {
  $("#modalFormDataResumen").modal("close");
  $("#modalResumenPedido").modal("open");
}

function formDataResumenSubmit() {
  if ($("#formResumenDataCheck")[0].checked) {
    console.log(orden);
    $("#modalFormDataResumen").modal("close");
    return axios
      .post("https://boxvision.com.ar/boxvision/tablets/usuario/", {
        values: orden
      })
      .then(json => usuarioSaveResponse(json));
  }else{
    alert('¡Confirme que la información es correcta!')
  }
}

function usuarioSaveResponse(json) {
  orden.usuarioId = json.data.data.insertId;

  return axios
    .post("https://boxvision.com.ar/boxvision/tablets/graduacion/", {
      values: orden
    })
    .then(json => graduacionSaveResponse(json));
}

function graduacionSaveResponse(json) {
  orden.idRecetaGraduacion = json.data.data.insertId;
  return axios
    .post("https://boxvision.com.ar/boxvision/tablets/pedido/", {
      values: orden
    })
    .then(json => ordenSaveResponse(json));
}

function ordenSaveResponse(json) {
  orden.orderId = json.data.data.insertId;
  //console.log('https://boxvision.com.ar/tablets/pagos/?impo='+orden.total +'&idOpe='+orden.orderId);
  //window.open('https://boxvision.com.ar/tablets/pagos/?impo='+orden.total +'&idOpe='+orden.orderId, '_self');
  window.location.href = 'https://boxvision.com.ar/tablets/pagos/?impo='+orden.total +'&idOpe='+orden.orderId;  
  /* $("#idPedidoConfirmacion")[0].value = orden.orderId;
  $("#modalConfirmation").modal("open"); */
}

function paymentChecker(){
  const queryString = window.location.search;
  // ?resope=1&idope=893
  const urlParams = new URLSearchParams(queryString);
  let resultado = urlParams.get('resope'); let operacion = urlParams.get('idope'); let total = urlParams.get('total');
  let payment_id = urlParams.get('payment_id'); let payment_type = urlParams.get('payment_type'); 
  let merchant_order_id = urlParams.get('merchant_order_id'); let preference_id = urlParams.get('preference_id');
  let ipaddress = ""; let sede = request_ipwhois(ipaddress); sede = sede.region;
  // payment_id - status - payment_type - merchant_order_id - preference_id
  //Podria usar el status para validar y guardaria los otros 3 en la BD por las dudas
  let pagoMP = {idPedido: operacion, parcial: total, total: 1, payment_id: payment_id, payment_type: payment_type, merchant_order_id: merchant_order_id, preference_id: preference_id, sede: sede};  
  if(resultado==1 && urlParams.get('status') == 'approved'){
    console.log(pagoMP);
    // Falta aca guardar algun  id de la ordan que lo envia mercado pago
    // http://localhost:3000/facetracking/tablets/facetracking?resope=1&idope=895&total=9300&collection_id=1246815753&collection_status=approved&payment_id=1246815753&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=4341990826&preference_id=186796454-a35e3bba-be94-49c7-8d36-6d2bfdcaf668&site_id=MLA&processing_mode=aggregator&merchant_account_id=null
    return axios
    .post("https://boxvision.com.ar/boxvision/tablets/pedido/pagoMP/", {
      values: pagoMP
    })
    .then(json => paymentSaveResponse(json));
  }else{ 
    // Pago erroneo o no se completo!
    if(resultado==2 || resultado ==3){
      alert('¡El pago no se proceso correctamente o no se completo!')
      console.log('nothing');
    }
  }
}
function paymentSaveResponse(json){
  console.log(json)
  $("#idPedidoConfirmacion").html(json.data.idPed);
  $("#modalConfirmation").modal("open");
}
document.addEventListener('DOMContentLoaded', paymentChecker, false);

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
  window.location.search = '';
  //window.location.reload(false);
}

function getProducto(idProducto, value) {
  return fetch("https://boxvision.com.ar/boxvision/tablets/products/tipolentes")
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

function reiniciar() {
  $("#modalReiniciar").modal("open");
}

function backReiniciar() {
  $("#modalReiniciar").modal("close");
}

function confirmarReiniciar() {
  window.location.reload(false);
}

function backRProcar() {
  $("#modalProbarLente").modal("close");
}

function confirmarTestLente() {
  //window.location.reload(false);
  //window.open(urlProbar,'_blank');
  window.location.href = urlProbar;
}

setTimeout(() => {
  $("#modalResumenGraduacion input").removeAttr('disabled');
  //$("#modalResumenPedido input").removeAttr('disabled');
  //$("#modalFormDataResumen input").removeAttr('disabled');

  $("#formGraduacionCheck").on('click', (e) => {
    console.log($("#formGraduacionCheck").prop('checked'));
    if($("#formGraduacionCheck").prop('checked')==true){
      if(formGraduacionDataSubmit2()){
        $("#modalResumenGraduacion .row input").attr('disabled',true);
        $("#modalResumenGraduacion .row button").attr('disabled',true);
      }else{
        $("#formGraduacionCheck").prop('checked',false);
        $("#modalResumenGraduacion .row input").removeAttr('disabled');
        $("#modalResumenGraduacion .row button").removeAttr('disabled');
      }      
    }else{
      $("#modalResumenGraduacion .row button").removeAttr('disabled');
      $("#modalResumenGraduacion .row input").removeAttr('disabled');
    }
  });

  /*$("#formResumenCheck").on('click', (e) => {
    console.log(e.target.checked);
    if(e.target.checked){
      $("#modalResumenPedido input").removeAttr('disabled');
    }else{
      $("#modalResumenPedido input").attr('disabled',true);
    }
    $("#formResumenCheck").removeAttr('disabled');
  });*/

  /*1 formGraduacionCheck  
  2 formResumenCheck
  3 formResumenDataCheck  */
  startPhotoReceta();

},1000);

async function publis(){
  var modAct = $(".modal.open").attr('id');
  console.log(modAct)  
  if(modAct=='modalFormGraduacion'){      
      $(".bannerFooter").attr('onClick', 'formGraduacionDataSubmit()');
      $(".bannerFooter img").attr('src', '../img/news/f-prom.png');
  }else{  
    if(modAct=='modalTipoCristal'){
      $(".bannerFooter").attr('onClick', 'tipoCristalSelected(1)');
      //$(".bannerFooter").attr('onClick', 'formGraduacionDataSubmitRecetaFoto()');
      $(".bannerFooter img").attr('src', '../img/news/f-prom.png');    
    }else{
      if(modAct=='modalFormData'){
        if(orden.antireflejo != "" && orden.fotocromatico == ""){
          $(".bannerFooter").attr('onClick', 'getFotocromatico(\''+orden.idTipoLente+'\')');
          $(".bannerFooter img").attr('src', '../img/news/f-prom2.png'); 
        }   
        if((orden.antireflejo == "" && orden.fotocromatico != "") || (orden.antireflejo == "" && orden.fotocromatico == "")){
          //$("#modalFormData").modal("close");
          //getProducto(orden.idTipoLente, orden. orden.precio);           
          $(".bannerFooter").attr('onClick', 'getAntireflejos(\''+orden.idTipoLente+'\')');
          $(".bannerFooter img").attr('src', '../img/news/f-prom.png'); 
        }       
      }
    } 
  }  
  
  if(orden.antireflejo != "" && orden.fotocromatico != ""){
      $(".bannerFooter").hide();
      $(".modal-content").addClass('no-banner');
  }else{
    $(".bannerFooter").show();
    $(".modal-content").removeClass('no-banner');    
  }

  if(orden.idTipoLente != 0){
    axios.get("https://boxvision.com.ar/boxvision/tablets/products/antireflejo?idTipoLente=" + orden.idTipoLente ,{ idTipoLente: orden.idTipoLente })
    .then(response => {
      if(response.data.data.length == 0){
        $(".bannerFooter").hide();
        $(".modal-content").addClass('no-banner');
      }
    });
    axios.get("https://boxvision.com.ar/boxvision/tablets/products/fotocromatico?idTipoLente=" + orden.idTipoLente ,{ idTipoLente: orden.idTipoLente })
    .then(response => {
    
      if(response.data.data.length == 0){
        $(".bannerFooter").hide();
        $(".modal-content").addClass('no-banner');
      }
    });  
  }
  
}

let video = document.querySelector("#video");
function startPhotoReceta () {
  let camera_button = document.querySelector("#start-camera");
  video = document.querySelector("#video");
  let click_button = document.querySelector("#click-photo");
  let canvas2 = document.querySelector("#canvas");
  var camera;
  if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){ camera = {video: {facingMode: 'environment'}}; }else{ camera = {video: {facingMode: 'user'}}; }
  

  camera_button.addEventListener('click', async function() {
      $("#vid-cont").html('<video id="video" width="" height="" autoplay></video>');
      video = document.querySelector("#video");
      //let stream = await navigator.mediaDevices.getUserMedia({ video: {facingMode: 'environment'}, audio: false });
      let stream = await navigator.mediaDevices.getUserMedia({ video: {facingMode: 'user'}, audio: false });
      video.srcObject = stream;
      $(".camera-cont").show();
      $("button#contin-photo").hide();
      $("button#reinter-photo").hide();
  });

  click_button.addEventListener('click', function() {
      /*console.log(canvas.width+" "+canvas.height+" "+video.width+" "+video.height)
      var f = video.videoHeight / video.videoWidth;
      var newHeight = canvas.width * f;
      console.log(video.videoWidth, video.videoHeight, canvas.width, newHeight);
      //canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, newHeight);
      canvas.getContext('2d').drawImage(video, 0, 0, 640, 480, 0, 0, 640, 480);*/
      //canvas.getContext('2d').drawImage(video, 0, 0, window.screen.width, window.screen.height);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      //ctx.translate(canvas.width, 0);
      //ctx.scale(0, 1);
      //ctx.scale(2, 2);
      ctx.drawImage(video, 0, 0);
      canvas.toBlob(async (blob) => {
        if (blob === null) {
          alert("¡Ocurrio un error al generar la foto!");
          return;
        }
        console.log(blob);
        // const imageUrl = window.URL.createObjectURL(blob);
        //document.getElementById('imageTAKEN').src = imageUrl;
        document.getElementById('imageTAKEN').src = await convertBlobToBase64(blob);
      });
      
      //let image_data_url = canvas.toDataURL('image/jpeg');
      /*document.getElementById('imageTAKEN').src = image_data_url;
      document.getElementById('imageTAKEN').width = '100%';
      document.getElementById('imageTAKEN').height = 'auto';*/
      // data url of the image
      //console.log(image_data_url);
      $("#video").hide();
      $("button#click-photo").hide();
      $("button#contin-photo").show();
      $("button#reinter-photo").show();      
      //$("#canvas").show();
      $("#imageTAKEN").show();
  });
}

function reintentarPhoto() {   
    $("button#click-photo").show();
    $("button#contin-photo").hide();
    $("button#reinter-photo").hide();   
    $("#canvas").hide();
    $("#video").show();
}

function continuarPhoto() { 
  $("button#click-photo").show();
  $("button#contin-photo").hide();
  $("button#reinter-photo").hide();    
  $("#video").show();
  $("#canvas").hide();
  // capaz falte destriur la camara
  // subir foto a server como en en el back y setear a los orden
  // la funcion aca...
  // ordern.linkReceta = URL 
  
  //let imageCanva =  document.getElementById('canvas').toDataURL('image/jpeg');
  let imageCanva = document.getElementById('imageTAKEN').src;

  //console.log(imageCanva);
  /*const canvas = document.getElementById('canvas');
  const file = dataURLtoBlob( canvas.toDataURL() );*/
  const fd = new FormData;
  fd.append('image_url', imageCanva);
  
  $.ajax({
      url: 'https://boxvision.com.ar/tablets/recetas2/',
      type: 'POST',
      data: fd,
      contentType: false,
      processData: false,
      success: function(response) {
         console.log(response[0].url)
         orden.recetaImage = response[0].url;
         $(".photo.imgHeadRight").show();
         $(".camera-cont").hide();
      }
  });   
  $("#video").remove();
  formGraduacionDataSubmitRecetaFoto();
}

const convertBlobToBase64 = async (blob) => { // blob data
  return await blobToBase64(blob);
}

const blobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

function dataURLtoBlob(dataURL) {
  let array, binary, i, len;
  binary = atob(dataURL.split(',')[1]);
  array = [];
  i = 0;
  len = binary.length;
  while (i < len) {
    array.push(binary.charCodeAt(i));
    i++;
  }
  return new Blob([new Uint8Array(array)], {
    type: 'image/png'
  });
};

function closeCamera(){
  $(".camera-cont").hide();
}

 window.screen.height
$(window).on("resize", function() {

  // lo que tenga que suceder
  
});

var open = true;
window.addEventListener("resize", (e) => {
  if(open){
    $(".modal .modal-footer").addClass('openKeyboad');
    open=false;
  }else{
    $(".modal .modal-footer").removeClass('openKeyboad');
    open=true;
  }
});

const loadLenteBienv = () => {
   console.log('asd');
    $(".bienvenida").hide();
    $(".homeList").fadeIn(300);
}

const editItem = num => {
  //console.log(num);
  switch(num){
    case 1: $("div#modalTipoCristal").modal('open'); break;
    case 2: $("div#modalAntiReflejo").modal('open'); break;
    case 3: $("div#modalFotocromatico").modal('open'); break;
  }
}
const delItem = num => {
  //console.log(num);
  switch(num){
    case 1: 
        tipoCristalSelected22(); orden.tipoLenteLabel = 'Orgánico Graduación Baja'; orden.precioTipoLente = 0;
        $("div#cristal_resumen").html('Orgánico Graduación Baja'); $("div#precio_cristal_resumen b").html('$ 0'); 
        $(".rowAntirefljo").show(); $(".rowFotocromatico").show(); break;
    case 2: orden.antireflejo = ""; orden.precioAntireflejo = 0; orden.antireflejoLabel = "";
        $("div#antireflejo_resumen").html('-'); $("div#precio_antireflejo_resumen b").html('$ 0'); break;
    case 3: orden.fotocromatico = "";orden.precioFotocromatico = 0; orden.fotocromaticoLabel = ""; 
        $("div#fotocromatico_resumen").html('-'); $("div#precio_fotocromatico_resumen b").html('$ 0'); break;
  }
  actualizarPrecio();
}
const delMarco = () => {
    //reiniciar();
    if (window.confirm("¿Deseas cambiar el Armazón? En el caso de que asi sea debes reiniciar todo el proceso.")) {
        location.reload();
    }
}
const actualizarPrecio = () => {
    let total = parseInt(orden.precioMarco) + parseInt(orden.precioTipoLente) + parseInt(orden.precioAntireflejo) + parseInt(orden.precioFotocromatico);
    orden.total = total;
    $("div#precio_total_resumen b").html('$ '+orden.total);
}

const checkAntiFoto = (ope,idTipoLent) => {
    let url = ope === 1 
      ? "https://boxvision.com.ar/boxvision/tablets/products/antireflejo?idTipoLente=" + idTipoLent 
      :"https://boxvision.com.ar/boxvision/tablets/products/fotocromatico?idTipoLente=" + idTipoLent;   
      //console.log(url)   
      axios.get(url,{ idTipoLente: idTipoLent })
      .then(response => {
          console.log(response.data)
          return response.data == 0 ? false : true;
      })
}