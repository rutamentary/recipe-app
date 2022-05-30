import { Col, Row } from 'antd';
import ReactHtmlParser from 'html-react-parser'; 

const Recipe: React.VFC<{ instructions: string}> = ({instructions}) => {
    console.log(instructions)
    return (
        <div>
            <Row>
                <Col span={8} offset={8}>
                    {ReactHtmlParser (instructions) }
                </Col>
            </Row>
        </div>
    );
};

export default Recipe;