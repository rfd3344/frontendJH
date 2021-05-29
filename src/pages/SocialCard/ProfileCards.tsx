import React from 'react';
import { styled, Grid } from '@material-ui/core';
import useFetch from '@/hooks/useFetch';
import ProfileCard from './ProfileCard';

export default function SocialCard() {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <Grid container spacing={3}>

      {
        data && data.map((item: any) => (
          <ProfileCard key={item.id} userInfo={item} />
        ))
      }
    </Grid>
  );
}
