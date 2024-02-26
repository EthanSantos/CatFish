import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CatsContext = createContext();

const apiKey =
    "live_7WuvcHp9i8PCrYX8TCCjLBTGWBYrBePyokoKu6MsumLbGCxNoo1EsgCggF5fcrBg";
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const headers = {
    "x-api-key": apiKey,
};

const nameApi = "https://randommer.io/api/Name"
const nameKey = "ba34e3caa258415183cdf328e43cf635"
const params = {
    nameType: 'firstname',
    quantity: 1
}
const nameHeaders = {
    'accept': '*/*',
    "X-Api-Key": nameKey,
}

export const CatsProvider = ({ children }) => {
    const [cats, setCats] = useState([]);
    const [lastDirection, setLastDirection] = useState();
    const [likedCats, setLikedCats] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(apiUrl, { headers });
                setCats(response.data);
            } catch (error) {
                console.error("Error occurred:", error.response.data);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        axios.get('https://randommer.io/api/Name', {
            params: {
                nameType: 'firstname',
                quantity: 10
            },
            headers: {
                'accept': '*/*',
                'X-Api-Key': 'ba34e3caa258415183cdf328e43cf635'
            }
        })
            .then(response => {
                setNames(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleSwipe = (direction, swipedCat) => {
        // change description
        
        setLastDirection(direction);
        if (direction === "right") {
            setLikedCats(prevLikedCats => prevLikedCats.concat({ id: swipedCat.id, url: swipedCat.url}));
        }
        setCats(cats.filter(cat => cat.id !== swipedCat.id));
        console.log(likedCats);
    }

    return (
        <CatsContext.Provider value={{ cats, names, likedCats, lastDirection, handleSwipe }}>
            {children}
        </CatsContext.Provider>
    );
};

export const useCats = () => {
    return useContext(CatsContext);
};