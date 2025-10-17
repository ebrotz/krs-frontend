import * as React from 'react'
import type { Route } from "./+types/home";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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
      <div className="card-container">

        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5">Place one</Typography>
              <Typography variant="body2">1111 1st St</Typography>
            </CardContent>
          </React.Fragment>
        </Card>
        
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5">Place two</Typography>
              <Typography variant="body2">2222 2nd St</Typography>
            </CardContent>
          </React.Fragment>
        </Card>
      </div>
    </div>
  );
}
