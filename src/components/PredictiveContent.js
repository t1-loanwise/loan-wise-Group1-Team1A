import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import EditButton from "../assets/icons/edit.svg";
import "../styles/AccordianContent.css";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import PopUp from "../components/PopUp";
import ExitingRule from "./ExitingRule";

import NewRule from "./NewRule";

const PredictiveContent = () => {
  const [buttonPop, setButtonPopup] = useState(false);
  const [newRuleButtonPop, setNewRuleButtonpop] = useState(false);
  return (
    <div className="content-container">
      <div className="content">
        <div className="Model">Bank statement Name March</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Behavioral Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Spending Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Cash Flow Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
      <div className="new-rule">
        <div className="edit-btn">
          <button
            className="new-rule-btn"
            onClick={() => setNewRuleButtonpop(true)}
          >
            <img src={PlusSign} alt="plus" />
            Set new rule
          </button>
          <PopUp trigger={newRuleButtonPop} setTrigger={setNewRuleButtonpop}>
            <NewRule />
          </PopUp>
        </div>
      </div>
    </div>
  );
};

export default PredictiveContent;
