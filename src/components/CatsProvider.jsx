import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CatsContext = createContext();


const apiKey =
    "live_7WuvcHp9i8PCrYX8TCCjLBTGWBYrBePyokoKu6MsumLbGCxNoo1EsgCggF5fcrBg";
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const headers = {
    "x-api-key": apiKey,
};

export const CatsProvider = ({ children }) => {
    const [cats, setCats] = useState([]);
    const [lastDirection, setLastDirection] = useState();
    const [likedCats, setLikedCats] = useState([]);

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

    const handleSwipe = (direction, swipedCat) => {
        setLastDirection(direction);
        if (direction === "right") {
            setLikedCats(prevLikedCats => prevLikedCats.concat({ id: swipedCat.id, url: swipedCat.url }));
        }
        setCats(cats.filter(cat => cat.id !== swipedCat.id));
        console.log(likedCats);
    }

    return (
        <CatsContext.Provider value={{ cats, likedCats, lastDirection, handleSwipe }}>
            {children}
        </CatsContext.Provider>
    );
};

export const useCats = () => {
    return useContext(CatsContext);
};