import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CatsContext = createContext();

const apiKey = "live_7WuvcHp9i8PCrYX8TCCjLBTGWBYrBePyokoKu6MsumLbGCxNoo1EsgCggF5fcrBg";
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const headers = {
    "x-api-key": apiKey,
};

const nameApi = "https://randommer.io/api/Name"
const nameKey = "ba34e3caa258415183cdf328e43cf635"

const descriptionOptions = [
    {
        Age: "20 Years Young",
        Breed: "Maine Coon",
        PreferredActivities:
            "She loves to perch on high surfaces and observe the world below. She enjoys interactive play with feather toys and chasing laser pointers.",
        About:
            "She is a gentle giant with a luxurious, fluffy coat. She's sociable and enjoys the company of both humans and other cats. She has a sweet disposition and loves to be pampered with gentle brush strokes.",
        IdealHome:
            "A spacious home with tall cat trees and cozy spots for lounging. She would thrive in a household with a family willing to engage in interactive play and provide her with the attention she craves.",
    },
    {
        Age: "2 Years Young",
        Breed: "Bombay",
        PreferredActivities:
            "He is a playful and active cat who enjoys chasing after balls and engaging in agility exercises. He's also a fan of puzzle feeders that challenge his intelligence.",
        About:
            "He has sleek black fur and striking yellow eyes. He's a curious and adventurous cat who loves exploring every nook and cranny. He is known for his friendly nature and ability to make friends with anyone, including other pets.",
        IdealHome:
            "An active household with plenty of interactive toys and opportunities for play. He would do well with a family that appreciates his playful energy and can provide a stimulating environment.",
    },
    {
        Age: "1 Years Young",
        Breed: "Siamese",
        PreferredActivities:
            'She is a vocal and social cat who loves to "talk" to her humans. She enjoys curling up in warm spots and is fascinated by puzzle toys that challenge her problem-solving skills.',
        About:
            "She has striking blue almond-shaped eyes and a sleek, short coat with distinctive color points. She's a loving and affectionate cat who thrives on human companionship. She is known for her inquisitive nature and playful antics.",
        IdealHome:
            "A home with a loving family that can provide plenty of attention and playtime. She would do well in a quieter environment where she can form a close bond with her human companions.",
    },
];

export const CatsProvider = ({ children }) => {
    const [cats, setCats] = useState([]);
    const [lastDirection, setLastDirection] = useState();
    const [likedCats, setLikedCats] = useState([]);
    const [names, setNames] = useState([]);
    const [descriptions, setDescriptions] = useState({ age: descriptionOptions[0].Age, breed: descriptionOptions[0].Breed, prefer: descriptionOptions[0].PreferredActivities, about: descriptionOptions[0].About, ideal: descriptionOptions[0].IdealHome });

    const updateDescription = () => {
        const Age = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)].Age
        const Breed = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)].Breed
        const PreferredActivities = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)].PreferredActivities
        const About = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)].About
        const IdealHome = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)].IdealHome
        setDescriptions({ age: Age, breed: Breed, prefer: PreferredActivities, about: About, ideal: IdealHome });
    }

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
        axios.get(nameApi, {
            params: {
                nameType: 'firstname',
                quantity: 10
            },
            headers: {
                'accept': '*/*',
                'X-Api-Key': nameKey
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
        updateDescription()
        setLastDirection(direction);
        if (direction === "right") {
            setLikedCats(prevLikedCats => prevLikedCats.concat({ id: swipedCat.id, url: swipedCat.url }));
        }
        setCats(cats.filter(cat => cat.id !== swipedCat.id));
        console.log(likedCats);
    }

    return (
        <CatsContext.Provider value={{ cats, names, descriptions, likedCats, lastDirection, handleSwipe }}>
            {children}
        </CatsContext.Provider>
    );
};

export const useCats = () => {
    return useContext(CatsContext);
};