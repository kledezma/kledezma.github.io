

// var Identificador = prompt("Ingrese un valor numerico", 1);
// var Obj={id:"", name:"", codes:[]};

  var txt = document.getElementById("txtPrueba");
  console.log(txt);
  var btn = document.getElementById("btnPrueba");
  var htxt= document.getElementById("htxt");
  var ptxt= document.getElementById("ptxt");

  btn.addEventListener("click",  function(){
    
fetch('https://www.habbo.es/api/public/users?name='+txt.value)
    .then(res=> {

      if (res.ok){
        return res.json()
      } else{
        console.log("Error")
        document.getElementById("imgPrueba").src = "img/Placeholder.png";
        htxt.innerHTML = "MissingHabbo.";
        ptxt.innerHTML = "Este Habbo no existe.";

      }
     })
    .then(
      data =>{ 
        document.getElementById("imgPrueba").src = "https://www.habbo.es/habbo-imaging/avatarimage?figure="+data.figureString;
        htxt.innerHTML = data.name;
        ptxt.innerHTML = data.motto;
      }
    )

  });

