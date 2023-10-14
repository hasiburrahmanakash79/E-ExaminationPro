import { useState } from "react";

const Likes = () => {
    const [likeCount, setLikeCount] = useState(null);
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        if (!liked) {
            setLikeCount(likeCount + 1);
            setLiked(true);
        } else {
            setLikeCount(likeCount - 1);
            setLiked(false);
        }
    };

    return (
        <div className="text-sm">
            <span className="pr-1 font-extrabold text-base  "> {likeCount}</span>
            <button onClick={handleLikeClick} className="text-xs">
                {liked ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
};

export default Likes;
