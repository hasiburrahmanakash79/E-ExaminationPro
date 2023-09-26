
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
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your post uploaded',
                        showConfirmButton: false,
                    })
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
                            placeholder="Write Your Post"
                            required
                            className="h-24 w-full p-3 focus:outline-none rounded-md bg-transparent border shadow-md"
                        />
                    )}
                />
                <button type="submit" className=" btn btn-primary px-4 my-3  rounded-md ">
                    Post 
                </button>
            </form>
        </div>
    );
};

export default PostInput;