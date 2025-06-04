import {UserOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Row } from 'antd'

const Settings = () => {
  return (
    <Row gutter={[16,16]} style={{margin: '0 auto'}}>
        <Col span={24}>
         <Card>
         <Avatar
    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    icon={<UserOutlined />}
  />
         </Card>
        </Col>
    </Row>
  )
}

export default Settings