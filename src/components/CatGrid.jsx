import React from 'react'

const CatGrid = ({cat}) => {
    return (
        <div className="grid-item">
            <h3 className="title">Name</h3>
            <img
                width={250}
                height={250}
                src={cat.url}
            />
        </div>
    )
}

export default CatGrid