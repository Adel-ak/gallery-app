import React from 'react'

export const PhotoList = ({data}) => (
    <li>
        <img src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} alt="" />
    </li>
);
