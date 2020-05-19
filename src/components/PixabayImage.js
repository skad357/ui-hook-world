import React from 'react';
import styled from '@emotion/styled';

const AuthorField = styled.p`
font-size:0.7rem;
text-align:right;
`;

const PixabayImage = ({pixaImg}) => {
    return (
        <div className='card mb-4 mx-2'>
            <img src={pixaImg.previewURL} alt={pixaImg.tags} className="card-img-top" />

            <div  className="card-body d-flex flex-column"
            >
                <p className="my-1"> <strong>{pixaImg.views}</strong> Views</p>
                <p className="my-1"> <strong>{pixaImg.likes}</strong> Likes</p>
                <p className="my-1"> <strong>{pixaImg.favorites}</strong> Favorites</p>
                <p className="my-1"> <strong>{pixaImg.downloads}</strong> Downloads</p>
                <AuthorField className="text-secondary mt-auto mb-0 pt-2 text-align-right  ">Uploaded By <strong> {pixaImg.user}</strong></AuthorField>

            </div>  
            <div className="card-footer">
                <a className='btn btn-danger btn-block text-white text-bold'
                href={pixaImg.pageURL} target='_blank' rel='noopener noreferrer'> View in Pixabay</a>
            </div>
        </div>
    );
};

export default PixabayImage;