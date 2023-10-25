function HomePage() {
  return (
    <div className="container">
      <main className="page landing-page">
        <section className="portfolio-block block-intro">
          <div className="container">
            <div className="about-me">
              <p>
                Unveiling the Health and Demographics Dataset:{" "}
                <strong>Illuminating Life Expectancy</strong>
              </p>
            </div>
          </div>
        </section>
      </main>
      <section>
        <div className="container">
          <div>
            <p>
              Although there have been lot of studies undertaken in the past on
              factors affecting life expectancy considering demographic
              variables, income composition and mortality rates. It was found
              that affect of immunization and human development index was not
              taken into account in the past.
              <br />
              <br />
              Also, some of the past research was done considering multiple
              linear regression based on data set of one year for all the
              countries. Hence, this gives motivation to resolve both the
              factors stated previously by formulating a regression model based
              on mixed effects model and multiple linear regression while
              considering data from a period of 2000 to 2015 for all the
              countries.
              <br />
              <br />
              Important immunization like Hepatitis B, Polio and Diphtheria will
              also be considered. In a nutshell, this study will focus on
              immunization factors, mortality factors, economic factors, social
              factors and other health related factors as well.&nbsp;
              <br />
              <br />
              Since the observations this dataset are based on different
              countries, it will be easier for a country to determine the
              predicting factor which is contributing to lower value of life
              expectancy. This will help in suggesting a country which area
              should be given importance in order to efficiently improve the
              life expectancy of its population.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
