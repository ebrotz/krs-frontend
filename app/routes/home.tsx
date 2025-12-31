import type { Route } from "./+types/home";
import ButtonAppBar from './appbar';
import Container from '@mui/material/Container';
import * as Place from '~/common/Place'
import CardGrid from "~/components/CardGrid";


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
        <CardGrid p={places} />
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
