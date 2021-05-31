import React, { useState } from 'react';
import {
  Icon,
  Button,
  TextField,
  FormControl,
} from '@material-ui/core';
import { connect } from 'react-redux';
import CustomDialog from '@/components/CustomDialog';
import { editUser, addNewUser } from '@/actions/socialCard';
import { EditProfileType, User } from '@/schemas/socialCard';


function EditProfile({
  userInfo,
  title,
  isCreateNew,
  dispatch,
} : EditProfileType) {
  const [userDetails, setUserDetails] = useState<User | undefined>(userInfo);

  const handleSubmit = () => {
    if (isCreateNew) {
      dispatch(addNewUser(userDetails));
    } else {
      dispatch(editUser(userDetails));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDetails = { ...userDetails };
    newDetails[name] = value;
    setUserDetails(newDetails);
  };

  return (
    <>
      <CustomDialog title={title}>
        {({ Control, Modal } : any) => (
          <>
            <Control>
              {
                isCreateNew ? (
                  <Button variant="contained" color="primary" size="medium">
                    Add New
                  </Button>
                ) : <Icon>edit</Icon>
              }
            </Control>
            <Modal onOK={handleSubmit}>
              <form noValidate autoComplete="off">
                <FormControl fullWidth>
                  <TextField
                    label="name"
                    name="name"
                    value={userDetails?.name || ''}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="email"
                    name="email"
                    value={userDetails?.email || ''}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="suite"
                    name="suite"
                    value={userDetails?.suite || ''}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="street"
                    name="street"
                    value={userDetails?.street || ''}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="city"
                    name="city"
                    value={userDetails?.city || ''}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="zipcode"
                    name="zipcode"
                    value={userDetails?.zipcode || ''}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="phone"
                    name="phone"
                    value={userDetails?.phone || ''}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="website"
                    name="website"
                    value={userDetails?.website || ''}
                    onChange={handleChange}
                  />
                </FormControl>
              </form>

            </Modal>
          </>
        )}
      </CustomDialog>
    </>
  );
}



export default connect()(EditProfile);
