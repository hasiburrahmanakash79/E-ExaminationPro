import axios from "axios"
import { useQuery } from "react-query"


const usePostCommentField = () => {
    const { data: postCommentField = [], refetch } = useQuery({
        queryKey: ["postCommentFiled"],
        queryFn: async () => {
            const res = await axios.post("https://e-exam-pro-server.vercel.app/forumPost")
            // const res = await fetch("https://e-exam-pro-server.vercel.app/forumPost")
            return res.json()
        }
    })
    return [postCommentField, refetch]
}