import React from 'react';

import ClayLayout from '@clayui/layout';
import './App.css';

  function App() {
      const colStyles = {
        backgroundColor: "#E7E7ED",
        border: "1px solid #CDCED9",
        paddingBottom: ".75rem",
        paddingTop: ".75rem"
      };

  return <div>
    Ping Pong Leaderboard

  
      <ClayLayout.ContainerFluid view>
        <ClayLayout.Row justify="start">
          <ClayLayout.Col size={6} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={6} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="center">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="end">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="around">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="between">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
      </ClayLayout.ContainerFluid>
    );
  </div>
  

}
export default App;
