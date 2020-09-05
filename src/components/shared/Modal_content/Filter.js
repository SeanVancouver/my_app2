import React, { useState, useEffect, useRef } from "react";
import { filterA } from "../../../actions";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

const FilterModal = (props) => {
  const [rangeValue, setRangeValue] = useState(props.FilterStateR.age);
  const [radioValue, setRadioValue] = useState(props.FilterStateR.gender);
  const [descValue, setDescValue] = useState(props.FilterStateR.keyword);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const selection = {
      age: rangeValue,
      gender: radioValue,
      keyword: descValue,
    };

    props.filterA(props.FilterR, selection);

    props.submitClose();
  };

  const onFormClear = (e) => {
    e.preventDefault();
    props.filterA(props.FilterR, { age: "100", gender: "any", keyword: "" });
    props.submitClose();
  };

  const onRadioChange = (e) => {
    // debugger;
    switch (e.currentTarget.name) {
      case "female":
        setRadioValue({
          ...radioValue,
          female: e.currentTarget.checked,
        });
        break;
      case "male":
        setRadioValue({
          ...radioValue,
          male: e.currentTarget.checked,
        });
      default:
        break;
    }

    console.log(" fffffff " + JSON.stringify({ radioValue }));
  };

  return (
    <Form>
      <div className="form_content_wrap">
        <Form.Group>
          <Form.Label htmlFor="formControlRange">Age: {rangeValue}</Form.Label>
          <Form.Control
            type="range"
            className="form-control-range"
            id="formControlRange"
            min="0"
            max="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="formControlRange">Gender: &nbsp;</Form.Label>

          <Form.Check
            inline
            type="checkbox"
            label="female"
            name="female"
            checked={radioValue.female}
            onChange={(e) => onRadioChange(e)}
          />

          <Form.Check
            inline
            type="checkbox"
            label="male"
            name="male"
            checked={radioValue.male}
            onChange={(e) => onRadioChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Keyword</Form.Label>
          <Form.Control
            type="text"
            placeholder="search description"
            value={descValue}
            onChange={(e) => setDescValue(e.currentTarget.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={onFormSubmit}
          style={{ marginRight: "10px" }}
        >
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={onFormClear}>
          Clear
        </Button>
      </div>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    FilterR: state.FilterR,
    FilterStateR: state.FilterStateR,
  };
};
export default connect(mapStateToProps, { filterA })(FilterModal);
