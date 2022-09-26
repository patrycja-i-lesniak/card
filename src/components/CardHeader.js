import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "components";


export default function CardHeader() {
  return (
    <div className="card__header">
      <div className="card__header-content">
        <div className="card__header-avatar">R</div>
        <div>
          <p>
            <span>Sequoia (genus)</span>
          </p>
          <p> 21 September 2022</p>
        </div>
      </div>
      <Button icon={<BsThreeDotsVertical />}/>
    </div>
  );
}
