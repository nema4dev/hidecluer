const encriptMessage = (text) => {
  let encript_rules =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  var encripted = text.toLowerCase();

  for(let i = 0; i < encript_rules.length; i++){
    if(encripted.includes(encript_rules[i][0])){
        encripted = encripted.replaceAll(encript_rules[i][0], encript_rules[i][1])
    }
  }
  console.log(encripted);
  return encripted;
};

const desencriptMessage = (text) => {
  let desencript_rules =[["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  var desencripted = text.toLowerCase();

  for(let i = 0; i < desencript_rules.length; i++){
    if(desencripted.includes(desencript_rules[i][0])){
      desencripted = desencripted.replaceAll(desencript_rules[i][0], desencript_rules[i][1])
    }
  }
  return desencripted;
};

function hideEmpty(){
  document.getElementById("empty_message").style.display = "flex";
  document.getElementById("text_empty").style.display = "flex";
  document.getElementById("text_copied").style.display = "none";
  document.getElementById("fill_message").style.display = "none";
}

function showMessage(message){
  document.getElementById("empty_message").style.display = "none";
  document.getElementById("fill_message").style.display = "flex";
  document.getElementById("text_result").innerHTML = message;
}

function encript() {
  var text = document.getElementById("text_input");
  var encripted = encriptMessage(text.value);

  if (!text.value) {
    hideEmpty();
  } else {
    showMessage(encripted);
  }
}

function desencript() {
  var text = document.getElementById("text_input");
  var desencripted = desencriptMessage(text.value);

  if (!text.value) {
    hideEmpty();
  } else {
    showMessage(desencripted);
  }
}

function copy() {
  var text = document.getElementById("text_result").innerHTML;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  document.getElementById("empty_message").style.display = "flex";
  document.getElementById("fill_message").style.display = "none";
  document.getElementById("text_empty").style.display = "none";
  document.getElementById("text_subtitle").style.display = "none";
  document.getElementById("text_copied").style.display = "flex";
}
