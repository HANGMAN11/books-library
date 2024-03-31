import React, { useState } from "react";
import Modal from "./modal";

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState(null);

    const handleCardClick = (item) => {
        setBookItem(item);
        setShow(true);
    };

    return (
        <>
            {book && book.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                if (thumbnail && amount) {
                    return (
                        <div className="card" key={index} onClick={() => handleCardClick(item)}>
                            <img src={thumbnail} alt={item.volumeInfo.title} />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#36;{(amount/20).toFixed(2)}</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            {show && <Modal show={show} item={bookItem} onClose={() => setShow(false)} />}
        </>
    );
};

export default Card;
