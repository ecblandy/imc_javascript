document.addEventListener("DOMContentLoaded",()=>{document.getElementById("buttonCalcular").addEventListener("click",()=>{var e=document.getElementById("altura").value,t=document.getElementById("peso").value,e=Number(e);let a=Number(t)/(e*e);a=a.toFixed(1),document.querySelectorAll(".is--active").forEach(e=>{e.classList.remove("is--active")}),a<=16.9?document.querySelectorAll(".muitoAbaixoPeso").forEach(e=>{e.classList.add("is--active")}):a<=18.4?document.querySelectorAll(".abaixoPeso").forEach(e=>{e.classList.add("is--active")}):a<=24.9?document.querySelectorAll(".pesoNormal").forEach(e=>{e.classList.add("is--active")}):a<=29.9?document.querySelectorAll(".acimaPeso").forEach(e=>{e.classList.add("is--active")}):a<=34.9?document.querySelectorAll(".obesidadeGrau1").forEach(e=>{e.classList.add("is--active")}):a<=40?document.querySelectorAll(".obesidadeGrau2").forEach(e=>{e.classList.add("is--active")}):40<a&&document.querySelectorAll(".obesidadeGrau3").forEach(e=>{e.classList.add("is--active")}),document.getElementById("respostaIMC").value=a,document.getElementById("altura").value="",document.getElementById("peso").value=""})});