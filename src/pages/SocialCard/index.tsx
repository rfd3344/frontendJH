import React from 'react';
import { Grid } from '@material-ui/core';
import ProfileCards from './ProfileCards';
import EditProfile from './EditProfile';


export default function SocialCard() {
  return (
    <section className="SocialCard">
      <Grid container justify="space-between" alignItems="center">
        <h1> Social Card</h1>
        <div>
          <EditProfile isCreateNew title="Create New" />
        </div>

      </Grid>
      <ProfileCards />
    </section>
  );
}
