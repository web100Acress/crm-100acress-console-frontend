import React from 'react';
import { Row, Tabs, Col } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All Leads',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'New Leads',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'In Progress Leads',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Converted Leads',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '5',
    label: 'Unconverted Leads',
    children: 'Content of Tab Pane 4',
  },
  {
    key: '6',
    label: 'Past Leads',
    children: 'Content of Tab Pane 5',
  }
];

const SuperAdminLeads: React.FC = () =>
  <Row gutter={[16,16]} style={{margin: '0 auto'}}>
    <Col span={24}>
      <Tabs
        className="bg-white h-screen"
        style={{ padding: '16px', borderRadius: '10px' }}
        defaultActiveKey="1"
        items={items}
        size='large'
        onChange={onChange}
      />
    </Col>
  </Row>;

export default SuperAdminLeads;