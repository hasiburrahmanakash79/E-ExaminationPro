import { useQuery } from "@tanstack/react-query"


export const allPostComment = () => {
    const { data: postComments = [], refetch } = useQuery({
        queryKey: [""],
        queryFn: async () => {
            const res = await fetch("http://localhost:3500/forumPost")
            return res.json()
        }
    })
    return [postComments, refetch]
}


