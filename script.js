import { peopleData } from "./data.js";
// import {nextpage }from "./player.js"
const container = document.querySelector(".container");
const playercontainer = document.querySelector(".playerprofile");
const cardContainer = document.createElement("div");
const input = document.createElement("input");
input.placeholder = "Search Here";
const heaader = document.createElement("div");
const headergen = () => {
  heaader.classList.add("header");
  const h1 = document.createElement("h1");
  h1.innerText = "The Faces Behind the Jerseys";
  input.classList.add("input");
  container.appendChild(h1);
  heaader.appendChild(input);
  container.appendChild(heaader);
};
const cardsgen = () => {
  cardContainer.classList.add("cardcontainer");
  peopleData.forEach((e) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const insidecard = document.createElement("div");
    const image = document.createElement("img");
    image.src = e.image;
    card.appendChild(image);
    insidecard.classList.add("insidecard");
    const name = document.createElement("h3");
    name.innerText = e.name;
    const age = document.createElement("li");
    age.innerText = "Age: " + e.age;
    const phoneNo = document.createElement("li");
    phoneNo.innerText = e.phoneNo;
    const email = document.createElement("li");
    email.innerText = e.email;
    const jerseyNumber = document.createElement("li");
    jerseyNumber.innerText = e.jerseyNumber;
    const cnicNumber = document.createElement("li");
    cnicNumber.innerText = "CNIC: " + e.cnic;
    const position = document.createElement("li");
    position.innerText = "Favourite Position: " + e.position;
    const rating = document.createElement("li");
    rating.innerText = "Rating out of 10: " + e.rating;
    const crad=()=>{
      container.style.display = "none";
      const background = document.createElement("div");
      background.classList.add("background");
      const playerprofile = document.createElement("div");
      playerprofile.classList.add("playerprofile");
      const playerdetails = document.createElement("div");
      playerdetails.classList.add("playerdetails");
      
      const playername = document.createElement("h1");
      playername.innerText = e.name;
      const shirtno = document.createElement("h1");
      shirtno.innerText = e.jerseyNumber;
      const btndiv = document.createElement("div");
      btndiv.classList.add("btndiv");
      const btn3 = document.createElement("button");
      btn3.innerText = "Buy Shirt";
      btn3.classList.add("btn3");
      //div for pic and quote
      const playerpic = document.createElement("div");
      playerpic.classList.add("playerpic");
      const h3 = document.createElement("blockquote");
      h3.innerText = '"' + e.quote + '"';
      playerpic.appendChild(h3);
      const bgpic = document.createElement("img");
      bgpic.src = e.bgpic;
      const stats = document.createElement("div");
      stats.classList.add("stats");
      const ul = document.createElement("ul");
      for (let i = 0; i < 7; i++) {
        const li = document.createElement("li");
        if (i == 0) {
          li.innerText = "AGE";
        }
        if (i == 1) {
          li.innerText = e.age;
        }
        if (i == 2) {
          li.innerText = "APPEARANCES";
        }
        if (i == 3) {
          li.innerText = e.appearances;
        }
        if (i == 4) {
          if (e.cleansheets) {
            li.innerText = "CLEAN SHEETS";
          } else {
            li.innerText = "GOALS";
          }
        }
        if (i == 5) {
          li.innerText = e.goals;
        }
        stats.appendChild(li);
      }
      const personaldetails = document.createElement("div");
      personaldetails.classList.add("personaldetails");
      //now for the cross button
      const buttondiv = document.createElement("div");
      buttondiv.classList.add("buttondiv");
      const personaldetails2=document.createElement("div");
      personaldetails2.classList.add("personaldetails2");
      const personaldetailsname=document.createElement("div");
      personaldetailsname.classList.add("personaldetailsname");
      const crossbtnlink = document.createElement("a");
      crossbtnlink.classList.add("crossbtnlink");
      const crossbtn = document.createElement("button");
      crossbtn.innerHTML = `<i class="ri-xrp-line"></i>`;
      crossbtnlink.href = "./index.html";
      crossbtnlink.appendChild(crossbtn);
      buttondiv.appendChild(crossbtnlink);
      personaldetails.appendChild(buttondiv);
      playerpic.appendChild(bgpic);
      personaldetailsname.appendChild(shirtno);
      personaldetailsname.appendChild(playername);
      btndiv.appendChild(btn3);
      personaldetails2.appendChild(personaldetailsname);
      personaldetails2.appendChild(btndiv);
      playerprofile.appendChild(playerdetails);
      playerprofile.appendChild(playerpic);
      playerdetails.appendChild(personaldetails);
      playerdetails.appendChild(personaldetails2);
      playerpic.appendChild(stats);
      background.appendChild(playerprofile);
      playercontainer.appendChild(background);
      //for biography
      const biography = document.createElement("div");
      biography.classList.add("biography");
      const h2 = document.createElement("h2");
      const biographytext = document.createElement("p");
      h2.innerText = "Biography";
      biographytext.innerText = e.biography;
      const biographyinfo = document.createElement("div");
      biographyinfo.classList.add("biographyinfo");
      const positiondiv = document.createElement("div");
      positiondiv.classList.add("positiondiv");
      const h33 = document.createElement("h3");
      h33.innerText = "POSITION";
      const positionbio = document.createElement("p");
      positionbio.innerText = e.position;
      const ratingdiv = document.createElement("div");
      ratingdiv.classList.add("ratingdiv");
      const ratingdivh3 = document.createElement("h3");
      ratingdivh3.innerText = "AVG RATING";
      ratingdiv.appendChild(ratingdivh3);
      const ratingbio = document.createElement("p");
      ratingbio.innerText = e.rating;
      ratingdiv.appendChild(ratingbio);
      positiondiv.appendChild(h33);
      positiondiv.appendChild(positionbio);
      const biographymain = document.createElement("div");
      biographymain.classList.add("biographymain");
      biographymain.appendChild(h2);
      biographymain.appendChild(biographytext);
      const jerseydiv = document.createElement("div");
      jerseydiv.classList.add("jerseydiv");
      const jerseydivh3 = document.createElement("h3");
      jerseydivh3.innerText = "JERSEY NUMBER";
      const jerseydivp = document.createElement("p");
      jerseydivp.innerText = e.jerseyNumber;
      jerseydiv.appendChild(jerseydivh3);
      jerseydiv.appendChild(jerseydivp);
      biographyinfo.appendChild(positiondiv);
      biographyinfo.appendChild(ratingdiv);
      biographyinfo.appendChild(jerseydiv);
      // biography.appendChild(biographymain)
      biography.appendChild(biographyinfo);
      playercontainer.appendChild(biographymain);
      playercontainer.appendChild(biography);
  }
  card.addEventListener('click', crad)
    jerseyNumber.id = "jerseyNumber";
    card.appendChild(name);
    card.appendChild(jerseyNumber);
    cardContainer.appendChild(card);
    cardContainer.appendChild(card);
    input.addEventListener("input", ()=>{
      cardContainer.innerHTML = "";
      let inputvalue2 = input.value.toLowerCase().trim();

      peopleData.filter((f) => f.name.toLowerCase().includes(inputvalue2))
                .forEach((u) => {
                  card.innerHTML = `
                   <img src="${u.image}" alt="${u.name}">
                    <h3>${u.name}</h3>
                    <li>${u.jerseyNumber}</li>
                  `;
                  cardContainer.appendChild(card);
    });
  });
  container.appendChild(cardContainer);
});
}
headergen();
cardsgen();