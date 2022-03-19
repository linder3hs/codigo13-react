import { Container, Grid, TextField } from "@mui/material"

const Flags = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField label="Search for a country..." />
        </Grid>
        <Grid item md={6}>
          <TextField label="Search for a country..." />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Flags
