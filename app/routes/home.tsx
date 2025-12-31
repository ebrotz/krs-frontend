import * as React from 'react'
import type { Route } from "./+types/home";
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ButtonAppBar from './appbar';
import Container from '@mui/material/Container';
import { CardActions, CardHeader, IconButton, Menu } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuItem from '@mui/material/MenuItem';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

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

interface Place {
  title: string
  address: string
}

const places: Place[] = [
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

function PlaceCard(p: Place) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      {/** TODO Add CardMedia, if available. Would be something like a banner picture. */}
      {/** Admin menu should only be visible if the user actually has admin */}
      <CardHeader action={
        <AdminMenu/>
      }>
      </CardHeader>
      <CardContent>
        <Typography variant="h5" sx={{ color: 'text.primary' }}>{p.title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}}>{p.address}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          {/* TODO Should be dynamic depending on if the place is in the user's favorites */}
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

// AdminMenu returns the element corresponding to the
// administrator menu in the card header.
function AdminMenu(): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <IconButton onClick={handleClick}>
          <AdminPanelSettingsIcon/>
        </IconButton>
        <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Update</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </div>
  );
}
