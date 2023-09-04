import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CommentField = ({ label, type }) => {

    return (
        <div className="">
            <div className="mb-4">
                <input
                    id="filled-search"
                    label={label}
                    type={type}
                    variant="filled"
                    placeholder="Comment"
                    className="w-10/12 bg-zinc-300 text-slate-900 focus:outline-none border rounded-md py-2 px-4 "
                />
                <button className="bg-blue-500 py-2 px-5 text-white rounded-lg ml-2">Comment</button>
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
                        <div className="p-3 shadow-md rounded-md mb-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="w-7 h-7 rounded-full bg-sky-600"></p>
                                    <p className="pl-3 leading-1 text-white">First Comment</p>
                                </div>
                                <p className="text-slate-600 md:text-sm text-xs">sep 04 2023, 3:47AM </p>
                            </div>
                            <div className="pt-2 md:pl-9 pl-4">
                                <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center gap-5">
                                        <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-red-500">4 </span> Like</p>
                                        <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-yellow-500">5 </span> reply</p>
                                    </div>
                                </div>
                            </div>
                            {/* First Comment */}
                            {/* <div className="p-3 shadow-2xl rounded-md my-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <p className="w-7 h-7 rounded-full bg-sky-600"></p>
                                        <p className="pl-3 leading-1 text-slate-700">First Comment</p>
                                    </div>
                                    <p className="text-slate-600 md:text-sm text-xs">sep 04 2023, 3:47AM </p>
                                </div>
                                <div className="pt-2 md:pl-9 pl-4">
                                    <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="flex items-center justify-between mt-5">
                                        <div className="flex items-center gap-5">
                                            <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-red-500">4 </span> Like</p>
                                            <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-yellow-500">5 </span> reply</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* Second Comment */}
                        <div className="p-3 shadow-md rounded-md ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="w-7 h-7 rounded-full bg-sky-600"></p>
                                    <p className="pl-3 leading-1 text-slate-700">Second Comment</p>
                                </div>
                                <p className="text-slate-600 md:text-sm text-xs">sep 04 2023, 3:47AM </p>
                            </div>
                            <div className="pt-2 md:pl-9 pl-4">
                                <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center gap-5">
                                        <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-red-500">4 </span> Like</p>
                                        <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-yellow-500">5 </span> reply</p>
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