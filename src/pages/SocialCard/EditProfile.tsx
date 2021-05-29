import React from 'react';
import { Button } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Dialog from '@/components/Dialog';

export default function EditProfile({ userInfo } : any) {
  console.warn(userInfo)
  return (
    <Dialog title="Edit Card">
      {({ Control, Modal }) => (
        <>
          <Control>
            <Edit />
          </Control>
          <Modal>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.

          </Modal>
        </>
      )}

    </Dialog>
  );
}
