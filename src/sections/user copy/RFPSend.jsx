import React, { useState } from 'react';
import { Modal, Button, message, Upload } from 'antd';
import PropTypes from 'prop-types';
import { InboxOutlined } from '@ant-design/icons';

const RFPsend = ({ openPopup, handlePopup }) => {
  const [fileList, setFileList] = useState([]);

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // Update with your actual file upload API endpoint
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

  const handleSend = () => {
    // Add your logic for sending the uploaded file data
    console.log('Sending file data:', fileList);
    // Add additional logic or API calls if needed

    // Close the popup
    handlePopup();
  };

  return (
    <Modal
      title="RFP File Upload"
      visible={openPopup}
      onCancel={handlePopup}
      footer={[
        <Button key="cancel" onClick={handlePopup}>
          Cancel
        </Button>,
        <Button key="send" type="primary" onClick={handleSend}>
          Send
        </Button>,
      ]}
    >
      <Upload.Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
        </p>
      </Upload.Dragger>
    </Modal>
  );
};

RFPsend.propTypes = {
  openPopup: PropTypes.bool.isRequired,
  handlePopup: PropTypes.func.isRequired,
};

export default RFPsend;