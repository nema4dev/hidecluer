const encript_rules = (text) => {
  var encripted = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      encripted += "ai";
    } else if (text[i] == "e") {
      encripted += "enter";
    } else if (text[i] == "i") {
      encripted += "imes";
    } else if (text[i] == "o") {
      encripted += "ober";
    } else if (text[i] == "u") {
      encripted += "ufat";
    } else {
      encripted += text[i];
    }
  }
  return encripted;
};

const desencript_rules = (text) => {
  var desencripted = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      desencripted += "a";
      i = i+1;
    } else if (text[i] == "e") {
      desencripted += "e";
      i = i+4;
    } else if (text[i] == "i") {
      desencripted += "i";
      i = i+3;
    } else if (text[i] == "o") {
      desencripted += "o";
      i = i+3;
    } else if (text[i] == "u") {
      desencripted += "u";
      i = i+3;
    } else {
      desencripted += text[i];
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
  var encripted = encript_rules(text.value.toLowerCase());

  if (!text.value) {
    hideEmpty();
  } else {
    showMessage(encripted);
  }
}

function desencript() {
  var text = document.getElementById("text_input");
  var desencripted = desencript_rules(text.value.toLowerCase());

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
