import { Col, Row, Image } from 'antd';
import { RecipeProps } from '../App';
import './../Recipe.css';

const Recipe: React.VFC<RecipeProps> = ({instructions, image}) => {
    console.log(instructions)
    return (
        <>
            <Row className={"image-container"}>
                <Col span={8} offset={8} >
                    <Image src={image} preview={false} />
                </Col>
            </Row>
            <Row>
                <Col offset={8} span={8} >
                    <div className="recipe-text" dangerouslySetInnerHTML={{__html:instructions}}>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Recipe;