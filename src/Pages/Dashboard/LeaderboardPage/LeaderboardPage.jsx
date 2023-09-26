import React, { useState, useEffect } from 'react';
import defaultPic from '../../../assets/userPro.png'
import { Hourglass } from 'react-loader-spinner';

const LeaderboardPage = () => {
    const [allBatch, setAllBatch] = useState([]);
    const [allSubject, setAllSubject] = useState([]);
    const [allType, setAllType] = useState([]);

    const [searchInput, setSearchInput] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedType,  setSelectedType] = useState('');
    console.log(selectedType)
    const [examData,setExamData]=useState([])

    console.log(allType ,examData)

    useEffect(() => {
        // Fetch data and set allBatch and allSubject state
        fetch('http://localhost:4000/getBatch_Subject')
            .then((res) => res.json())
            .then((data) => {
                setAllBatch(data?.batch);
                setAllSubject(data?.subject);
                setAllType(data?.type)
            });
    }, []);

    useEffect(() => {
        // Fetch data and set allBatch and allSubject state
        fetch(`http://localhost:4000/leaderboardResult?inputSearch=${searchInput}&batch=${selectedBatch}&subject=${selectedSubject}&sort=${selectedSort}&type=${selectedType}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setExamData(data)
            });
    }, [searchInput, selectedBatch, selectedSort, selectedSubject,selectedType]);

    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Function to handle subject select change
    const handleSubjectSelectChange = (e) => {
        setSelectedSubject(e.target.value);
    };
    const handleTypeSelectChange = (e) => {
        setSelectedType(e.target.value);
    };

    // Function to handle batch select change
    const handleBatchSelectChange = (e) => {
        setSelectedBatch(e.target.value);
    };

    // Function to handle sort select change
    const handleSortSelectChange = (e) => {
        setSelectedSort(e.target.value);
    };

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center my-5'>Welcome To Student Leaderboard</h1>

            <div className='grid md:grid-cols-5 gap-2 mb-4'>
                <div className='grid grid-cols-4 gap-2'>
                    <input
                        type='text'
                        placeholder='use email only'
                        className='input col-span-3 input-sm input-bordered w-full max-w-xs'
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                    <button className='btn btn-sm btn-primary'>Search</button>
                </div>

                <div>
                    <select
                        className='select select-sm select-primary w-full max-w-xs'
                        value={selectedSubject}
                        onChange={handleSubjectSelectChange}
                    >
                        <option disabled value=''>
                            Sort by Subject
                        </option>
                        <option  value=''>
                           default
                        </option>
                        {allSubject?.map((subject, index) => {
                            return (
                                <option key={index} value={subject}>
                                    {subject}
                                </option>
                            );
                        })}
                    </select>
                </div>
                
                <div>
                    <select
                        className='select select-sm select-primary w-full max-w-xs'
                        value={selectedType}
                        onChange={handleTypeSelectChange}
                    >
                        <option disabled value=''>
                            Sort by Type
                        </option>
                        <option  value=''>
                           default
                        </option>
                        {allType?.map((type, index) => {
                            return (
                                <option key={index} value={type} >
                                    {type}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div>
                    <select
                        className='select select-sm select-primary w-full max-w-xs'
                        value={selectedBatch}
                        onChange={handleBatchSelectChange}
                    >
                        <option disabled value=''>
                            Sort by Batch
                        </option>
                        <option  value=''>
                           default
                        </option>

                        {allBatch?.map((batch, index) => {
                            return (
                                <option key={index} value={batch}>
                                    {batch}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div>
                    <select
                        className='select select-sm select-primary w-full max-w-xs'
                        value={selectedSort}
                        onChange={handleSortSelectChange}
                    >
                        <option disabled value=''>
                            Sort by Total Mark
                        </option>
                        <option value=''>Default</option>
                        <option value='1'>Based On Total Mark</option>
                    </select>
                </div>
            </div>

{
    examData.length==0?  <div className='flex h-[70vh] gap-2 justify-center items-center my-5'>
    <Hourglass
       visible={true}
       height='80'
       width='80'
       ariaLabel='hourglass-loading'
       wrapperStyle={{}}
       wrapperClass=''
       colors={['#ffffff', '#000000']}
     />
<h1 className='text-xl'>No Data Found..</h1>
</div>:
    <div className='mx-2'>
{
        examData?.map((data,index)=><div
        key={index}
        className={selectedSort? 'grid items-center grid-cols-2 md:grid-cols-6 gap-4 p-5 primary-bg my-3 shadow-md rounded-xl':'grid items-center grid-cols-2 md:grid-cols-7 gap-4 p-5 primary-bg my-3 shadow-md rounded-xl'}
        >
      
        <img className='w-1/2 object-cover rounded-full' src={data?.stu_image?data?.stu_image:defaultPic} alt="" />
 <div>       <h1 color=''><span  className='text-green-500'>Email:</span> <span className='aext-yellow-500'>{data.stu_email}</span></h1>
        <h1><span  className='text-green-500'>Name:</span> <span className='aext-yellow-500'>{data.stu_name}</span></h1></div>
<div>
<h1><span  className='text-green-500'>Subject:</span> <span className='aext-yellow-500'>{data.subject}</span></h1>
        {!selectedSort &&  <h1  className='text-green-500'><span>Code:</span> <span className='aext-yellow-500'>{data.exam_code}</span></h1>}
</div>
       
        <h1><span  className='text-green-500'>Batch:</span> <span className='aext-yellow-500'>{data.batch}</span></h1>
        <h1><span  className='text-green-500'>Type:</span> <span className='aext-yellow-500'>{data.examType}</span></h1>
<div>
<h1><span  className='text-green-500'>Total Mark:</span> <span className='aext-yellow-500'>{data.totalMark}</span></h1>
        {!selectedSort &&  <h1><span  className='text-green-500'>Mark:</span> <span className='aext-yellow-500'>{data.mark}</span></h1>}
</div>
        
       {!selectedSort &&  <h1><span className='text-green-500'>Date: </span> <span className='aext-yellow-500'>{data.date}</span></h1>}
        
        </div>)
    }
</div>
}


        </div>
    );
};

export default LeaderboardPage;