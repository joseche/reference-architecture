import React from "react";

function CountryCard(country) {
  return (
    <div className="card mx-2 my-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={country.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{country.name}</h5>
        <p className="card-text">{country.desc}</p>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={country.id}
          />
          <label className="form-check-label" htmlFor={country.id}>
            Add to Indicators
          </label>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
