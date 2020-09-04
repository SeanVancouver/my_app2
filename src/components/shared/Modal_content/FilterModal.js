import React, { useState, useEffect, useRef } from "react";
import { filterA } from "../../../actions";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

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
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Example multiple select</Form.Label>
        <Form.Control as="select" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    usersR: state.usersR,
  };
};
export default connect(mapStateToProps, { filterA })(FilterModal);
