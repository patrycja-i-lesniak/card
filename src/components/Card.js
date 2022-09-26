import React, { useState } from "react";
import { BsFillHeartFill, BsFillShareFill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { CardContent, CardHeader, CardImage, Button, CardContentTop } from "components";

export default function Card() {
  const [isVisible, setVisible] = useState(false);

  function toggleVisible(event) {
    event.preventDefault();
    setVisible(!isVisible);
  }

  return (
    <>
      <div className="card">
        <CardHeader />
        <CardImage />
        <CardContentTop isVisible={isVisible}/>
        <div className="card__footer">
          <div className="card__footer-icons">
            <Button icon={<BsFillHeartFill className="icon" />} />
            <Button icon={<BsFillShareFill className="icon" />} />
          </div>
          <Button
            toggleVisible={toggleVisible}
            icon={<RiArrowDownSLine className={isVisible ? "icon rotate" : "icon"} />}
          />
        </div>
        <CardContent isVisible={isVisible} />
      </div>
    </>
  );
}
