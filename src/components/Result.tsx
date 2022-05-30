import { Image } from "antd"

const Result: React.VFC<{image: string, id: number, title: string, onClick: () => void}> = ({image, id, title, onClick}) => {
    return (
        <>
            <Image src={image} preview={false} onClick={(e) => {e.preventDefault(); onClick()}} />
            <b>{title}</b>
        </>
    );
};

export default Result;