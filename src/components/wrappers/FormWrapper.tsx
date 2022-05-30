import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Col, List, Row, Typography } from "antd";
import Form from "../Form";

interface FormWrapperProps {
    setIngredients: React.Dispatch<React.SetStateAction<string[]>>,
    ingredients: string[],
    removeIngredients: (index: number) => void,
    handleQueryRecipes: () => Promise<void>
};

const FormWrapper: React.VFC<FormWrapperProps> = ({ingredients, setIngredients, removeIngredients, handleQueryRecipes}) => {
    return (
        <>
            <Form setIngredients={setIngredients} />
            <Row>
                <Col span={8} offset={8}>
                    <List
                        dataSource={ingredients}
                        renderItem={(item, index) => (
                        <List.Item>
                            <Typography.Text mark>{item}</Typography.Text>
                            <CloseCircleOutlined onClick={() => removeIngredients(index)} />
                        </List.Item>
                        )}
                    />
                    <Button
                        type="primary"
                        onClick={handleQueryRecipes}
                    > Call API
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default FormWrapper;