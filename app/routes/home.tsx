import * as React from 'react'
import type { Route } from "./+types/home";
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ButtonAppBar from './appbar';
import Container from '@mui/material/Container';

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

const places = [
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
            <Card variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: 'text.primary' }}>{place.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary'}}>{place.address}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}
