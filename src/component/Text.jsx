import React , {useState} from "react";
import Button from "react-bootstrap/Button";

function Text() {
  const [text , setText] = useState('Enter Text Here');

  const upper =()=>{
    let newText = text.toUpperCase()
    setText(newText)
  }
  let lower = ()=>{
  let lowerText = text.toLowerCase()
  setText(lowerText)
}
  let camel =()=>{
    let camelCase = text.toString()
    setText(camelCase)
    if(camelCase == 97){
      camelCase = "A"
    }
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
      <div className="text-head container">
        <h1>Convert Text Area</h1>
        <textarea className="m-5 mr-3" onChange={handleOnChange} value={text} rows="10"></textarea>
        <div className="d-flex justify-content-center tb">
          <Button variant="outline-primary"  onClick={upper}>Upper Case</Button>
          <Button variant="outline-secondary" onClick={lower}>Lowr Case</Button>{" "}
          <Button variant="outline-success" onClick={camel}>Camel Case</Button>{" "}
          <Button variant="outline-warning">Warning</Button>{" "}
          <Button variant="outline-danger">Danger</Button>{" "}
          <Button variant="outline-info">Info</Button>{" "}
        </div>
      </div>
    </>
  );
}

export default Text;
