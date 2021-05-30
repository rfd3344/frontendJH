import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CustomDialog({ title = '', children }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Control = useCallback(({ children, ...rest }) => (
    <span onClick={handleClickOpen} {...rest}>
      { children }
    </span>
  ), [children]);

  const Modal = useCallback(({ children, ...rest }) => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      { ...rest }
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent> {children} </DialogContent>
    </Dialog>

  ), [children]);

  return children({
    Control,
    Modal,
  });
}
