import React from "react";
import CountryCard from "../components/CountryCard";

import countries from "../fixtures/countries.json"

function CountriesPage() {
  return (
    <div className="container" style={{ paddingTop: "120px" }}>
      <main className="page landing-page">
        <h1 className="bd-title">Countries</h1>
        <p className="bd-lead">Select the countries for which you want to see information</p>
      </main>
      <div className="row">
        {countries.map(country => (
          <CountryCard key={country.id} name={country.name} img={country.img} desc={country.desc} />
        ))}
      </div>
    </div>
  );
}

export default CountriesPage;
