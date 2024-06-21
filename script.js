const peopleData = [
  {
      name: "Hassan Tahir",
      age: 25,
      phoneNo: "+923001234567",
      position: "CB",
      rating: 8.5,
      email: "hassan@example.com",
      cnic: "123456789",
      jerseyNumber: 10,
      image: "./assets/images/hassssan.jpeg", // Example image URL
      appearances: 32,
      goals: 2,
      biography: "A rock-solid defender known for his tactical intelligence. Hassan's interceptions have saved countless goals.",
      quote: "Sanda FC feels like family, and the support from the fans is unmatched.",
      bgpic:"./assets/BG REMOVED IMAGE/hasssan.png"
  },
  {
      name: "Abdul Moiz",
      age: 27,
      phoneNo: "+923121234567",
      position: "CDM",
      rating: 7.8,
      email: "moiz@example.com",
      cnic: "987654321",
      jerseyNumber: 7,
      image: "./assets/images/moizgood.jpeg", // Example image URL
      appearances: 28,
      goals: 4,
      biography: "Moiz is a midfield maestro with a knack for breaking up opposition play. His passes are the lifeline of the team.",
      quote: "The camaraderie and spirit at Sanda FC are truly special. It's more than just a club.",
      bgpic:"./assets/BG REMOVED IMAGE/moizreal.png"
   },
  {
      name: "Talha Bilal",
      age: 23,
      phoneNo: "+923241234567",
      position: "RB",
      rating: 8.0,
      email: "talha@example.com",
      cnic: "456789123",
      jerseyNumber: 5,
      image: "./assets/images/jamiee.jpg", // Example image URL
      appearances: 30,
      goals: 3,
      biography: "Speed and agility define Talha's game as a right back. He never shies away from a challenge down the flank.",
      quote: "Playing for Sanda FC gives me the perfect platform to showcase my skills and grow.",
      bgpic:"./assets/BG REMOVED IMAGE/28-Facundo-Pellistri1693928312644.png"
  },
  {   cleansheets:"uaa",
      name: "Faizan Lakhani",
      age: 29,
      phoneNo: "+923351234567",
      position: "GK",
      rating: 8.9,
      email: "faizan@example.com",
      cnic: "789123456",
      jerseyNumber: 1,
      image: "./assets/images/messsi.jpeg", // Example image URL
      appearances: 34,
      goals: 10,
      biography: "Faizan's reflexes are unmatched, making him a wall in goal. He commands the box with authority.",
      quote: "Sanda FC has a winning mentality and a supportive environment. It's the perfect place.",
      bgpic:"./assets/BG REMOVED IMAGE/messi.png"
  },
  {
      name: "Ali Akbar",
      age: 26,
      phoneNo: "+923461234567",
      position: "CDM",
      rating: 7.5,
      email: "ali@example.com",
      cnic: "987654321",
      jerseyNumber: 8,
      image: "./assets/images/cr7.jpeg", // Example image URL
      appearances: 29,
      goals: 5,
      biography: "Ali's defensive skills and vision make him a pivotal CDM. He excels in turning defense into attack.",
      quote: "The passion and dedication at Sanda FC are inspiring. It's an honor to be in this club.",
      bgpic:"./assets/BG REMOVED IMAGE/messi2.png"
  },
  {
      name: "Ali winger",
      age: 28,
      phoneNo: "+923571234567",
      position: "CF",
      rating: 8.2,
      email: "alibid@example.com",
      cnic: "654123789",
      jerseyNumber: 9,
      image: "./assets/images/garaxcr.jpeg", // Example image URL
      appearances: 31,
      goals: 12,
      biography: "A clinical finisher, Ali winger is always a threat in the box. His speed and precision are second to none.",
      quote: "The fans' energy and support at Sanda FC drive me to give my best in every match.",
      bgpic:"./assets/BG REMOVED IMAGE/messi4.png"
  },
  {
      name: "Awais Saeed",
      age: 24,
      phoneNo: "+923681234567",
      position: "RB",
      rating: 7.7,
      email: "awais@example.com",
      cnic: "321987654",
      jerseyNumber: 4,
      image: "./assets/images/awais.PNG", // Example image URL
      appearances: 27,
      goals: 1,
      biography: "Awais combines defensive solidity with attacking flair. His runs down the right are a constant menace.",
      quote: "Sanda FC is like a second home. The club's culture is all about unity and excellence.",
      bgpic:"./assets/BG REMOVED IMAGE/messsaa.png"
  },
  {
      name: "Burki Nehru",
      age: 30,
      phoneNo: "+923791234567",
      position: "CAM",
      rating: 8.1,
      email: "burki@example.com",
      cnic: "654789321",
      jerseyNumber: 6,
      image: "./assets/images/garnaaa.jpeg", // Example image URL
      appearances: 33,
      goals: 9,
      biography: "Burki's creativity and vision as a CAM make him the team's playmaker. He threads passes with pinpoint accuracy.",
      quote: "At Sanda FC, every player is valued and encouraged to express themselves on the pitch.",
      bgpic:"./assets/BG REMOVED IMAGE/burki.png"
  },
  {
      name: "Zunair Faraz",
      age: 27,
      phoneNo: "+923901234567",
      position: "CF",
      rating: 8.7,
      email: "zuni@example.com",
      cnic: "789654123",
      jerseyNumber: 11,
      image: "./assets/images/messi.jpg", // Example image URL
      appearances: 32,
      goals: 14,
      biography: "Zunair is a goal-scoring machine with an eye for spectacular strikes. His presence in the final third is formidable.",
      quote: "Sanda FC's commitment to excellence and the passionate fans make it the perfect place to play.",
      bgpic:"./assets/BG REMOVED IMAGE/8-Bruno-Fernandes1693834113080.png"
  },
  {
      name: "Jazib Faisal",
      age: 25,
      phoneNo: "+923441234567",
      position: "CAM",
      rating: 7.9,
      email: "jazib@example.com",
      cnic: "456321987",
      jerseyNumber: 12,
      image:  "./assets/images/jazib2.jfif", // Example image URL
      appearances: 28,
      goals: 6,
      biography: "Jazib's flair and ball control as a CAM leave defenders in his wake. He's a maestro in orchestrating attacks.",
      quote: "The support from the staff and fans at Sanda FC is incredible. It truly feels amazing.",
      bgpic:"./assets/BG REMOVED IMAGE/jazib2.png"
  },
  {   cleansheets:"uaa",
      name: "Muqeet Madni",
      age: 26,
      phoneNo: "+923051234567",
      position: "GK",
      rating: 8.3,
      email: "muqeet@example.com",
      cnic: "321654987",
      jerseyNumber: 15,
      image:  "./assets/images/piqu.jpeg", // Example image URL
      appearances: 30,
      goals: 12,
      biography: "Muqeet's goalkeeping skills are top-notch, with a great command of his area. His shot-stopping ability is exceptional.",
      quote: "I love the way Sanda FC values its players and invests in their development. It's a great club.",
      bgpic:"./assets/BG REMOVED IMAGE/onnana.png"
  },
  {
      name: "Umar Bilal",
      age: 29,
      phoneNo: "+923161234567",
      position: "LW",
      rating: 9.0,
      email: "umar@example.com",
      cnic: "654987321",
      jerseyNumber: 17,
      image:  "./assets/images/alex.jpeg", // Example image URL
      appearances: 31,
      goals: 18,
      biography: "Umar is a dynamic winger who dazzles with his dribbling skills. His left foot is a potent weapon.",
      quote: "Sanda FC provides an environment that allows me to play my natural game and perform at my best.",
      bgpic:"./assets/BG REMOVED IMAGE/16-Amad1693833855322.png"
  },
  {
      name: "Ayaan Faraz",
      age: 22,
      phoneNo: "+923271234567",
      position: "CM",
      rating: 7.6,
      email: "ayaan@example.com",
      cnic: "789321654",
      jerseyNumber: 19,
      image:  "./assets/images/leao.jpeg", // Example image URL
      appearances: 25,
      goals: 4,
      biography: "Ayaan's box-to-box play is relentless, combining stamina with technical ability. He's the engine of the midfield.",
      quote: "The unity and ambition at Sanda FC inspire me to push my limits and achieve more.",
      bgpic:"./assets/BG REMOVED IMAGE/ayan.png"
  },
  {
      name: "Farrukh Sheikh",
      age: 28,
      phoneNo: "+923381234567",
      position: "LB",
      rating: 8.4,
      email: "farrukh@example.com",
      cnic: "456987321",
      jerseyNumber: 22,
      image:  "./assets/images/licha.jpeg", // Example image URL
      appearances: 29,
      goals: 2,
      biography: "Farrukh excels as a left back with his defensive prowess and overlapping runs. He's a key figure on the flank.",
      quote: "Playing for Sanda FC is a privilege. The club's philosophy aligns perfectly with my style of play.",
      bgpic:"./assets/BG REMOVED IMAGE/farruh.png"
  },
  {
      name: "Raheel Fatim",
      age: 25,
      phoneNo: "+923491234567",
      position: "LW",
      rating: 8.6,
      email: "raheel@example.com",
      cnic: "654789123",
      jerseyNumber: 25,
      image:  "./assets/images/raheel.jfif", // Example image URL
      appearances: 30,
      goals: 13,
      biography: "Raheel's pace and skill as a left winger make him a constant threat. His creativity opens up defenses.",
      quote: "The atmosphere at Sanda FC is electric, and the support we get from fans is unbelievable.",
      bgpic:"./assets/BG REMOVED IMAGE/raheel.png"
  },
  {
      name: "Malak Doodh",
      age: 23,
      phoneNo: "+923501234567",
      position: "CM",
      rating: 7.7,
      email: "malak@example.com",
      cnic: "987654789",
      jerseyNumber: 28,
      image:  "./assets/images/vin.jpeg", // Example image URL
      appearances: 27,
      goals: 3,
      biography: "Malak's versatility in midfield allows him to adapt and excel in various roles. He's a vital team player.",
      quote: "Sanda FC's commitment to developing young talent is what drew me to the club. It's the perfect place to grow.",
      bgpic:"./assets/BG REMOVED IMAGE/malak.png"
  },
  {
      name: "Nawab Bekar",
      age: 30,
      phoneNo: "+923611234567",
      position: "CB",
      rating: 8.8,
      email: "nawab@example.com",
      cnic: "321456789",
      jerseyNumber: 31,
      image:  "./assets/images/cr.jpeg", // Example image URL
      appearances: 32,
      goals: 1,
      biography: "Nawab is a towering center-back with excellent aerial ability. He marshals the defense with authority.",
      quote: "Sanda FC's rich history and the passion of its fans make it a special place to play football.",
      bgpic:"./assets/BG REMOVED IMAGE/nawab.png"
  },
  {
      name: "Murtaza Ali",
      age: 26,
      phoneNo: "+923721234567",
      position: "ST",
      rating: 9.1,
      email: "murtaza@example.com",
      cnic: "654321987",
      jerseyNumber: 33,
      image:  "./assets/images/messi2.jpeg", // Example image URL
      appearances: 34,
      goals: 20,
      biography: "Murtaza is a lethal striker known for his clinical finishing. He consistently tops the scoring charts.",
      quote: "The attacking philosophy at Sanda FC suits my style perfectly. It's a joy to be part of this team.",
      bgpic:"./assets/BG REMOVED IMAGE/wan.png"
  },
  {
      name: "Muneeb Kashif",
      age: 24,
      phoneNo: "+923831234567",
      position: "CM",
      rating: 8.0,
      email: "muneeb@example.com",
      cnic: "123123123",
      jerseyNumber: 14,
      image:  "./assets/images/cr7.jpeg", // Example image URL
      appearances: 28,
      goals: 4,
      biography: "Muneeb is a composed central midfielder with a keen eye for a pass. He dictates the tempo of the game.",
      quote: "Sanda FC's emphasis on teamwork and strategy is what makes it such a great club to play for.",
      bgpic:"./assets/BG REMOVED IMAGE/muneeb.png"
  },
  {
      name: "Adan Pathan",
      age: 26,
      phoneNo: "+923941234567",
      position: "RB",
      rating: 8.7,
      email: "adan@example.com",
      cnic: "456456456",
      jerseyNumber: 23,
      image:  "./assets/images/1005-800x450.jpg", // Example image URL
      appearances: 29,
      goals: 2,
      biography: "ADAN's defensive resilience and forward thrusts make him a standout right back. He's a relentless competitor.",
      quote: "Sanda FC's blend of tradition and modernity creates a unique and inspiring environment for players.",
      bgpic:"./assets/BG REMOVED IMAGE/adan.png"
  }
];
const container = document.querySelector(".container");
const playerContainer = document.querySelector(".playerprofile");
const cardContainer = document.createElement("div");
const input = document.createElement("input");
input.placeholder = "Search Here";
const header = document.createElement("div");

