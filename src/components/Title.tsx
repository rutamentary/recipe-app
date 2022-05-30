import {Col, Row} from 'antd';

const Title: React.FC = () => {
    return (
        <Row>
            <Col span={8} offset={8}>
                <h3>What's for dinner?</h3>
            </Col>
        </Row>
    )
};

export default Title;