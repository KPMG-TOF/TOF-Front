// RFPForm.js

import React, { useState,useEffect } from 'react';
import { Grid, TextField, Button, Stack,  Radio } from '@mui/material';
import Iconify from 'src/components/iconify';
import PropTypes from 'prop-types';

import {linkoutput, fileoutput} from 'src/apis/dashboard'
import {RFPsend} from './RFPSend';
import styled from 'styled-components';

const ModalContainer = styled.div`
  min-width: 66%;
  min-height: 63%;
  left: calc(50% - (66% / 2));
  top: calc(50% - (63% / 2));
  position: fixed;
  z-index: 100;
`;


const TitleContainer = styled.div`
  width: 100%;
  cursor: move;
`;


const FileInput = styled.input.attrs({ type: 'file' })`
  display: none;

  &::file-selector-button {
    font-size: 14px;
    background: #fff;
    border: 1px solid #08c;
    border-radius: 12px;
    padding: 24px 32px;
    cursor: pointer;
  }
`;

const Preview = styled.label`
  width: 350px;
  height: 160px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 3px dashed #eee;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 101;

  &:hover {
    border-color: #08c;
  }

  &.active {
    background-color: #efeef3;
    border-color: #08c;
  }
`;

const RFPForm = ({ setReference , handleClosePopup, rfsetIndex, rfindex}) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const [title, setTitle] = useState('Title');
  const [end_date, setEndDate] = useState(formattedDate);
  const [manager, setManager] = useState('Writer');
  const [openPopup, setOpenPopup] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(true);
  const [showLinkUpload, setShowLinkUpload] = useState(false);
  const [fileLink , setFileLink] = useState(" ");
  const [reffile, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUploadClick = () => {
    setShowFileUpload(!showFileUpload);
  };

  const handleLinkUpload = () => {
    setShowLinkUpload(!showLinkUpload);
  }

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };

  RFPForm.propTypes = {
    setReference: PropTypes.func.isRequired,
    handleClosePopup: PropTypes.func.isRequired,
  };

  const formSubmit = () => {
    // Create an object representing the form data
    const link = `http://localhost:3030/${rfindex}`;
    const formData = {
      title,
      end_date,
      manager,
      rfindex,
    };
  
  
    if (showFileUpload) {
      const fileInput = document.getElementById('file-upload');
      const rfpData = {
        file: reffile,
        date: end_date,
        writer: manager,
        rfp_id: rfindex,
      };
      
      formData.file = fileLink

      console.log('RFP Data:', rfpData);
      fileoutput(rfpData);
    }
  
    if (showLinkUpload) {
      const rfpData = {
        date: end_date,
        writer: manager,
        rfp_id: rfindex,
      };
  
      // Add link property if showLinkUpload is true
     
      rfpData.link = link;
      formData.link = link;
  
      linkoutput(rfpData);
    }
    console.log("file",reffile)
    setReference((prevReference) => [...prevReference, formData]);
    rfsetIndex((prevIndex) => prevIndex + 1);
    handleClosePopup();
  };


  return (
    <Grid >
     <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} >
        <TextField
          label="산출물 제목"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="날짜"
          fullWidth
          margin="normal"
          value={end_date}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="작성자"
          fullWidth
          margin="normal"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
        />
      </Grid>

      </Grid>

      {/* Checkbox */}
      <Radio    
          onChange={handleFileUploadClick}
          checked={showFileUpload}
          name="radio-buttons"

      />
     File Upload
      <Radio
          onChange={handleLinkUpload}
          checked={showLinkUpload}
          name="radio-buttons"

      />
      Link


     {showLinkUpload &&( <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <div
          style={{
            backgroundColor: '#f0faff', // Light blue background color
            border: '1px dashed #ccc', // Dashed border
            borderRadius: '4px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginBottom : '20px',
            width: '100%',
          }}
        >
       {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="file-upload" style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', width:'100%' }}>
           
            <input
              type="text"
              placeholder="Enter Link"
              style={{
                marginLeft: '10px',
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width:'100%',
              }}
              onChange={(e) => setFileLink("/uploads/RFP1.hwp")}
            />
          </div>
        </label>  
        </div>
        
      </Stack>)}

    
     {showFileUpload &&( 
     <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
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
            <span style={{ flex: '1' }}>  
            <Iconify icon="eva:file-outline" style={{ marginRight: '5px' }} />
              Choose File
              </span>
            </div>
            </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        
      </Stack>)}
{/* {
  showFileUpload && (
    <Modal
      width={800}
      title={
        <TitleContainer>
          RFP File Analysis
        </TitleContainer>
      }
      visible={openPopup} // openPopup 상태를 visible prop으로 설정
      onCancel={handlePopup}
      footer={[
        <Button
          type="primary"
          shape="round"
          size="medium"
          onClick={handleRef_analysis}
          style={{ marginBottom: '20px' }}
          key="optimize-button"
        >
          Analysis
        </Button>,
      ]}
  >
    <Grid container spacing={3} style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <Grid xs={12} sm={6} md={6}>

    
      <Preview
        className={`${isActive ? 'active' : ''}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter} 
        htmlFor="customFileUpload" 
      >
        
        <FileInput // Changed from <input> for styled-component
          id="customFileUpload"
          onChange={handleUpload }
          accept=".pdf"
          multiple // Remove if you want to restrict to single file uploads
        />

        {rfpfileinfo && <FileInfo {...rfpfileinfo} />}
        {!rfpfileinfo && (
          <>
        <UploadOutlined style={{ fontSize: '32px', color: '#08c' }} />

        <Typography variant="body2" sx={{ mb: 2, fontSize: '14px', color: 'grey', whiteSpace:'pre-wrap', textAlign: 'center'}}>
          Click or drag file
          <br />
          to this area to upload
        </Typography>
        </>
        )}

      </Preview>
    </Grid>
          </Grid>
  </Modal>
  )
} */}


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


RFPForm.propTypes = {
  setReference: PropTypes.func.isRequired,
  handleClosePopup: PropTypes.func.isRequired,
  rfsetIndex: PropTypes.func.isRequired, 
  rfindex: PropTypes.number.isRequired, 
};

export default RFPForm;
