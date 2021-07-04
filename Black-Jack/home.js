let k = document.createElement("h2");
k.innerHTML = "BlackJack";
document.querySelector(".heading").appendChild(k);
let cnt1 = 0;
let cnt2 = 0;
let flag=0;
let a = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
document.querySelector(".hit").addEventListener("click", hit);
document.querySelector(".deal").addEventListener("click", deal);
document.querySelector(".stand").addEventListener("click", stand);
function hit() {
  let j = Math.floor(Math.random() * 13);
  if (j >= 9) {
    cnt1 += 10;
  } else {
    cnt1 += j + 2;
  }
  if (cnt1 > 21) {
    document.querySelector(".s1").textContent = "You Bust";
    document.querySelector(".s1").style.color = "red";
  } else {
    let k = document.createElement("div");
    k.innerHTML = `<img src="${a[j]}.png" style="height="75" width="75"">`;
    document.querySelector(".s1").textContent = "Your:" + cnt1;
    document.querySelector(".s1").style.color = "white";
    document.querySelector(".you").appendChild(k);
  }
}
function deal() {
  cnt1 = 0;
  cnt2 = 0;
  flag=0;
  document.querySelector(".s1").textContent = "Your:" + cnt1;
  document.querySelector(".s1").style.color = "white";
  document.querySelector(".s2").textContent = "Bot:" + cnt2;
  document.querySelector(".s2").style.color = "white";
  let images = document.querySelector(".you").querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    images[i].remove();
  }
  let images1 = document.querySelector(".bot").querySelectorAll("img");
  for (let i = 0; i < images1.length; i++) {
    images1[i].remove();
  }
}
function stand() {
  while (flag==0) {
    let j = Math.floor(Math.random() * 13);
    if(cnt2+j>21){
        break;
    }
    if (j >= 9) {
      cnt2 += 10;
    } else {
      cnt2 += j + 2;
    }
    let k = document.createElement("div");
    k.innerHTML = `<img src="${a[j]}.png" style="height="75" width="75"">`;
    document.querySelector(".s2").textContent = "Bot:" + cnt2;
    document.querySelector(".s2").style.color = "white";
    document.querySelector(".bot").appendChild(k);
  }
  flag=1;
  if(cnt2>21){
    document.querySelector(".s2").textContent = "Bot:Bust";
    document.querySelector(".s2").style.color = "red";
  }
  if((cnt1>cnt2&&cnt1<=21)||(cnt2>21)){
    document.querySelector(".s1").textContent = "You Won";
    document.querySelector(".s1").style.color = "yellow"; 
  }
  else if(cnt1==cnt2){
    document.querySelector(".s1").textContent = "Draw";
    document.querySelector(".s1").style.color = "aqua";
  }
  else {
    document.querySelector(".s1").textContent = "You loose";
    document.querySelector(".s1").style.color = "red";
  }
}