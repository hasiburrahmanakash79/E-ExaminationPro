import React from 'react';

const MainContact = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/yfmKFZg/premium-photo-1679923913597-2848bb0acf0a.jpg')] bg-fixed bg-cover my-10">
        <div className=" bg-black bg-opacity-70 py-20 px-10 md:px-28 text-white"> 
          <div className="md:grid grid-cols-2 items-center gap-10">
            <div className=''>
              <img src="https://cdn.wallpapersafari.com/26/10/lV9LYT.jpg" className="rounded-xl" alt="" />
            </div>
            <div>
              <p className="text-xl mt-4">Update Date</p>
              <h1 className="text-2xl my-3 uppercase">Contact</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                voluptate, molestiae esse ex quos quasi error saepe dolorum? Aut,
                aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Quo, fugiat.
              </p>
              <button className="btn primary-btn mt-7">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MainContact;