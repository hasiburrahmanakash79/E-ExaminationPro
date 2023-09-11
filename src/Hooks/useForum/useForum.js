import { useQuery } from "@tanstack/react-query"


export const allPostComment = () => {
    const { data: allCommentPosts = [], refetch } = useQuery({
        queryKey: [""],
        queryFn: async () => {
            // const res = await fetch("http://localhost:4000/forumPost")
            const res = await fetch("http://localhost:4000/forumPost")
            return res.json()
        }
    })
    return [allCommentPosts, refetch]
}