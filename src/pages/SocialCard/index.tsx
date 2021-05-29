import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ProfileCards from './ProfileCards';


export default function SocialCard() {
  return (
    <section className="SocialCard">
      <Grid container justify="space-between" alignItems="center">
        <h1> Social Card</h1>
        <div>
          <Button variant="contained" color="primary" size="medium">
            Add New
          </Button>
        </div>

      </Grid>
      <ProfileCards />
    </section>
  );
}
