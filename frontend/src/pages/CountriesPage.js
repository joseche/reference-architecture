import React from "react";
import CountryCard from "../components/CountryCard";

const countries = [
  {
    name: "Afganistan",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Nomads_in_Badghis_Province.jpg/1920px-Nomads_in_Badghis_Province.jpg",
    desc: "Afghanistan,[d] officially the Islamic Emirate of Afghanistan,[e] is a landlocked country located at the crossroads of Central Asia and South Asia. Referred to as the Heart of Asia,[26] it is bordered by Pakistan to the east and south,[f] Iran to the west, Turkmenistan to the northwest, Uzbekistan to the north, Tajikistan to the northeast, and China to the northeast and east.",
  },
  {
    name: "Costa Rica",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Iglesia_Inmaculada_Concepcion_Ujarras.jpg",
    desc: "Costa Rica, officially the Republic of Costa Rica (Spanish: República de Costa Rica), is a country in the Central American region of North America. Costa Rica is bordered by Nicaragua to the north, the Caribbean Sea to the northeast, Panama to the southeast, and the Pacific Ocean to the southwest, as well as maritime border with Ecuador to the south of Cocos Island.",
  },
];

function CountriesPage() {
  return (
    <div className="container" style={{ paddingTop: "120px" }}>
      <main className="page landing-page">Countries page</main>
      <div className="row">
        {countries.map(country => (
          <CountryCard key={country.name} name={country.name} img={country.img} desc={country.desc} />
        ))}
      </div>
    </div>
  );
}

export default CountriesPage;
