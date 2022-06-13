import { LeftCircleOutlined } from "@ant-design/icons";
import { Button, Row } from "antd";
import { RecipeProps } from "../../App";
import Recipe from "../Recipe";

interface RecipeWrapperProps {
    handleSetRecipe:  React.Dispatch<React.SetStateAction<RecipeProps | undefined>>,
    recipe: RecipeProps
};

const RecipeWrapper: React.VFC<RecipeWrapperProps> = ({handleSetRecipe, recipe}) => {
    return (
    <>
        <Row>
            <Button type="link" onClick={() => handleSetRecipe(undefined)}>
                <LeftCircleOutlined />
            </Button>
        </Row>
        <Recipe instructions={recipe.instructions} image={recipe.image} />
    </>
    );
}

export default RecipeWrapper;