'use client'
import React from 'react';
import { Layout, message, theme, Upload, UploadProps } from 'antd';
import HeaderComponent from '@/components/header';
import VersionComponent from '@/components/versioning';
import { InboxOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;
const { Dragger } = Upload;


const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
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


const Home: React.FC = () => {

    return (
        <>
            <HeaderComponent />
            <Content style={{ margin: '20px 50px 0' }}>
                <div style={{ height: '70vh' }}>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                            banned files.
                        </p>
                    </Dragger>
                </div>
            </Content >
            <Footer style={{ textAlign: 'center' }}>
                KeluarMasuk ©{new Date().getFullYear()}
                <VersionComponent />
            </Footer>
        </>
    )
};

export default Home;