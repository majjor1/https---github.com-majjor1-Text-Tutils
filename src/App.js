import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Headers from "./component/Headers";
import Text from "./component/Text";
function App() {
  return (
    <>
      <Headers
        logo="Hello World"
        home="Home"
        about="About"
        user="Users"
        contact="Contact US"
        help="Help"
      />
      <Text/>
    </>
  );
}

export default App;
 