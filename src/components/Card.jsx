import {useState, useEffect} from 'react'
import axios from "axios"

import TinderCard from 'react-tinder-card'

import "./Card.css"

const db = [
    {
        name: 'Cat1',
        url: ''
    },
    {
        name: 'Cat2',
        url: ''
    },
    {
        name: 'Cat3',
        url: ''
    },
    {
        name: 'Cat4',
        url: ''
    },
    {
        name: 'Cat5',
        url: ''
    },
]

const Card = () => {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    useEffect(() => {
        let cancel
        axios.get(`https://api.rescuegroups.org/http/v2.json`, { // decode json
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            if (!axios.isCancel(error)) {
                console.error("Error fetching data: ", error);
            }
        });

        return () => cancel()

    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div>
            <div className='cardContainer'>
                {characters.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} 
        </div>
    )
}

export default Card;