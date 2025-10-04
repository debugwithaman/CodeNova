let  api_Load = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
let card = document.querySelector(".card")

const button = document.querySelector(".main-button");
button.addEventListener("onclick",()=>{
  async function getData() {
  try {
    let res = await fetch(api_Load);
    let data = res.json();
    console.log(data);
  } 
  catch (error) {
    if(!res.ok){
      throw new Error("Receipe Not Found!!")
    }
  }
  const name = document.getElementsByClassName("name");
  const country = document.getElementsByClassName("country");
  const details = document.getElementsByClassName("details");
  name.textContent = data.strMeal;
  country.textContent = data.strArea;
  details.textContent = data.strInstructions;
  card.appendChild(name);
  card.appendChild(country);
  card.appendChild(details);
}
})
