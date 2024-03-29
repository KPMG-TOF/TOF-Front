import React, { useState, useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Empty, Upload } from 'antd';
// import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

import { rfpReference } from 'src/sections/user copy/view/reference';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { ref_analysis } from 'src/apis/dashboard';

import Iconify from 'src/components/iconify';
import RFPForm from 'src/sections/user copy/RFPForm'; // 로컬 임포트는 마지막에 위치하도록 조정
import AppOrderTimeline from '../app-order-timeline';
import AppWidgetSummary from '../app-widget-summary';
import AppAnalysis from '../app-analysis';
import {AppNewsUpdate, AppNewsUpdate2} from '../app-news-update';




// import { Content } from 'antd/es/layout/layout'; 
// 수정 file upload 부 수정, dashboard 다 된 뒤에 주석 풀어야 할 듯


const { Dragger } = Upload;


// ----------------------------------------------------------------------

export default function AppView() {

  const [fileList, setFileList] = useState([]);
  const [title, setTitle] = useState('');
  const [endDate, setEndDate] = useState('');
  const [manager, setManager] = useState('');
  const [rfindex, rfsetIndex] = useState(4); // Initialize index state with 1

  const [rfpData, setRfpData] = useState('');
  
  const [reference, setReference] = useState('');
  


  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      setFileList(info.fileList);
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const handleRef_analysis = async () => {
    const data = { rfpData };

    try {
      const response = await ref_analysis(data);
      if (response.data.result === "success") {
        console.log("res: ", response.data.result);
        setRfpData(response.data);
        message.success("RFP 분석 성공.");
      } else {
        message.warning("RFP 분석 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const initFetch = async () => {
      const urlParts = window.location.pathname.split('/'); // URL 경로를 '/' 기준으로 분리
      const id = urlParts[urlParts.length - 1]; // 마지막 부분이 '1'이 됩니다.
      
      const rfpRef = await rfpReference(id);
      setRfpData(rfpRef);
    };
  
    initFetch();
  }, []);


  const [openPopup, setOpenPopup] = useState(false);
  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };


  

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        TOF DashBoard
      </Typography>

    
      <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={3}>
        {rfpData && rfpData.info ? (
          <AppWidgetSummary
            subject="company"
            requirement={rfpData.info.company}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        ) : (
          <div>Loading</div>
        )}
      </Grid>
        <Grid xs={12} sm={6} md={3}>
          {rfpData && rfpData.info ? (
            <AppWidgetSummary
              subject="cost"
              requirement={rfpData.info.cost}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            />
          ) : (
            <div>Loading</div>
          )}
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          {rfpData && rfpData.info? (
            <AppWidgetSummary
              subject="title"
              requirement={rfpData.info.title}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />
          ) : (
            <div>Loading</div>
          )}
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          {rfpData && rfpData.info ? (
            <AppWidgetSummary
              subject="start_date"
              requirement={rfpData.summary.start_date}
              color="error"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
            />
          ) : (
            <div>Loading</div>
          )}
        </Grid>

        <Grid xs={12} md={4} lg={4}>
          {rfpData && rfpData.info ? (
            <AppOrderTimeline
              title="RFP Summary"
              list={rfpData.summary}
              list2={rfpData.info}
            />
          ) : (
            <div>Loading</div>
          )}
        </Grid>

        <Grid xs={12} md={8} lg={8}>
          {rfpData && rfpData.info ? (
            <AppNewsUpdate title="Similarity" list={rfpData.reference} />
          ) : (
            <div>Loading</div>
          )}
        </Grid>

        <Grid xs={12} md={6} lg={12}>
          {rfpData && rfpData.info ? (
            <AppAnalysis title="Analysis" list={reference} />
          ) : (
            <div>Loading</div>
          )}
        </Grid> 

        <Grid item xs={12}>
          <Grid container justifyContent="flex-end" alignItems="flex-end" mb={1}>
            <Button
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={handlePopup} // Open the Dialog when the button is clicked
            >
              산출물 등록하기
            </Button>
          </Grid>

          <Grid>
          {Array.isArray(reference) ? (
              <AppNewsUpdate2 title="Output" list={reference} />
            ) : (
              <div>Loading or provide a default value</div>
            )}
          </Grid>

          <Dialog open={openPopup} onClose={handlePopup} maxWidth="md">
            <DialogTitle>산출물 등록하기</DialogTitle>
            <DialogContent>
              <RFPForm setReference={setReference} handleClosePopup={handlePopup} rfsetIndex={rfsetIndex} rfindex={rfindex}/>
          
            </DialogContent>
          </Dialog>
        </Grid>
       

          </Grid>
    </Container>
  );
}