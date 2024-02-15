import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, Button, message, Upload } from 'antd';
import { UploadOutlined  } from '@ant-design/icons';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';
import { ref_file_upload } from 'src/apis/rfplist';




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


export const FileInput = styled.input.attrs({ type: 'file' })`
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

export const Preview = styled.label`
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

export const PreviewMessage = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0 10px;
`;

export const PreviewDescription = styled.p`
  margin: 0;
  font-size: 14px;
`;

const FileInfo = ({ name, size, type }) => (
  <div>
    <p>Name: {name}</p>
    <p>Size: {size}</p>
    <p>Type: {type}</p>
  </div>
);


const RFPpopup = ({ handlePopup, openPopup }) => {

  const [uploadfile, setUploadFile] = useState(null);
  const [rfpData, setRfpData] = useState(null);

  const [isActive, setActive] = useState(false);
  const [rfpfileinfo, setrfpfileinfo] = useState(null);

  const setFileInfo = (file) => {
    const { name, size: byteSize, type } = file;
    const size = `${(byteSize / (1024 * 1024)).toFixed(2)} MB`; 
    setrfpfileinfo({ name, size, type });  // name, size, type 정보를 uploadedInfo에 저장
    setUploadFile(file);
  };

  const handleRef_analysis = async () => {
    if (uploadfile===null) {
      message.warning("No file uploaded.");
      return;
    }
    const data = { "file": uploadfile };
    try {
      const response = await ref_file_upload(data);
      if (response.data.result === "success") {
        console.log("res: ", response.data.result);
        setRfpData(response.data);
        message.success("RFP 분석 성공.");
        
      } else {
        message.warning("RFP 분석 실패. 다시 시도해주세요.");
      }
      handlePopup();
       
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleDragEnter = (e) => {
    console.log("Drag Enter");
    setActive(true);
  };
  
  const handleDragLeave = (e) => {
    console.log("Drag Leave");
    setActive(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault(); // 필수: 드래그 오버 시 기본 이벤트 방지
    console.log("Drag Over");
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    console.log("Drop");
    setActive(false);
  
    const file = e.dataTransfer.files[0];
    setFileInfo(file);
  };
  
  const handleUpload = (e) => {
    const file = e.target.files[0]; // Corrected access to the file
    setFileInfo(file);
  };

  

  return (
    
    <>
    {openPopup && 
      <ModalContainer>
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
      </ModalContainer>
       }
    </>
          
  );
};

RFPpopup.propTypes = {
  handlePopup: PropTypes.func.isRequired,
  openPopup: PropTypes.bool.isRequired,
  FileInfo: PropTypes.func.isRequired,
};

FileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default RFPpopup;