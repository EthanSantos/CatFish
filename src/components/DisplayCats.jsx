import React from 'react'
import CatGrid from './CatGrid'
import { useCats } from './CatsProvider';

const DisplayCats = () => {
    const {names, likedCats} = useCats();
    return (
        <div className="container">
          {likedCats.map(p => (
                <CatGrid cat={p} names = {names} />
            ))}
        </div>
    )
}

export default DisplayCats;