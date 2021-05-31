import React from 'react';
import {
  styled,
  Grid,
  Icon,
  Card,
  Avatar,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import userIcon from '@/static/userIcon.png';
import EditProfile from './EditProfile';

const AvatorGrid = styled(Grid)({
  background: 'linear-gradient(to right bottom,#f398b7,#fecf84)',
  minHeight: '150px',
});

const StyledAvator = styled(Avatar)({
  width: '80px',
  height: '80px',
});

export default function ProfileCard({ userInfo } : any) {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <AvatorGrid container justify="center" alignItems="center">
          <StyledAvator alt={userInfo.name} src={userIcon} />
        </AvatorGrid>
        <CardContent>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <h1>{userInfo.name}</h1>
            </Grid>
            <Grid item>
              <CardActionArea>
                <EditProfile title="Edit Profile" userInfo={userInfo} />
              </CardActionArea>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="div">
            <p>
              <Icon>mail_outline</Icon>
              { userInfo.email }
            </p>
            <p>
              <Icon>contacts</Icon>
              { userInfo?.suite }
              ,
              { userInfo?.street }
              ,
              <br />
              { userInfo?.city }
              ,
              { userInfo?.zipcode }
            </p>
            <p>
              <Icon>phone_enabled</Icon>
              { userInfo.phone }
            </p>
            <p>
              <Icon>language</Icon>
              { userInfo.website }
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
