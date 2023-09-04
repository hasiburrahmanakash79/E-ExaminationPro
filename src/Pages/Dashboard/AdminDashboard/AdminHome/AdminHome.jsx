import Charts from "./Chart";


const AdminHome = () => {
    return (
        <div>
            <h2 className="text-2xl">Admin home This is a Home Page</h2>
            <div className="grid grid-cols-1 gap-5 my-2 md:grid-cols-5 sm:grid-cols-3">
                <div className="p-1 text-center bg-white rounded-lg shadow-2xl md:p-2">
                    <div className="flex items-center gap-2 md:gap-4 ">
                        <div className="p-3 bg-green-600 rounded-lg ">
                            MCQ
                        </div>
                        <h2 className="pl-2 text-lg font-semibold text-black ">MCQ <br /><span className="text-base font-medium ">110</span></h2>
                    </div>
                </div>
                <div className="p-1 text-center bg-white rounded-lg shadow-2xl md:p-2">
                    <div className="flex items-center gap-2 md:gap-4 ">
                        <div className="px-5 py-3 bg-orange-500 rounded-lg ">
                            LQ
                        </div>
                        <h2 className="pl-2 text-lg font-semibold text-black ">Long Ques<br /><span className="text-base font-medium ">80</span></h2>
                    </div>
                </div>
                <div className="p-1 text-center bg-white rounded-lg shadow-2xl md:p-2">
                    <div className="flex items-center gap-2 md:gap-4 ">
                        <div className="px-5 py-3 rounded-lg bg-sky-500 ">
                            SQ
                        </div>
                        <h2 className="pl-2 text-lg font-semibold text-black ">Short Ques<br /><span className="text-base font-medium ">140</span></h2>
                    </div>
                </div>
                <div className="p-1 text-center bg-white rounded-lg shadow-2xl md:p-2">
                    <div className="flex items-center gap-2 md:gap-4 ">
                        <div className="px-5 py-3 bg-yellow-500 rounded-lg ">
                            TQ
                        </div>
                        <h2 className="pl-2 text-lg font-semibold text-black ">Total Ques<br /><span className="text-base font-medium ">320</span></h2>
                    </div>
                </div>
                <div className="p-1 text-center bg-white rounded-lg shadow-2xl md:p-2">
                    <div className="flex items-center gap-2 md:gap-4 ">
                        <div className="px-5 py-3 bg-teal-600 rounded-lg">
                            TI
                        </div>
                        <h2 className="pl-2 text-lg font-semibold text-black ">Total Institute<br /><span className="text-base font-medium ">13</span></h2>
                    </div>
                </div>

            </div>

            <div className="my-8">
                <Charts />
            </div>
        </div>
    );
};

export default AdminHome;