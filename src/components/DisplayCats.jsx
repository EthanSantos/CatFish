import React from 'react'
import CatGrid from './CatGrid'
import { useCats } from './CatsProvider';

const DisplayCats = () => {
    const {likedCats} = useCats();
    return (
        <div className="container">
          {likedCats.map(p => (
                <CatGrid cat={p} />
            ))}
        </div>
    )
}

export default DisplayCats;