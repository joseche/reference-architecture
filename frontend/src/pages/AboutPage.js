import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function AboutPage() {
  return (
    <Container fluid="md mb-2">
      <Card>
        <Card.Title>Life Expectancy Data</Card.Title>
        Example app to demostrate a reference architecture for a software system
        Unveiling the Health and Demographics Dataset: Illuminating Life
        Expectancy
        <Card.Body>
          Step into the world of global health and demographics with our rich
          and comprehensive dataset. It's your passport to unraveling the
          secrets of life expectancy and understanding the pulse of population
          health. Dive into a treasure trove of valuable information for public
          health research and epidemiology, where each column tells a unique
          story about a nation's health journey.
        </Card.Body>
        </Card>
        <Card>
        <h3>Fields</h3>
        <Card.Body>
          <ul>
            <li>Country</li> Explore the global tapestry with data from diverse
            nations.
            <li>Year</li> Unlock the passage of time and its impact on health
            trends.
            <li>Status</li> Understand the development status, whether
            "Developed" or "Developing," that shapes the course of health.
            <li>Life Expectancy</li> Peer into the crystal ball of population
            health, revealing how long people can expect to live.
            <li>Adult Mortality</li> Gauge the probabilities of survival between
            ages 15 and 60 per 1,000 population.
            <li>Infant Deaths</li> Delve into infant health with the number of
            infant deaths per 1,000 live births.
            <li>Alcohol</li> Raise a glass to insights on average alcohol
            consumption in liters per capita.
            <li>Percentage Expenditure</li> Unearth health expenditure as a
            percentage of a country's GDP.
            <li>Hepatitis B</li> Measure immunization coverage for Hepatitis B.
            <li>Measles</li> Examine the impact of this preventable disease with
            the number of reported cases per 1,000 population.
            <li>BMI</li> Step onto the scales of national health with the
            average Body Mass Index.
            <li>Under-Five Deaths</li> Shine a spotlight on child mortality with
            the number of deaths under age five per 1,000 live births.
            <li>Polio</li> Inspect immunization coverage for Polio.
            <li>Total Expenditure</li> Track the total health expenditure as a
            percentage of GDP.
            <li>Diphtheria</li> Assess immunization coverage for Diphtheria.
            <li>HIV/AIDS</li> Witness the prevalence of HIV/AIDS as a percentage
            of the population.
            <li>GDP</li> Follow the financial pulse of a nation with Gross
            Domestic Product data.
            <li>Population</li> Witness the ebb and flow of a nation's populace.
            <li>Thinness 1-19 Years</li> Explore the prevalence of thinness
            among children and adolescents aged 1-19.
            <li>Thinness 5-9 Years</li> Zoom in on thinness among children aged
            5-9.
            <li>Income Composition of Resources</li>
            Decode the composite index reflecting income distribution and
            resource access.
            <li>Schooling</li> Measure the gift of knowledge with data on
            average years of schooling.
          </ul>
        </Card.Body>
        <Card.Title>Predictive Targets</Card.Title>
        <Card.Body>
          The "Life Expectancy" column is your North Star, guiding the way to
          predictive insights. Harness the power of data to predict life
          expectancy using the mosaic of health and demographic indicators at
          your disposal.
          <h4>Journey with the Data</h4>
          <ul>
            <li> Predicting Life Expectancy</li> Embark on the quest to build
            regression models that forecast life expectancy for diverse
            countries and years based on this wealth of features.
            <li> Identifying Influential Factors</li> Uncover the gems within
            the dataset that influence life expectancy the most, providing
            valuable insights for public health interventions.
            <li> Health Policy Analysis</li> Assess the impact of health
            expenditure, immunization coverage, and disease prevalence on life
            expectancy and shape policies that safeguard population health. This
            dataset is your window into the intricate world of global health.
            Join us on a journey of discovery as we explore the factors shaping
            life expectancy and navigate the waters of public health,
            epidemiology, and population health.
          </ul>
        </Card.Body>
        <h5>Source</h5>
        https://www.kaggle.com/datasets/uom190346a/health-and-demographics-dataset
      </Card>
    </Container>
  );
}

export default AboutPage;
