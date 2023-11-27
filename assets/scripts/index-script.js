import {fetchData , fetchSearchesData} from './api.js';

import { darkMode, Theme } from './theme.js';

let filteredData = [];
let allData= await fetchData();


// display Data function
 async function displayData(data){
    let info = "";
    
    for (let i = 0; i < data.length; i++)
    {   const country = data[i];

        info+= `
        <div class="col col-12" id = "country-name">
                    <div class="card">
                        <a href="Details.html" target="_blank">
                        <img src=${country.flags.svg}
                         class="card-img-top"
                          alt=${country.flags.alt}
                          >
                         </a>
                        <div class="card-body">
                          <h4 class="card-title text-truncate">${country.name.common}</h4>
                          <div class="card-text"> 
                            <div class="text-truncate"> <b>Pobulation:</b> ${country.population}</div>
                              <div class="text-truncate"> <b>Reagion:</b> ${country.region}</div>
                                <div class="text-truncate"> <b>Capital:</b> ${country.capital}</div>
                          </div>
                        </div>
                        
                      </div>
                </div>
        `
    }
    document.getElementById("progress-indicator").style.display= 'none';
   
    document.getElementById("country-info").innerHTML = info;
    return info;   

}

// search listener
document.getElementById('search-input').addEventListener('keyup', function (event) {
  const searchTerm = event.target.value;
  searchForCountry(searchTerm);
});
//search function
 async function searchForCountry(countryName)
{   let delay;
  clearTimeout(delay);
  let data1;
  delay=setTimeout (async function(){
    if (countryName=="")
    {
      data1=allData;
    }
     else{ 
      data1 = await fetchSearchesData(countryName);
     }
      displayData(data1);
  },125
  );
  
}


// filter listener
document.getElementById('region-filter').addEventListener('change', function () { 
const selectedRegion = this.value; 
filterCountriesBySelect(selectedRegion);
});
// filter function
function filterCountriesBySelect(region )
{ 
  filteredData = allData.filter(country => {
       const countryRegion = country.region.toLowerCase();
       return  (countryRegion === region.toLowerCase() || region==="noValue" );
  });
   displayData(filteredData);
  
}
//darkmode listener
document.getElementById('dark-theme').addEventListener('click', function () {
  darkMode();
  
});

async function init()
{
   Theme();
   displayData(allData);
}

init();

 