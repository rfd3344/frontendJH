import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledBackdrop = withStyles(() => ({
  root: {
    zIndex: 10,
    color: '#fff',
  },
}))(Backdrop);

function Loading({ open }: { open: boolean}) {
  return (
    <>
      <StyledBackdrop open={open}>
        <CircularProgress color="primary" />
      </StyledBackdrop>
    </>
  );
}

export default Loading;
