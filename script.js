const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

//Console
const text = "Lisbon is the capital of Portugal";

votesIntresting = votesIntresting + 1;
votesIntresting++;
console.log(votesIntresting);

let totalUpvotes = votesIntresting + votesMindblowing;
console.log("Upvotes", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.533ccc"));

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  // 2022 - 2015
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));

let votesIntresting = 20;
let votesMindblowing = 5;
console.log(votesIntresting === votesMindblowing);
if (votesIntresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesIntresting > votesMindblowing) {
  console.log("Intresting fact!!");
} else if (votesIntresting < votesMindblowing) {
  console.log("Mindblowing fact!!");
}

//falsy values: 0, '', null, undefined
//truthy value: everything else...
if (votesMindblowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so special...");
}

//Create DOM elements: Render facts in list
// factList.innerHTML = "";

// //Load data from Supabase
// loadFacts;
// async function loadFacts() {
//   const res = await fetch(
//     "https://vgvdtahgktuonxcmkhyg.supabase.co/rest/v1/facts",
//     {
//       headers: {
//         apikey:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndmR0YWhna3R1b254Y21raHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MTgxMDYsImV4cCI6MjAxNDQ5NDEwNn0.iimNr-fRDD4LcxzGs451WG351J_hQIz92QSBmc_Je7g",
//         authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndmR0YWhna3R1b254Y21raHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MTgxMDYsImV4cCI6MjAxNDQ5NDEwNn0.iimNr-fRDD4LcxzGs451WG351J_hQIz92QSBmc_Je7g",
//       },
//     }
//   );
//   const data = await res.json();
//   createFactList(data);
// }

// function createFactList(dataArray) {
//   //factList.insertAdjacentHTML("afterbegin", "<li>Izza</li>");

//   const htmlArr = dataArray.map(
//     (fact) => `<li class="fact">
//       <p>
//       ${fact.text}
//       <a
//         class="source"
//         href="${fact.source}"
//         target="_blank"
//         >(Source)</a>
//       </p>
//       <span class="tag" style="background-color:#3b82f6 ">${fact.category}</span>
//     </li>`
//   );
//   console.log(htmlArr);
//   const html = htmlArr.join("");
//   factList.insertAdjacentHTML("afterbegin", html);
// }

/*
let votesFalse = 77;
const totalUpvotes = votesIntresting + votesMindblowing;

const massage =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources...";
//alert(massage);

const text = "Lisbon is the capital of portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old.`;
console.log(str); */
