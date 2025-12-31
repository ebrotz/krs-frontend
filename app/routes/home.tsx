import type { Route } from "./+types/home";
import Grid from '@mui/material/Grid'
import ButtonAppBar from './appbar';
import Container from '@mui/material/Container';
import PlaceCard from '~/components/PlaceCard'
import * as Place from '~/common/Place'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kurse" },
    { name: "Kurse", content: "Welcome to Kurse!" },
  ];
}

export default function Home() {
  return (
    <div>
      <ButtonAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: '1em', gap: 4 }}
      >
        <CardPlane />
      </Container>
    </div>
  )
}

const places: Place.Place[] = [
  { title: "Place One", address: "123 Main St, Cityville" },
  { title: "Place Two", address: "456 Oak Ave, Townsville" },
  { title: "Place Three", address: "789 Pine Rd, Villageburg" },
  { title: "Place Four", address: "789 Pine Rd, Villageburg" },
  { title: "Place Five", address: "789 Pine Rd, Villageburg" },
  { title: "Place Six", address: "789 Pine Rd, Villageburg" },
  { title: "Place Seven", address: "789 Pine Rd, Villageburg" },
  { title: "Place Eight", address: "789 Pine Rd, Villageburg" },
  { title: "Place Nine", address: "789 Pine Rd, Villageburg" },
  { title: "Place Ten", address: "789 Pine Rd, Villageburg" }
]

// See breakpoints at https://m2.material.io/design/layout/responsive-layout-grid.html#breakpoints 
const responsiveGridColumns = {xs: 4, sm: 8, md: 12}

function CardPlane() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={responsiveGridColumns}>
      {
        places.map((place, idx) => (
          <Grid key={idx} size={{ xs: 2, sm: 4, md: 4 }}>
            <PlaceCard {...place} />
          </Grid>
        ))
      }
    </Grid>
  );
}
