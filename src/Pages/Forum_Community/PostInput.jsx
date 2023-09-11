
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const PostInput = () => {
    const { user } = useAuth()
    const createdAtDate = new Date();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            postField: "",
        },
    })

    const onSubmit = (data) => {
        const article = data.postField;
        // axios.post("http://localhost:4000/forumPost",
        axios.post("http://localhost:4000/forumPost",
            {
                article,
                userName: user?.displayName,
                userImage: user?.photoURL,
                timeDate: createdAtDate,
            })
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'your post uploaded',
                        showConfirmButton: false,
                        timer: 1200
                    })
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
