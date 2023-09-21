
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { allPostComment } from "../../Hooks/useForum/useForum";
import { toast } from "react-toastify";

const PostInput = () => {
    const [ , refetch] = allPostComment();
    const { user } = useAuth();
    const createdAtDate = new Date();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            postField: "",
        },
    })

    const onSubmit = (data) => {
        const article = data.postField;
        // axios.post("https://e-exam-pro-server.vercel.app/forumPost",
        axios.post("https://e-exam-pro-server.vercel.app/forumPost",
            {
                article,
                userName: user?.displayName,
                userEmail: user?.email,
                userImage: user?.photoURL,
                timeDate: createdAtDate,
                replies: [],
                likeCount: [],
            })
            .then(res => {
                if (res.data.insertedId) {
                    refetch();
                    reset();
                    // Swal.fire({
                    //     position: 'top-center',
                    //     icon: 'success',
                    //     title: 'Your post uploaded',
                    //     showConfirmButton: false,
                    //     timer: 1200
                    // })
                    toast.success('Your post uploaded!');
                }
            })
            .catch(err => {
                console.log(err.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err?.message}`,
                })
            })
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="flex-initial items-center ">
                <Controller
                    name="postField"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            placeholder="Write your comment"
                            required
                            className="h-24 w-full p-3 bg-zinc-300 focus:outline-teal-700 text-black rounded-md block"
                        />
                    )}
                />
                <button type="submit" className="bg-blue-500 px-4 py-2 mt-2 mb-4 text-white text-sm font-semibold tracking-wide rounded-md uppercase">
                    Post
                </button>
            </form>
        </div>
    );
};

export default PostInput;