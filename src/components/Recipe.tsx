
const Recipe: React.VFC<{ instructions: string}> = ({instructions}) => {
    console.log(instructions)
    return (
        <div dangerouslySetInnerHTML={{__html: instructions}}>
        </div>
    );
};

export default Recipe;