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
      "end_date": "2019.3",
      "subject": [
      "안정적인 클라우드 인프라 구축",
      "클라우드 기반 전자결제 서비스 구성",
      "고가용성 및 편의성을 고려한 개발 및 운영 환경 제공"
      ],
      "requirement": [
      "국내외 네트워크망 확장 연계 고려",
      "물리적/논리적 시스템 구성에 있어 관련 국내 감독규정 준수",
      "인프라 리소스 및 로그 모니터링 진단 툴 제공",
      "교육/운영지원/기술이전 등 기업 활동 지원",
      "프로젝트 관리 및 품질보증 방안 제시",
      "리스크 관리방안 제시"
      ]

    }
    ,
    "reference": [
      {
        "rfp_id": 4,
        "title": "2022년 개방형 한국어 통합 사전 시스템 클라우드 전환",
        "end_date": "계약 후~160일",
        "manager": "박시현",
        "keyword": [
            "클라우드 전환",
            "클라우드",
            "개선"
        ],
        "similarity": 80.0
    },
        {
          "rfp_id": 3,
          "title": "24년 사이버보안 취약점 진단사업",
          "end_date": "계약일로부터 2024년 12월 20일까지",
          "manager": "백승현",
          "keyword": [
              "프로젝트 관리",
              "보안"
          ],
          "similarity": 50.0

        },

      {
        "rfp_id": 9,
        "title": "KTOA 인터넷 트래픽 정산 시스템 H/W구축",
        "end_date": "계약일로부터 6개월",
        "manager": "고서연",
        "keyword": [
            "네트워크",
            "연동"
        ],
        "similarity": 40.0
    },
    {
      "rfp_id": 10,
      "title": "연구용 서버 취약점 보안진단 솔루션 구매",
      "end_date": "계약 체결일로부터 3개월이내",
      "manager": "김병권",
      "keyword": [
          "솔루션",
          "시스템"
      ],
      "similarity": 30.0
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
      title: "클라우드 인프라 구축 사업 계획서",
      end_date: "2022.08.29",
      manager: "이수민",
      index :"1",
      link : "http://localhost:3030/rfp/1"
    },
    {
      title: "하나은행 RFP 사업 요약서",
      end_date: "2022.09.15",
      manager: "이지원",
      index :"2",
      link : "http://localhost:3030/rfp/2"
    }
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
              subject="company"
              requirement={rfpData.info.company}
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
    
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject="cost"
            requirement={rfpData.info.cost}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject="title"
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

        <Grid xs={12} md={4} lg={4}>
          <AppOrderTimeline
            title="RFP Summary"
            list={rfpData.summary}
            list2 = {rfpData.info}
          />
        </Grid>

        <Grid xs={12} md={8} lg={8}>
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
            <AppNewsUpdate2 title="산출물" list={reference} />
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