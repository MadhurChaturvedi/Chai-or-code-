const buttons = document.querySelectorAll(".button");
const bttn = document.getElementsByClassName("button");
// console.log(buttons);
const body = document.querySelector("body");
const text = document.getElementById("head");
const fontbody = document.getElementById("font-body");
buttons.forEach(function (btn) {
  //   console.log(btn);
  btn.addEventListener("click", function (e) {
    if (e.target.id === "#2c3e50") {
      body.style.backgroundColor = e.target.id;
      fontbody.style.color = "white";
      text.innerText = `Color Dark Mode Switcher`;
      bttn.style.border = "solid #FFFF";
    } else if (e.target.id === "#3498db") {
      body.style.backgroundColor = e.target.id;
      fontbody.style.color = "white";
      text.innerText = `Color White Mode Switcher`;
      bttn.style.border = "solid #FFFF";
    } else if (e.target.id === "#7071E8") {
      body.style.backgroundColor = e.target.id;
      fontbody.style.color = "#FFFF";
      text.innerText = `Color Blue Mode Switcher`;
      bttn.style.border = "solid #FFFF";
    } else if (e.target.id === "#f1c40f") {
      body.style.backgroundColor = e.target.id;
      fontbody.style.color = "#e84118";
      text.innerText = `Color yellow Mode Switcher`;
      bttn.style.border = "solid #FFFF";
    }
  });
});
