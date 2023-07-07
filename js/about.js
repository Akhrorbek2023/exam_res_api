const countryName = new URLSearchParams(location.search).get("name");
const infoCountry = document.querySelector(".information");
// const searchInput = document.querySelector(".search__input");
const darkMode = document.querySelector(".dark__mode");
// const body = document.querySelector("body");
// const filterByRegion = document.querySelector(".filter__region ");
// const onPage = document.querySelector(".page");
const wrap = document.querySelector(".wrap");
const countryCard = document.querySelector(".country-card");





// let allCountriesData;



fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((dat) => {
    showCountries(dat);
    allCountriesData = dat;
  });



darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


function showCountries(dat) {
    // infoCountry.innerHTML = "";
    dat.filter((country) => {
        console.log(country)
     const showPage = document.createElement('div')
     showPage.classList.add('show__content')
     showPage.innerHTML = `<div class="show__item"><img class = "show__image" src="${country.flags.svg}" alt="${country.name.common} flag" width = "500" height = "400" /></div>
     <div><div><h1 class="about__title">${country.name.common}</h1></div>   <div class = "middle__wrap">
     <div class="primary">
     <p><strong>Native Name:</strong>${country.name}</p>
     <p><strong>Population:</strong>${country.population}</p>
     <p><strong>Region:</strong>${country.region}</p>
     <p><strong>Sub Region:</strong>${country.population}</p>
     <p><strong>Capital:</strong></p>
     </div>
     <div>
     <p><strong>Top Level Domain:</strong>${country.demonyms.eng.f}/${country.demonyms.eng.m}</p>
     <p><strong>Currencies:</strong>}</p>
     <p><strong>Languages:</strong>${country.languages.ara}</p>
     </div>
     </div>
     <div class=="border"><p><strong>Border Countries:</strong>
     <span>${country.borders[0]}</span>
     <span>${country.borders[1]}</span>
     <span>${country.borders[2]}</span>
     <span>${country.borders[3]}</span>
     <span>${country.borders[4]}</span>
     </p></div></div>`
     wrap.innerHTML = wrap.innerHTML + showPage.innerHTML
    });
  }



