import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Chip } from "@mui/material";
import { getDataFromPokemon } from "../../service";

const Detail = () => {
  const { name } = useParams();

  const [country, setCountry] = useState({});

  const [languages, setLanguages] = useState([]);

  const fetchCountry = async () => {
    const response = await getDataFromPokemon(
      `https://restcountries.com/v3.1/name/${name}`
    );
    console.log(response);
    setLanguages(Object.values(response[0].languages));
    setCountry(response[0]);
  };

  useEffect(() => {
    fetchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {Object.keys(country).length > 0 && (
        <Grid
          container
          alignItems="center"
          spacing={3}
          sx={{ height: "100vh" }}
        >
          <Grid item md={6}>
            <img src={country?.flags?.svg} width={400} alt="" />
          </Grid>
          <Grid item md={6}>
            <h3>{country.name?.official}</h3>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <p>
                  <b>Native Name</b>: {country.name?.official}
                </p>
                <p>
                  <b>Population</b>: {country.population}
                </p>
                <p>
                  <b>Region</b>: {country.region}
                </p>
                <p>
                  <b>Sub Region</b> : {country.subregion}
                </p>
                <p>
                  <b>Capital</b>: {country.capital}
                </p>
              </Grid>
              <Grid item md={6}>
                <p>
                  <b>Top Level Domain</b>: {country.tld}
                </p>
                <p>
                  <b>Currencies</b>:{" "}
                  {Object.keys(country?.currencies).map((currency) => (
                    <span>{currency}</span>
                  ))}
                </p>
                <p>
                  <b>Languages</b>:&nbsp;
                  {languages.map((language, index) => (
                    <span>
                      {index < languages.length - 1
                        ? `${language}, `
                        : language}
                    </span>
                  ))}
                </p>
              </Grid>
              <Grid item md={12}>
                <h4>
                  Border Countries: &nbsp; &nbsp;
                  {country?.borders &&
                    Object.values(country?.borders).map((border) => (
                      <span>
                        <Chip label={border} />
                        &nbsp; &nbsp;
                      </span>
                    ))}
                </h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Detail;
