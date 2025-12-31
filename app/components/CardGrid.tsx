import Grid from '@mui/material/Grid'
import * as Place from '~/common/Place'
import PlaceCard from '~/components/PlaceCard'

// See breakpoints at https://m2.material.io/design/layout/responsive-layout-grid.html#breakpoints 
const responsiveGridColumns = {xs: 4, sm: 8, md: 12}

export interface CardGridProps {
    p: Place.Place[]
}

export default function CardGrid({p}: CardGridProps) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={responsiveGridColumns}>
      {
        p.map((place, idx) => (
          <Grid key={idx} size={{ xs: 2, sm: 4, md: 4 }}>
            <PlaceCard {...place} />
          </Grid>
        ))
      }
    </Grid>
  );
}
