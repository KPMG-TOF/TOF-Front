import React, { useState, useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Empty, Upload } from 'antd';
// import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';


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

  const [rfpData, setRfpData] = useState({
    "result": "success",
   
    "info": {
      "company": "KEB 하나은행",
      "cost": "제안사 제안 가격",
      "title": "KEB 하나은행 GLN(Global Loyalty Nework) 플랫폼 구축을 위한 클라우드 서비스 제안요청서"
    },
    "summary": {
      "start_date": "2018.12",
      "end_date": "2019.03",
      "subject": [
        "안정적인 클라우드 인프라 구축",
        "클라우드 기반 전자결제 서비스 구성",
        "고가용성 및 편의성을 고려한 개발 및 운영 환경 제공"
      ],
      "requirement": [
        "국제전자결제망(International Card Organizations)인 VISA 및 Master 제품군의 결제시스템 및 카드망 서비스 인프라 전반에 대한 클라우드 전환을 지원하는 서비스",
        "KEB 하나은행의 클라우드 전환 전략 및 수행 계획에 따른 클라우드 전환을 지원하는 서비스",
        "국내외 네트워크망 및 데이터센터에서 클라우드로 들어갑니다."
      ]
    }
    ,
    "reference": [
        {
            "rfp_id": 5,
            "title": "KEB 하나은행 GLN(Global Loyalty Nework) 플랫폼 구축을 위한 클라우드 서비스 제안요청서",
            "end_date": "2024-02-09T00:56:40.954433",
            "manager": "sso",
            "similarity": 29,
            'keyword' : [['클라우드 전환','시스템 개선','한국어기초사전'],['클라우드 인프라 구축', '전자결제 서비스','고가용성']]
        },
        {
            "rfp_id": 6,
            "title": "fake ref",
            "end_date": "2024-02-09T00:56:40.954433",
            "manager": "sso",
            "similarity": 71,
            'keyword' : [['클라우드 전환','시스템 개선','한국어기초사전'],['클라우드 인프라 구축', '전자결제 서비스','고가용성']]
        },
        {
            "rfp_id": 6,
            "title": "fake ref",
            "end_date": "2024-02-09T00:56:40.954433",
            "manager": "sso",
            "similarity": 47,
            'keyword' : [['클라우드 전환','시스템 개선','한국어기초사전'],['클라우드 인프라 구축', '전자결제 서비스','고가용성']]
        },
        {
            "rfp_id": 5,
            "title": "fake ref",
            "end_date": "2024-02-09T00:56:40.954433",
            "manager": "sso",
            "similarity": 89,
            'keyword' : [['클라우드 전환','시스템 개선','한국어기초사전'],['클라우드 인프라 구축', '전자결제 서비스','고가용성']]
        }
    ],
    "tasks": {
        "priority": [
            {
                "order": 15,
                "title": "priority"
            },
            {
                "order": 6,
                "title": "priority"
            }
        ],
        "competivity": [
            {
                "order": 246,
                "title": "competivity"
            },
            {
                "order": 918,
                "title": "competivity"
            },
            {
                "order": 784,
                "title": "competivity"
            },
            {
                "order": 465,
                "title": "competivity"
            }
        ],
        "workforce": [
            {
                "count": 734,
                "category": "workforce"
            },
            {
                "count": 595,
                "category": "workforce"
            },
            {
                "count": 973,
                "category": "workforce"
            }
        ]
    }
});

  
  const [reference, setReference] = useState([
    {
      title: "특성화 트랙 사업 제안 요청서",
      end_date: "2022.08.29",
      manager: "이수민",
      index :"1",
      link : "http://localhost:3030/rfp/1"
    },
    {
      title: "공학 인재 양성 사업 제안 요청서",
      end_date: "2022.08.29",
      manager: "이지원",
      index :"2",
      link : "http://localhost:3030/rfp/2"
    },
    {
      title: "과학 중점 학교 사업 제안 요청서",
      end_date: "2022.08.29",
      manager: "시게타 하루아",
      index:"3",
      link : "http://localhost:3030/rfp/3"
    },
  ]);


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


  const [openPopup, setOpenPopup] = useState(false);
  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };


  

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        TOF DashBoard
      </Typography>

      

      {/* {rfpData ? ( */}
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject={"company"}
            requirement={rfpData.info.company}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject={"cost"}
            requirement={rfpData.info.cost}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject={"title"}
            requirement={rfpData.info.title}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject="start_date"
            requirement={rfpData.summary.start_date}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="RFP Summary"
            list={rfpData.summary}
            list2 = {rfpData.info}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Similarity"
            list={rfpData.reference}
          />
        </Grid>


        <Grid xs={12} md={6} lg={12}>
          <AppAnalysis 
            title="Analysis" 
            list={reference}
          />
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
            <AppNewsUpdate2 title="Output" list={reference} />
          </Grid>

          <Dialog open={openPopup} onClose={handlePopup} maxWidth="md">
            <DialogTitle>산출물 등록하기</DialogTitle>
            <DialogContent>
              <RFPForm setReference={setReference} handleClosePopup={handlePopup} rfsetIndex={rfsetIndex} rfindex={rfindex}/>
          
            </DialogContent>
          </Dialog>
        </Grid>
       


        {/* <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
            </Grid> */}

          </Grid>
          {/* ) : (
        <Grid container spacing={3} style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Grid xs={12} sm={6} md={6}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned
                files.
              </p>
            </Dragger>
            <button type="button" onClick={handleRef_analysis}>분석하기</button>
          </Grid>
        </Grid>
      )} */}
    </Container>
  );
}