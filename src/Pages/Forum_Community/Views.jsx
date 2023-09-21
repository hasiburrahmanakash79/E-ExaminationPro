
const Views = ({ postComments }) => {
    return (
        <div className="text-center">
            <span className="text-slate-400 text-xs">{postComments?.replies?.length + 2}</span>
            <p className="text-slate-500 text-sm">Views</p>
        </div>
    );
};

export default Views;