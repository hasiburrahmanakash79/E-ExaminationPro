import Swal from "sweetalert2";
import { allPostComment } from "./useForum"

const [postComments, refetch] = allPostComment();
export const handleSaveEdit = () => {
    fetch(`http://localhost:5000/forumPost/${postComments?._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ article: commentText }),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("server is error");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                console.log(data);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your comment has been edited',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Edit the comment',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch((error) => {
            console.error(error);
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Network error occurred',
                showConfirmButton: false,
                timer: 1500,
            });
        });
}