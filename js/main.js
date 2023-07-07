
const infoCountry = document.querySelector(".information");
const searchInput = document.querySelector(".search__input");
const darkMode = document.querySelector(".dark__mode");
const body = document.querySelector("body");
const filterByRegion = document.querySelector(".filter__region");
const options = document.querySelectorAll("option");








let allCountriesData;

filterByRegion.addEventListener("change", (e) => {
    fetch(`https://restcountries.com/v3.1/region/${options.value}`)
      .then((res) => res.json())
      .then(renderCountries);
  });

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data);
    allCountriesData = data;
  });

function renderCountries(data) {
  infoCountry.innerHTML = "";
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.setAttribute('href' , `about.html?name=${country.name.common}`)
    countryCard.innerHTML = `
          <img src="${country.flags.svg}" alt="${country.name.common} flag" />
          <div class="card-text">
              <h2 class="card-title">${country.name.common}</h2>
              <p>Population:${country.population.toLocaleString("en-IN")}</p>
              <p>Region: ${country.region}</p>
              <p>Capital: ${country.capital?.[0]}</p>
          </div>
  `;
    infoCountry.append(countryCard);
    
  });
}

searchInput.addEventListener("input", (e) => {
  const filteredCountries = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderCountries(filteredCountries);
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem('data' , 'dark' )
  localStorage.getItem()
});









