const Results: React.VFC<{image: string, id: number}> = ({image, id}) => {       
    return <img src={image}></img>;
};

export default Results;