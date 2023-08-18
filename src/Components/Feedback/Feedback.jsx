import axios from "axios";

const FeedBack = () => {
    const feedBackHandler = e => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        const quality = form.quality.value;
        const time = form.timeManage.value;
        console.log(message, quality, time);

        // axios.post("", {
        //     message: message,
        //     question: quality,
        //     time: time,
        // })
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             /*hot toast && sweet alert */
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //     })
    };

    return (
        <div className="py-12 md:w-[560px] mx-auto md:p-8 p-1 rounded-lg my-6 shadow-2xl">
            <form action="" onSubmit={feedBackHandler} className="md:space-y-2 space-y-1">
                <h2 className="md:text-2xl text-xl text-white font-semibold md:py-3 py-2">Send us Your Exam Feedback</h2>
                {/* Question Quality */}
                <div className="md:py-3 py-2">
                    <h2 className="text-xl font-medium text-white">*Question Quality</h2>
                    <div className="md:flex items-center">
                        <div className="">
                            <label className="inline-flex mt-2">
                                <input
                                    type="radio"
                                    name="quality"
                                    value="Good"
                                    required
                                    className="radio radio-success"
                                />
                                <p className='pl-1'>Good</p>
                            </label>
                        </div>
                        <div className="md:mx-5">
                            <label className=" inline-flex mt-2">
                                <input
                                    type="radio"
                                    name="quality"
                                    value="Very good"
                                    required
                                    className="radio radio-success"
                                />
                                <p className='pl-1 '> Very Good</p>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex mt-2">
                                <input
                                    type="radio"
                                    name="quality"
                                    value="Excellent"
                                    required
                                    className="radio radio-success"
                                />
                                <p className='pl-1'>Excellent</p>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Time management */}
                <div>
                    <h2 className="text-xl font-medium text-white">*Time Management</h2>
                    <div className="md:flex items-center">
                        <div className="">
                            <label className="inline-flex mt-2">
                                <input
                                    type="radio"
                                    name="timeManage"
                                    value="Long Time"
                                    required
                                    className="radio radio-success"
                                />
                                <p className='pl-1'>long Time</p>
                            </label>
                        </div>
                        <div className="md:mx-5">
                            <label className=" inline-flex mt-2">
                                <input
                                    type="radio"
                                    name="timeManage"
                                    value="Short Time"
                                    required
                                    className="radio radio-success"
                                />
                                <p className='pl-1'> Short Time</p>
                            </label>
                        </div>
                        <div>
                            <label className=" inline-flex mt-2">
                                <input
                                    type="radio"
                                    name="timeManage"
                                    value="Default Time"
                                    required
                                    className="radio radio-success"
                                    defaultChecked // Add this line
                                />
                                <p className='pl-1'>Default Time</p>
                            </label>
                        </div>
                    </div>
                </div>
                {/* text area */}
                <div className="pt-4">
                    <p className="text-sm text-slate-300 py-1">We know we need to improve, Please let us know your feedback so that we can improve our work?</p>
                    <textarea
                        name="message"
                        id=""
                        placeholder="Please your feedback"
                        className="textarea textarea-bordered textarea-md w-full max-w-md bg-[#533564] text-white mt-1 "
                    ></textarea>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="text-sm font-medium py-2 px-6 bg-[#5a386e] rounded-lg text-white cursor-pointer"
                    />
                </div>
            </form>
        </div>
    );
};

export default FeedBack;
