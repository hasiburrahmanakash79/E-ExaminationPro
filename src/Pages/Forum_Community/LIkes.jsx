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
            <button onClick={handleLikeClick}>
                {liked ? 'Unlike' : 'Like'}
            </button>
            <span className="pl-1"> {likeCount}</span>
        </div>
    );
};

export default Likes;
