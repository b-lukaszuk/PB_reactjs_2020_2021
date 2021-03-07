// uruchamianie z shella
// > npm start

import * as React from "react";
import "./styles.css";
// proptypes-y za:
// https://pl.reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from "prop-types";

// zadania do domu:
// 1. kolor nie styl ma byc przekazywany do boxa
// 2. zabezpieczenie przed pustym/undefinem, zeby nie bylo klasy box--undefined
// 3. dodatkowe: sprawdzanie typow propsow

// function Box({ type="small", color="lightgray", children }) {
function Box({ type, color, children }) {
  // alternatywa dla wartosci domyslnych
  type = typeof type === "undefined" ? "small" : type; // jak w C/C++
  // standardowe sprawdzanie
  if (typeof color === "undefined") {
    color = "lightgray";
  }

  // jeszcze inny sposob standardowy
  // if (!color) {
  //   color = "lightgray";
  // }

  // alternatywa: let kolorTla i pozniej style={kolorTla} w divie w returnie
  // let kolorTla = { backgroundColor: color };
  return (
    <div className={`box box--${type}`} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

// proptypes-y za:
// https://pl.reactjs.org/docs/typechecking-with-proptypes.html
Box.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string, // tekst luzem, np. <Box>maly box</Box> albo <Box>1</Box>
    PropTypes.object, // tag, np. <Box><p>maly box</p></Box>
    PropTypes.array, // kilka tagow, np. <Box><p>maly</p> <p>box</p></Box>
  ]),
};

function App() {
  return (
    <div>
      <Box color="lightyellow">maly box</Box>
      <Box type="medium">sredni box</Box>
      <Box type="large" color="lightblue">
        duzy box
      </Box>
    </div>
  );
}

export default App;
