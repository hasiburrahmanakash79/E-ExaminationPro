import React, { useEffect, useState } from 'react';

const useSubject = () => {
    const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);
  return [subjects];
};

export default useSubject;