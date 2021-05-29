import React from 'react';
import { styled, Grid, Button } from '@material-ui/core';
import ProfileCards from './ProfileCards';

const FlexGrid = styled(Grid)({
  display: 'flex',
});

export default function SocialCard() {
  return (
    <section className="SocialCard">
      <FlexGrid justify="space-between" alignItems="center">
        <h1> Social Card</h1>
        <div>
          <Button variant="contained" color="primary" size="medium">
            Add New
          </Button>
        </div>

      </FlexGrid>
      <ProfileCards />
    </section>
  );
}
