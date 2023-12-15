// import React, { useEffect } from 'react'

// const Alert = () => {
//   return <h2>alert component</h2>
// }

// export default Alert



import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, );
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;