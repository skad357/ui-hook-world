import React from 'react';

const ErrorViewer = ({errorMessage}) => {
    return (
        <div className='bg-danger text-white font-weight-bold text-bold btn-block mx-3'>
            <p className="pt-3">{errorMessage}</p>
        </div>
    );
};

export default ErrorViewer;