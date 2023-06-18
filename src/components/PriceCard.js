import React from "react";
import OutlineButton from "./OutlineButton";
import FillButton from "./FillButton";
import mark from "../assets/icons/Vector.png";

const PriceCard = (props) => {
  const hasTwoButton = props.hasTwoButton ?? false;
  const points = props.points?.map((point, index) => (
    <li key={index}>
      <img src={mark} alt="Logo" height="15" />
      <p>{point}</p>
    </li>
  ));

  return (
    <div className={`price-card ${props.active ? "active" : ""}`}>
      <div className={`premium-price-content ${props.active ? "active" : ""}`}>
        <div className={`premium-head-content ${props.active ? "active" : ""}`}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className="justify-center align-start">
            <div className="old-priice">
              {props.oldPrice != null && (
                <div className="price-discount">
                  <sup>$</sup>
                </div>
              )}
              {props.oldPrice != null && (
                <div className="price-discount">
                  <span>{props.oldPrice}</span>
                </div>
              )}
            </div>
            <div className="new-priice">
              <div className="sup2">
                <sup>$</sup>
              </div>
              <div className="price">{props.price}</div>
              <div className="price-label">
                <div>{props.priceLabel}</div>
                <div>{props.priceLabel2}</div>
              </div>
            </div>
          </div>
          {hasTwoButton === true && (
            <div className="two_buttons">
              <div>
                <FillButton label={props.firstButtonLabel} />
              </div>
              <div>
                <OutlineButton label={props.lastButtonLabel} />
              </div>
            </div>
          )}
          <div className="">
            {props.outlineButtonLabel != null && (
              <OutlineButton label={props.outlineButtonLabel} />
            )}
            {props.fillButtonLabel != null && (
              <FillButton label={props.fillButtonLabel} />
            )}
          </div>
        </div>
        <ul className="pricing_list">{points}</ul>
      </div>
    </div>
  );
};

export default PriceCard;
