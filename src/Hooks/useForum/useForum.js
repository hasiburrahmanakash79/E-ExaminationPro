import { useQuery } from "@tanstack/react-query"


export const allPostComment = () => {
    const { data: allCommentPosts = [], refetch } = useQuery({
        queryKey: [""],
        queryFn: async () => {
            const res = await fetch("https://e-exam-pro-server.vercel.app/forumPost")
            return res.json()
        }
    })
    return [allCommentPosts, refetch]
}