const headerGen = () => {
  header.classList.add("header");
  const h1 = document.createElement("h1");
  h1.innerText = "The Faces Behind the Jerseys";
  input.classList.add("input");
  container.appendChild(h1);
  header.appendChild(input);
  container.appendChild(header);
};

const crad = (e) => {
  container.style.display = "none";
  const background = document.createElement("div");
  background.classList.add("background");
  const playerProfile = document.createElement("div");
  playerProfile.classList.add("playerprofile");
  const playerDetails = document.createElement("div");
  playerDetails.classList.add("playerdetails");

  const playerName = document.createElement("h1");
  playerName.innerText = e.name;
  const shirtNo = document.createElement("h1");
  shirtNo.innerText = e.jerseyNumber;
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btndiv");
  const btn3 = document.createElement("button");
  btn3.innerText = "Buy Shirt";
  btn3.classList.add("btn3");
  btn3.addEventListener("click", () => {
    alert("Merchandise is not available yet!!");
  });

  const playerPic = document.createElement("div");
  playerPic.classList.add("playerpic");
  const h3 = document.createElement("blockquote");
  h3.innerText = '"' + e.quote + '"';
  playerPic.appendChild(h3);
  const bgPic = document.createElement("img");
  bgPic.src = e.bgpic;
  const stats = document.createElement("div");
  stats.classList.add("stats");

  const ul = document.createElement("ul");
  const statsItems = [
    "AGE",
    e.age,
    "APPEARANCES",
    e.appearances,
    e.cleansheets ? "CLEAN SHEETS" : "GOALS",
    e.goals,
  ];

  statsItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item;
    stats.appendChild(li);
  });

  const personalDetails = document.createElement("div");
  personalDetails.classList.add("personaldetails");
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttondiv");
  const personalDetails2 = document.createElement("div");
  personalDetails2.classList.add("personaldetails2");
  const personalDetailsName = document.createElement("div");
  personalDetailsName.classList.add("personaldetailsname");
  const crossBtnLink = document.createElement("a");
  crossBtnLink.classList.add("crossbtnlink");
  const crossBtn = document.createElement("button");
  crossBtn.innerHTML = `<i class="ri-xrp-line"></i>`;
  crossBtnLink.href = "./main.html";
  crossBtnLink.appendChild(crossBtn);
  buttonDiv.appendChild(crossBtnLink);
  personalDetails.appendChild(buttonDiv);
  playerPic.appendChild(bgPic);
  personalDetailsName.appendChild(shirtNo);
  personalDetailsName.appendChild(playerName);
  btnDiv.appendChild(btn3);
  personalDetails2.appendChild(personalDetailsName);
  personalDetails2.appendChild(btnDiv);
  playerProfile.appendChild(playerDetails);
  playerProfile.appendChild(playerPic);
  playerDetails.appendChild(personalDetails);
  playerDetails.appendChild(personalDetails2);
  playerPic.appendChild(stats);
  background.appendChild(playerProfile);
  playerContainer.appendChild(background);

  const biography = document.createElement("div");
  biography.classList.add("biography");
  const h2 = document.createElement("h2");
  const biographyText = document.createElement("p");
  h2.innerText = "Biography";
  biographyText.innerText = e.biography;
  const biographyInfo = document.createElement("div");
  biographyInfo.classList.add("biographyinfo");

  const positionDiv = document.createElement("div");
  positionDiv.classList.add("positiondiv");
  const h33 = document.createElement("h3");
  h33.innerText = "POSITION";
  const positionBio = document.createElement("p");
  positionBio.innerText = e.position;

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("ratingdiv");
  const ratingDivH3 = document.createElement("h3");
  ratingDivH3.innerText = "AVG RATING";
  const ratingBio = document.createElement("p");
  ratingBio.innerText = e.rating;
  ratingDiv.appendChild(ratingDivH3);
  ratingDiv.appendChild(ratingBio);

  positionDiv.appendChild(h33);
  positionDiv.appendChild(positionBio);

  const biographyMain = document.createElement("div");
  biographyMain.classList.add("biographymain");
  biographyMain.appendChild(h2);
  biographyMain.appendChild(biographyText);

  const jerseyDiv = document.createElement("div");
  jerseyDiv.classList.add("jerseydiv");
  const jerseyDivH3 = document.createElement("h3");
  jerseyDivH3.innerText = "JERSEY NUMBER";
  const jerseyDivP = document.createElement("p");
  jerseyDivP.innerText = e.jerseyNumber;
  jerseyDiv.appendChild(jerseyDivH3);
  jerseyDiv.appendChild(jerseyDivP);

  biographyInfo.appendChild(positionDiv);
  biographyInfo.appendChild(ratingDiv);
  biographyInfo.appendChild(jerseyDiv);

  biography.appendChild(biographyInfo);
  playerContainer.appendChild(biographyMain);
  playerContainer.appendChild(biography);
};
const cardsGen = () => {
  cardContainer.classList.add("cardcontainer");
  peopleData.forEach((e) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const insideCard = document.createElement("div");
    const image = document.createElement("img");
    image.src = e.image;
    card.appendChild(image);
    insideCard.classList.add("insidecard");
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
    card.addEventListener("click", () => crad(e));
    card.appendChild(name);
    card.appendChild(jerseyNumber);
    cardContainer.appendChild(card);
  });

  input.addEventListener("input", () => {
    cardContainer.innerHTML = "";
    const inputvalue2 = input.value.toLowerCase().trim();

    peopleData
      .filter((f) => f.name.toLowerCase().includes(inputvalue2))
      .forEach((u) => {
        const card = document.createElement("div"); // Create a new card for each item
        card.classList.add("card"); // Optional: Add a class to the card for styling
        card.innerHTML = `
                  <img src="${u.image}" alt="${u.name}">
                  <h3>${u.name}</h3>
                  <li>${u.jerseyNumber}</li>
                `;
        card.addEventListener("click", () => crad(u));
        cardContainer.appendChild(card);
      });
    container.appendChild(cardContainer);
  });

  container.appendChild(cardContainer);
};

headerGen();
cardsGen();
