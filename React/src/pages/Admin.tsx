import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

export default (): React.ReactNode => (
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
        <SmileTwoTone /> Dac Phuc <HeartTwoTone twoToneColor="#eb2f96" /> You
      </Typography.Title>
    </Card>
  </PageContainer>
);
