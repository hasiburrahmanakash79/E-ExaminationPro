
const Views = ({ postComments }) => {
    return (
        <div className="text-center">
            <span className="  text-xs">{postComments?.replies?.length + 2}</span>
            <p className="  text-sm">Views</p>
        </div>
    );
};

export default Views;