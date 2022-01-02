import "./cards.css"
import SingleCard from "../SingleCard/SingleCard";
import { useEffect, useRef, useState } from "react";
import { card } from "../../interfaces/interfaces";

const Cards = () => {
    const firstUpdate = useRef(true);
    const [cardsList, setCardsList] = useState<card[]>([
        {
            id: 0,
            title: "",
            content: [""]
        }
    ])
    const [isLoading, setIsLoading] = useState(false);
    const getCards = async () => {
        const response = await fetch("JSON/cards.json", {
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setCardsList(data.cards)
        }


    }
    useEffect(() => {
        getCards();
    }, [])
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setIsLoading(true)
    }, [cardsList])
    return (
        <div className="cards-container">
            {isLoading &&
                cardsList.map(card => <SingleCard key={card.id} card={card} />)
            }

        </div>
    )
}

export default Cards;