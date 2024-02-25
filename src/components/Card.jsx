import { useState, useEffect } from 'react'
import axios from "axios"

import TinderCard from 'react-tinder-card'

import "./Card.css"

const apiKey = 'live_7WuvcHp9i8PCrYX8TCCjLBTGWBYrBePyokoKu6MsumLbGCxNoo1EsgCggF5fcrBg';
const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=50';

const headers = {
    'x-api-key': apiKey
};

const Card = () => {
    const [lastDirection, setLastDirection] = useState()
    const [cats, setCats] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(apiUrl, { headers });
                setCats(response.data);
            } catch (error) {
                console.error('Error occurred:', error.response.data);
            }
        };

        fetchImages();
    }, []);

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
                {cats.map((cat) =>
                    <TinderCard className='swipe' key={cat.id} onSwipe={(dir) => swiped(dir, cat.id)} onCardLeftScreen={() => outOfFrame(cat.id)}>
                        <div style={{ backgroundImage: 'url(' + cat.url + ')' }} className='card'>
                            <h3>{cat.id}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>
    )
}

export default Card;