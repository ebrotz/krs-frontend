import * as React from 'react'
import type { Route } from "./+types/home";
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kurse" },
    { name: "Kurse", content: "Welcome to Kurse!" },
  ];
}

export default function Home() {
  return (
    <div>
      <SearchableCardPlane />
    </div>
  )
}

function SearchableCardPlane() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <PlaceCard title="Place one" address="1111 1st St" />
            <PlaceCard title="Place two" address="2222 2nd St" />
        </Grid>
      </Box>
    </div>
  );
}

interface PlaceSummary {
  title: string;
  address: string;
}

function PlaceCard(s: PlaceSummary) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <React.Fragment>
        <CardContent>
          <Typography variant="h5">{s.title}</Typography>
          <Typography variant="body2">{s.address}</Typography>
        </CardContent>
      </React.Fragment>
    </Card>
  );
}
