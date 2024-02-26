import React from 'react'
import CatGrid from './CatGrid'
import { useCats } from './CatsProvider';

const DisplayCats = () => {
    const {likedCats} = useCats();
    let config = {
        mode: "cors", // no-cors, *cors, same-origin
        method: "GET",
        headers: { 
            'Content-Type': 'application/json', 
            'qG4ausv2': ''
        },
    };
    console.log(fetch('http://localhost:8080/cat_info/', config)
    .then(r=>r.text())
    .then((response) => {
    console.log(response)
    })
    .catch((error) => {
    console.log(error);
    }));

    return (
        <div className="container">
          {likedCats.map(p => (
                <CatGrid cat={p} />
            ))}
        </div>
    )
}

export default DisplayCats;