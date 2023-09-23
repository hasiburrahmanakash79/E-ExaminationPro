import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CommentField = ({ label, type }) => {
    /* What's up bro tumake amer Lagtace nah okay! */
    return (
        <div className="">
            <div className="mb-4">
                <input
                    id="filled-search"
                    label={label}
                    type={type}
                    variant="filled"
                    placeholder="Comment"
                    className="w-10/12  ag-zinc-300  aext-slate-900 focus:outline-none border rounded-md py-2 px-4 "
                />
                <button className=" ag-blue-500 py-2 px-5  rounded-lg md:ml-2 my-3">Comment</button>
            </div>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>All Comments</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {/* First Comment */}
                        <div
                            className="p-3 shadow-md rounded-md mb-3">
                            <div
                                data-aos="fade-down"
                                data-aos-duration="1500"
                                className="flex items-center justify-between">
                                <div
                                    className="flex items-center">
                                    <p className="w-7 h-7 rounded-full  ag-sky-600"></p>
                                    <p className="pl-3 leading-1  aext-slate-900">First Comment</p>
                                </div>
                                <p className="  md:text-sm text-xs">sep 04 2023, 3:47AM </p>
                            </div>
                            <div


                                className="pt-2 md:pl-9 pl-4">
                                <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center gap-5">
                                        <p className="cursor-pointer text-sm  "><span className="text-sm aext-red-500">4 </span> Like</p>
                                        <p className="cursor-pointer text-sm  "><span className="text-sm aext-yellow-500">5 </span> Comment</p>
                                    </div>
                                </div>
                            </div>
                            {/* First Comment */}
                            {/* <div className="p-3 shadow-md rounded-md my-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <p className="w-7 h-7 rounded-full  ag-sky-600"></p>
                                        <p className="pl-3 leading-1  ">First Comment</p>
                                    </div>
                                    <p className="  md:text-sm text-xs">sep 04 2023, 3:47AM </p>
                                </div>
                                <div className="pt-2 md:pl-9 pl-4">
                                    <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="flex items-center justify-between mt-5">
                                        <div className="flex items-center gap-5">
                                            <p className="cursor-pointer text-sm  "><span className="text-sm aext-red-500">4 </span> Like</p>
                                            <p className="cursor-pointer text-sm  "><span className="text-sm aext-yellow-500">5 </span> reply</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* Second Comment */}
                        <div className="p-3 shadow-md rounded-md ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="w-7 h-7 rounded-full  ag-sky-600"></p>
                                    <p className="pl-3 leading-1  ">Second Comment</p>
                                </div>
                                <p className="  md:text-sm text-xs">sep 04 2023, 3:47AM </p>
                            </div>
                            <div className="pt-2 md:pl-9 pl-4">
                                <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center gap-5">
                                        <p className="cursor-pointer text-sm  "><span className="text-sm aext-red-500">4 </span> Like</p>
                                        <p className="cursor-pointer text-sm  "><span className="text-sm aext-yellow-500">5 </span> Comment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default CommentField;