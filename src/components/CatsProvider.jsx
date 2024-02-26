import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CatsContext = createContext();

const apiKey =
    "live_7WuvcHp9i8PCrYX8TCCjLBTGWBYrBePyokoKu6MsumLbGCxNoo1EsgCggF5fcrBg";
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const headers = {
    "x-api-key": apiKey,
};

var corsOptions = {
    origin: "http://localhost:8081"
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

    const handleSwipe = async (direction, swipedCat) => {
        setLastDirection(direction);
        console.log(direction) 
        if (direction == "right") {
            console.log("SHITT")
            setLikedCats(prevLikedCats => prevLikedCats.concat({ id: swipedCat.id, url: swipedCat.url }));
            
            //==============================================================================================
            let data = JSON.stringify({
                "name": swipedCat.id,
                "image_link": swipedCat.url
            });

            let config = {
                mode: "cors", // no-cors, *cors, same-origin
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json', 
                    'qG4ausv2': ''
                },
                body : data
            };
            console.log(fetch('http://localhost:8080/cat_info/', config)
            .then(r=>r.text())
            .then((response) => {
            console.log(response)
            })
            .catch((error) => {
            console.log(error);
            }));
            //==============================================================================================
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