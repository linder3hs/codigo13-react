import { Container, Grid } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  // latitude y longitede de lima
  const position = [-12.04318, -77.02824];

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={12}>
          <h1>Mapas</h1>
        </Grid>
        <Grid item md={12}>
          <MapContainer center={position} zoom={12} style={{ height: 500 }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Map;
