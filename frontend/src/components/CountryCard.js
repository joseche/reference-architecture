import React from "react";

function CountryCard(country) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card border-0">
        <a href="#">
          <img
            className="card-img-top scale-on-hover"
            src={country.img}
            alt="Card Image"
          />
        </a>
        <div className="card-body">
          <h6>
            <a href="#">{country.name}</a>
          </h6>
          <p className="text-muted card-text">
            {country.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
