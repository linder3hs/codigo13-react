import { useState, useEffect } from "react"
import { Container, Grid, TextField } from "@mui/material"
import { getDataFromPokemon } from "../../service"

const Flags = () => {
  const [countries, setCountries] = useState([])

  const fetchCountries = async () => {
    const response = await getDataFromPokemon("https://restcountries.com/v2/all")
    setCountries(response)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6}>
          <TextField label="Search for a country..." />
        </Grid>
        <Grid item md={6}>
          <TextField label="Search for a country..." />
        </Grid>
        {
          countries.length > 0 && countries.map(country => (
            <Grid item md={3} xs={12}>
              <h4>{country.name}</h4>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default Flags
