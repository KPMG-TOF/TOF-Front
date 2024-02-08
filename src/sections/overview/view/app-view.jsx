import React, { useState, useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Empty, Upload } from 'antd';
import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import { ref_analysis } from 'src/apis/dashboard';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppWidgetSummary from '../app-widget-summary';
import AppAnalysis from '../app-analysis';
import AppTrafficBySite from '../app-traffic-by-site';
// import { Content } from 'antd/es/layout/layout';


const { Dragger } = Upload;

// ----------------------------------------------------------------------

export default function AppView() {

  const [rfpData, setRfpData] = useState({
    "result":"success",

    "info": {
        "company": "sso",
        "industry": "dev",
        "cost": 12342,
        "title": "2024-1학기-융합필수-교과목-개설-여부2024.01.30.-17시-기준_공지.xlsx"
    },
    "summary": {
        "size": 5453,
        "start_date": "2024-02-03T00:07:41.508158",
        "end_date": "2024-02-03T00:07:41.508158",
        "subject": [
            "클라우드가 필요함",
            "클라우드가 궁금함",
            "어쩌구"
        ],
        "requirement": [
            "보안이 필요함",
            "보안이 궁금함",
            "어쩌구"
        ]
    },
    "reference": [
        {
            "rfp_id": 2,
            "title": "fake ref",
            "end_date": "2024-02-03T00:53:59.488754",
            "manager": "sso",
            "similarity": 44
        }
    ],
    "tasks": {
        "priority": [
            {
                "order": 2,
                "title": "priority"
            }
        ],
        "competivity": [
            {
                "order": 941,
                "title": "competivity"
            },
            {
                "order": 603,
                "title": "competivity"
            },
            {
                "order": 460,
                "title": "competivity"
            },
            {
                "order": 665,
                "title": "competivity"
            }
        ],
        "workforce": [
            {
                "count": 910,
                "category": "workforce"
            },
            {
                "count": 225,
                "category": "workforce"
            },
            {
                "count": 290,
                "category": "workforce"
            }
        ]
    }
});
  const [fileList, setFileList] = useState([]);

  let reference = [
    // {
    //   title : "특성화 트랙 사업 제안 요청서",
    //   time : "2022.08.29",
    //   name : "이수민",
    //   num : "82.1%"
    // },
    // {
    //   title : "공학 인재 양성 사업 제안 요청서",
    //   time : "2022.08.29",
    //   name : "이지원",
    //   num : "53.1%"
    // },
    // {
    //   title : "과학 중점 학교 사업 제안 요청서",
    //   time : "2022.08.29",
    //   name : "시게타 하루아",
    //   num : "30.1%"
    // },
  ]

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

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        TOF DashBoard
      </Typography>

      

      {rfpData ? (
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject={rfpData.summary.subject[0]}
            requirement={rfpData.summary.requirement[0]}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject={rfpData.summary.subject[1]}
            requirement={rfpData.summary.requirement[1]}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject={rfpData.summary.subject[2]}
            requirement={rfpData.summary.requirement[2]}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            subject="RFP Name"
            requirement="이 부분 지금 하드코딩"
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="RFP Summary"
            list={rfpData.summary}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Reference"
            list={rfpData.reference}
          />
        </Grid>


        <Grid xs={12} md={6} lg={12}>
          <AppAnalysis
            title="Analysis"
            list={reference}
          />
        </Grid>


        <Grid xs={12} md={6} lg={12}>
          <AppNewsUpdate
            title="Output"
            list={reference}
          />
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
      ): (
          <Grid container spacing={3} style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Grid xs={12} sm={6} md={6}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk uploads. Strictly prohibited from uploading company data or other
              banned files.
            </p>
          </Dragger>
          </Grid>
          </Grid>
         
      )}

    </Container>
  );
}