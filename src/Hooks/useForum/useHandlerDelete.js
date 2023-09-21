import axios from "axios";
import { allPostComment } from "./useForum"
import Swal from "sweetalert2";

const [postComments, refetch] = allPostComment()
export const handleDelete = () => {
    axios.delete(`https://e-exam-pro-server.vercel.app/forumPost/${postComments._id}`)
        .then(data => {
            //console.log(data);
            if (data.data.deletedCount > 0) {
                refetch();
                Swal.fire(
                    'Delete!',
                    'Your comment has been delete.',
                    'success'
                )
            }
        })
}