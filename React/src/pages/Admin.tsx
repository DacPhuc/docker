import React, { useState, useEffect } from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { getData } from '@/services/login';
import { PageContainer } from '@ant-design/pro-layout';

const Admin: React.FC<{}> = () => {
  const [mess, setMess] = useState();

  const fetchData = async () => {
    const result = await getData();
    setMess(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageContainer>
      <Card>
        <Alert
          message="Hello World"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> Dac Phuc Nguyen <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          {mess}
        </Typography.Title>
      </Card>
    </PageContainer>
  );
};

export default Admin;
