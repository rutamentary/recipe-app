import { Col, List, Row } from "antd";
import { ResultProps } from "../../App";
import Result from "../Result";

interface ResultsWapperProps {
    recipes: ResultProps[],
    handleQueryRecipe:  (id: number) => Promise<void>
}

const ResultsWrapper: React.VFC<ResultsWapperProps> = ({recipes, handleQueryRecipe}) => {
    return (
        <Row>
          <Col span={8} offset={8}>
            <List
              dataSource={recipes}
              renderItem={(item:ResultProps, index) => (
                <List.Item>
                  <Result image={item.image} id={item.id} title={item.title} onClick={() => handleQueryRecipe(item.id)}></Result>
                </List.Item>
              )} />
          </Col>
        </Row>
    );
};


export default ResultsWrapper;