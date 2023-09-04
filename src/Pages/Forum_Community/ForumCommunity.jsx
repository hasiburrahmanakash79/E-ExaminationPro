import ArticleField from "./ArticleField";
import PostInput from "./PostInput";

const ForumCommunity = () => {
    return (
        <div className="max-w-5xl mx-auto xl:px-20 md:px-10 sm:px-3 px-4">
            <div className="pb-16 pt-8">
                <PostInput />
                <ArticleField />
            </div>
        </div>
    );
};

export default ForumCommunity;