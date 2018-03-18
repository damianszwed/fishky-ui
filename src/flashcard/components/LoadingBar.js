import React from 'react'

const LoadingBar = () => {
  return (
    <div className="col-sm-3 mt-3">
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
      </div>
    </div>
  )
};

export default LoadingBar;
