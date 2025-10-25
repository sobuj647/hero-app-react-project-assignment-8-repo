import React, { Suspense } from "react";
import { useLoaderData, useParams } from "react-router";
import CardDetail from "../CardDetail/CardDetail";

const CardsDetails=()=>{
    const { id }= useParams();
    // console.log("id:", id, "typeof id:", typeof id);

    const cardId= parseInt(id);
    // console.log("cardId:",cardId,"typeof id:",typeof cardId);

    const cardData= useLoaderData();
    const singleCard= cardData.find(card=>card.id===cardId);
    // console.log('singleCard:', singleCard);
    return(
        <div>
            <CardDetail singleCard={singleCard}></CardDetail>
        </div>
    )
};

export default CardsDetails;