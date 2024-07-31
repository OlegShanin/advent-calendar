import React from "react";
import "./gift.scss";

interface GiftProps {
    gift: string;
    onClose: () => void;
}

const Gift: React.FC<GiftProps> = ({ gift, onClose }) => {
    return (
        <div className="gift">
            <div className="gift_content">
                <p>{gift}</p>
                <button className="gift__close" onClick={onClose}>x</button>
            </div>
        </div>
    );
};

export default Gift;
