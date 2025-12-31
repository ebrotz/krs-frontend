import * as Place from '~/common/Place'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActions, CardHeader, IconButton } from '@mui/material';
import AdminMenu from '~/components/AdminMenu';
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function PlaceCard(p: Place.Place) {
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
