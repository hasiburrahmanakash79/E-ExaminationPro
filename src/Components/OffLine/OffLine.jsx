import { useEffect, useState } from 'react';


function OffLine() {
  const [switchedTab, setSwitchedTab] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setSwitchedTab(true);
      }
    };

    const handleOnlineStatusChange = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const resetSwitchedTab = () => {
    setSwitchedTab(false);
  };

  const resetOfflineStatus = () => {
    setIsOffline(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Switch to another tab, turn off data, or come back online to see the message</p>
        {(switchedTab || isOffline) && (
          <div className="Overlay mx-auto">
            <div className="Message ">
              {switchedTab && (

                <div className='relative z-50  mx-auto'>

                  <div className="fixed w-full  md:w-1/4 md:left-[650px] top-3 ">
                    <div className="alert shadow-lg  bg-gradient-to-r from-[#FF0000] to-[#FF7878] border-none ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div className='text-white'>
                        <h3 className="font-bold">Error!</h3>
                        <div className="text-xs">Switching new tab strongly prohibited during exam </div>
                      </div>
                      <button className="btn btn-md border-none bg-default text-white">Restart</button>
                    </div>
                  </div>
                </div>



              )}
              {isOffline && (
                <div>
                  <p>You are offline. Please turn on data and come back online to continue.</p>
                  <button onClick={resetOfflineStatus}>Retry</button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default OffLine;
