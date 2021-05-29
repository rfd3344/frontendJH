import React, { useContext } from 'react';
import { styled, Grid, Card } from '@material-ui/core';

export default function ProfileCard({ userInfo }) {
  console.warn(userInfo)
  return (
    <Grid item xs={4}>
      <Card>
        1111
        {userInfo.name}
      </Card>
    </Grid>
  );
}
