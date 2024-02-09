// RFPForm.js
import React, { useState } from 'react';
import { Grid, TextField, Button, Stack, Checkbox } from '@mui/material';
import Iconify from 'src/components/iconify';
import RFPsend from './RFPSend';
import PropTypes from 'prop-types';

const RFPForm = ({ setReference , handleClosePopup}) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const [title, setTitle] = useState('Title');
  const [end_date, setEndDate] = useState(formattedDate);
  const [manager, setManager] = useState('Writer');
  const [openPopup, setOpenPopup] = useState(false);

  const [showFileUpload, setShowFileUpload] = useState(true);


  const handleFileUploadClick = () => {
    setShowFileUpload(!showFileUpload);
  };

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };

  RFPForm.propTypes = {
    setReference: PropTypes.func.isRequired,
    handleClosePopup: PropTypes.func.isRequired,
  };

  const formSubmit = () => {
    // Create an object representing the form data
    const formData = {
      title,
      end_date,
      manager,
    };

    setReference((prevReference) => [...prevReference, formData]);
    console.log('Form Data:', formData);


    handleClosePopup();
  };


  return (
    <Grid >
     <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} >
        <TextField
          label="Output Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Date"
          fullWidth
          margin="normal"
          value={end_date}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Writer"
          fullWidth
          margin="normal"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
        />
      </Grid>

      </Grid>

      {/* Checkbox */}
      <Checkbox
        label="Link"
        onChange={() => {
          // Handle checkbox change logic
        }}
      />
      Link
      <Checkbox    
          onChange={handleFileUploadClick}
          checked={showFileUpload}
      />
     File Upload
      
      

      {/* File upload */}



     {showFileUpload &&( <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <div
          style={{
            backgroundColor: '#f0faff', // Light blue background color
            border: '1px dashed #ccc', // Dashed border
            borderRadius: '4px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '200px', // Increased height
            cursor: 'pointer',
          }}
        >
          <label htmlFor="file-upload" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ flex: '1' }}>  <Iconify icon="eva:file-outline" style={{ marginRight: '5px' }} />
              Choose File</span>
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files[0];
              // Handle file upload logic here
            }}
          />
        </div>
      </Stack>)}

      {openPopup && <RFPsend openPopup={openPopup} handlePopup={handlePopup} />}
      <Grid container spacing={3} justifyContent="right">
        <Grid item xs={12} sm={2} md={5} align="right">
          <Button
            variant="contained"
            color="primary"
            onClick={handleClosePopup}
            style={{ marginTop: '10px' , marginRight:'3px', padding:'5 30px'}}
          >
            Cancel
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            onClick={formSubmit}
            style={{ marginTop: '10px' , padding:'5 30px' }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default RFPForm;
