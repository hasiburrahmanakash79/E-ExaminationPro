import React, { useEffect, useState } from 'react';

const useSubject = () => {
    const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("https://e-exam-pro-server.vercel.app/subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);
  return [subjects];
};

export default useSubject;