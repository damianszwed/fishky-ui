import React from 'react'

const LoadingBar = () => {
  return (
    <div className="col-sm-12 mt-12">
        <div className="progress progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
    </div>
  )
};

export default LoadingBar;
