import React from 'react';
import { Edit } from '@material-ui/icons';
import Dialog from '@/components/Dialog';

export default function EditProfile({ userInfo } : any) {
  console.warn(userInfo)
  return (
    <Dialog>
      <Edit />
    </Dialog>
  );
}
