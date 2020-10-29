import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchBar(props) {
  return (
    <div
      style={{
        width: "50%",
        marginLeft: "25%",
      }}
    >
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm"> Search </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value = {props.search}
          onChange={props.onSearch}
          id='term'
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
