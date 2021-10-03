import React, { useContext } from 'react';
import { GiftContext } from '../../App';

const Wife = () => {
    const myGift = useContext(GiftContext)
    console.log(myGift)
    return (
        <div>
            <h4>Wife</h4>
            <small>gift: {myGift}</small>
        </div>
    );
};

export default Wife;