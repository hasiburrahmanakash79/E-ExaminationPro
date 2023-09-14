import { useQuery } from "@tanstack/react-query"


export const allPostComment = () => {
    const { data: postComments = [], refetch } = useQuery({
        queryKey: [""],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/forumPost")
            // const res = await fetch("https://e-exam-pro-server.vercel.app/forumPost")
            return res.json()
        }
    })
    return [postComments, refetch]
}


