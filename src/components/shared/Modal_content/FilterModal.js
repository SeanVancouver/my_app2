import React, { useState, useEffect, useRef } from "react";
import { filterA } from "../../../actions";
import { connect } from "react-redux";

const FilterModal = (props) => {
  const [rangeValue, setRangeValue] = useState(false);
  const ageRef = useRef();
  const sexRef = useRef();
  const keywordRef = useRef();

  const onFormSubmit = () => {
    const selection = [sexRef.current, ageRef.current, keywordRef.current];
    const mapSelection = {};

    selection.map((formType) => {
      console.log("formType.value formType.value " + formType.value);
      if (formType.value !== null && formType.value !== "") {
        return (mapSelection[formType.name] = formType.value);
      } else {
        return (mapSelection[formType.name] = "any");
      }
    });

    props.filterA(props.usersR, mapSelection);
  };

  const onFormClear = () => {
    console.log("realllyy?");
    props.filterA(props.usersR, null);
  };

  return (
    <div className="popModal">
      <input
        ref={ageRef}
        name="age"
        type="range"
        min="0"
        max="100"
        onChange={(e) => setRangeValue(e.target.value)}
      />
      <label>age: {rangeValue}</label>
      <br />
      <input ref={sexRef} type="text" name="sex" />
      <label>sex</label>
      <br />
      <input ref={keywordRef} type="text" name="keyword" />
      <label>keyword</label>
      <button onClick={onFormSubmit}>submit</button>
      <button onClick={onFormClear}>clear</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usersR: state.usersR,
  };
};
export default connect(mapStateToProps, { filterA })(FilterModal);
