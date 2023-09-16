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
            <span className="pr-1 font-extrabold text-base text-slate-300"> {likeCount}</span>
            <button onClick={handleLikeClick} className="text-xs">
                {liked ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
};

export default Likes;

// import { useState, useEffect } from "react";

// const Likes = ({ postId, userEmail }) => {
//     const [likeCount, setLikeCount] = useState(null);
//     const [liked, setLiked] = useState(false);

//     useEffect(() => {
//         fetch(`http://localhost:4000/forumPost/${postId}`)
//             .then((response) => response.json())
//             .then((data) => setLikeCount(data.likeCount))
//             .catch((error) => console.error('Error fetching like count:', error));

//     }, [postId]);

//     const handleLikeClick = () => {
//         const action = liked ? 'unlike' : 'like';

//         fetch(`http://localhost:4000/forumPost/${postId}/${action}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email: userEmail }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 setLikeCount(data.likeCount);
//                 setLiked(!liked);
//             })
//             .catch((error) => console.error(`Error ${action}ing post:`, error));
//     };

//     return (
//         <div className="text-sm">
//             <span className="pr-1 font-extrabold text-base text-slate-300">{postId?.likeCount?.length}</span>
//             <button onClick={handleLikeClick} className="text-xs">
//                 {liked ? 'Unlike' : 'Like'}
//             </button>
//         </div>
//     );
// };

// export default Likes;
