import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, Button, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Grid from '@mui/material/Unstable_Grid2';
import { ref_analysis } from 'src/apis/dashboard';

const ModalContainer = styled.div`
  min-width: 66%;
  min-height: 63%;
  left: calc(50% - (66% / 2));
  top: calc(50% - (63% / 2));
  position: fixed;
  z-index: 9999;
`;


const TitleContainer = styled.div`
  width: 100%;
  cursor: move;
`;


const { Dragger } = Upload;

const RFPpopup = ({ handlePopup, openPopup }) => {

  const [fileList, setFileList] = useState([]);
  const [rfpData, setRfpData] = useState(null);


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

  return (
    <>
      <ModalContainer>
        <Modal
          width={1000}
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
                </Grid>
              </Grid>
      </Modal>
      </ModalContainer>
    </>
  );
};

RFPpopup.propTypes = {
  handlePopup: PropTypes.func.isRequired, // handlePopup prop의 유효성을 검사하는 부분 추가
  openPopup: PropTypes.bool.isRequired, // openPopup prop의 유효성을 검사하는 부분 추가
};

export default RFPpopup;
