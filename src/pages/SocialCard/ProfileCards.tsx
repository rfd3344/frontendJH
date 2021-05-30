import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import useFetch from '@/hooks/useFetch';
import { connect } from 'react-redux';
import { initialUsers } from '@/actions/socialCard';
import { ProfileCardsType } from '@/schemas/socialCard';
import ProfileCard from './ProfileCard';

const ProfileCards = ({ users, dispatch }: ProfileCardsType) => {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
  useEffect(() => {
    if (!data) return;

    const newUsers = data.map((user: any) => ({
      id: user?.id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      website: user?.website,
      suite: user?.address?.suite,
      street: user?.address?.street,
      city: user?.address?.city,
      zipcode: user?.address?.zipcode,
    }));
    dispatch(initialUsers(newUsers));
  }, [data]);

  return (
    <Grid container spacing={3}>
      {
        users && users.map((item: any) => (
          <ProfileCard key={item.id} userInfo={item} />
        ))
      }
    </Grid>
  );
};

const mapState = ({ socialCard }: any) => ({
  users: socialCard.users,
});

export default connect(mapState)(ProfileCards);
