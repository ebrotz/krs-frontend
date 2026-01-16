import type { Route } from "./+types/home";
import ButtonAppBar from './appbar';
import Container from '@mui/material/Container';
import * as Place from '~/common/Place'
import CardGrid from "~/components/CardGrid";
import axios from 'axios'
import * as react from 'react'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kurse" },
    { name: "Kurse", content: "Welcome to Kurse!" },
  ];
}

export default function Home() {
  const [places, setPlaces] = react.useState<Place.Place[]>([])

  // The browser is launching this request.
  axios.get('http://localhost:8080/places')
    .then((response) => {
      let d: Place.Place[] = response.data
      setPlaces(d)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div>
      <ButtonAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: '1em', gap: 4 }}
      >
        <CardGrid p={places} />
      </Container>
    </div>
  )
}

const places: Place.Place[] = [
  { name: "Place One", description: "", phone: "", website: ""},
  { name: "Place Two", description: "", phone: "", website: "" },
  { name: "Place Three", description: "", phone: "", website: "" },
  { name: "Place Four", description: "", phone: "", website: "" },
  { name: "Place Five", description: "", phone: "", website: "" },
  { name: "Place Six", description: "", phone: "", website: "" },
  { name: "Place Seven", description: "", phone: "", website: "" },
  { name: "Place Eight", description: "", phone: "", website: "" },
  { name: "Place Nine", description: "", phone: "", website: "" },
  { name: "Place Ten", description: "", phone: "", website: "" }
]
