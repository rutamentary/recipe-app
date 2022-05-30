import { Image} from "antd";
import { ResultProps } from '../App';

interface ResultsProps extends ResultProps {
    onClick: () => Promise<void>
}

const Result: React.VFC<ResultsProps> = ({image, title, onClick}) => {
    return (
        <>
            <Image src={image} preview={false} onClick={(e) => {e.preventDefault(); onClick()}} />
            <b>{title}</b>
        </>
    );
};

export default Result;