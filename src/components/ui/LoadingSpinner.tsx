import React from "react";
interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC <LoadingSpinnerProps> = ({}) => {
    return(
        <>
        <h1>Loading ...</h1>
        </>
    )
}
export default LoadingSpinner;