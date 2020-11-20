import React from 'react';

import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';
import ClayButton from '@clayui/button';
import ClaySticker from '@clayui/sticker';
import ClayChart from '@clayui/charts';
import ClayTooltip from '@clayui/tooltip';


import './App.css';
import './styles/main.css';


  function App() {

      const COLUMNS = [["data1", 100, 20, 30], ["data2", 20, 70, 100]];
  const COLUMNS_2 = [["data1", 10, 50, 60], ["data2", 70, 30, 10]];
 

    const colStyles = {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    };
  return <div className="app-container">

      <ClayLayout.ContainerFluid view className="boardContainer">
      <h1 className="header"><span>(⌒ω⌒)ﾉ</span> <span>🏓 PINGPONG APP 🏓</span> <span>ヾ(・ω・ｏ)</span> </h1>
        <ClayLayout.Row justify="center" align="center">
          <ClayLayout.Col sm={6} className="colclassNames">
            <ClayLayout.Row justify="center" align="center" className='Left-top-container'>

        


              <ClayLayout.Col size={6} className="colclassNames">
                <h2>
                  {"BEST WINNING STREAK"}
                </h2>
              <img    src="./images/Profiles/natanel.jpg" className="portrait">
                </img>

              <img    src="./images/Profiles/crown.png" className="crown" />

<div className="tooltipContainer">
  <div style={{ height: 50 }}>
    <ClayTooltip alignPosition="bottom" show>
      {"☠️☠️☠️ LVL 99 BOSS Be careful likes to use curveball ☠️☠️☠️"}
    </ClayTooltip>
  </div>
  </div>
              </ClayLayout.Col>
              <ClayLayout.Col sm={6} className="colclassNames">



                
                <h2>
                  {"MOST CONSECUTIVE WINS"}
                </h2>
              </ClayLayout.Col>
            </ClayLayout.Row>
            <ClayLayout.Row justify="center" align="center">
              <ClayLayout.Col sm={12} className="colclassNames">
                <h2>
                  {"RECENT ACTIVITIES"}
                </h2>








              </ClayLayout.Col>



          </ClayLayout.Row>


          <ClayChart
    axis={{
      x: {
        type: "timeseries"
      }
    }}
    data={{
      columns: [
        [
          "x",
          "2018-01-01",
          "2018-02-01",
          "2018-03-01",
          "2018-04-01",
          "2018-05-01",
          "2018-06-01",
          "2018-07-01",
          "2018-08-01",
          "2018-09-01",
          "2018-10-01",
          "2018-11-01",
          "2018-12-01"
        ],
        [
          "Natanel",
          130,
          340,
          200,
          100,
          40,
          300,
          { high: 240, low: 140, mid: 180 },
          { high: 380, low: 300, mid: 350 },
          { high: 480, low: 320, mid: 400 },
          { high: 260, low: 100, mid: 200 },
          { high: 140, low: 100, mid: 120 },
          { high: 180, low: 80, mid: 100 }
        ],
        [
          "Gunnar",
          210,
          180,
          30,
          90,
          40,
          120,
          { high: 260, low: 180, mid: 240 },
          { high: 460, low: 360, mid: 420 },
          { high: 180, low: 80, mid: 120 },
          { high: 120, low: 60, mid: 80 },
          { high: 80, low: 10, mid: 20 },
          { high: 100, low: 20, mid: 60 }
        ]
      ],
      type: "predictive",
      types: {
        Natanel: "area-line-range",
        Gunnar: "area-spline-range"
      },
      x: "x"
    }}
    predictionDate="2018-06-01"
  />




          </ClayLayout.Col>
          <ClayLayout.Col sm={6} className="colclassNames nameList" >
          <h2>SCOREBOARD</h2>
          
            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer" >
              <ClaySticker.Image
                alt="Picture of Natanel"
                src="./images/Profiles/natanel.jpg"
                className="portrait"
              />
            </ClaySticker>
              {"Natanel"} 			
              <ClayLabel
                displayType="info"
                >
                1090
              </ClayLabel>
            </span>

            <span style={colStyles}>
            <ClaySticker userIcon size="xl"  >
              <ClaySticker.Image
                alt="Picture of Natanel"
                src="./images/Profiles/gunnar.png"
                className="portrait"
              />
            </ClaySticker>
              {"Gunnar"}  			
              <ClayLabel
                displayType="secondary"
                >
                1065
              </ClayLabel>
            </span>
            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer" >
              <ClaySticker.Image
                alt="Picture of vivek"
                src="./images/Profiles/vivek.png"
                className="portrait"
              />
            </ClaySticker>
              {"Vivek"} 			
              <ClayLabel
                displayType="warning"
                className="label"
                >
                1025
              </ClayLabel>
            </span>
            
            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer" >
              <ClaySticker.Image
                alt="Picture of Natanel"
                src="./images/Profiles/sten.jpg"
                className="portrait"
              />
            </ClaySticker>
              {"Sten-mark"} 			
              <ClayLabel
                displayType="secondary"
                >
                999
              </ClayLabel>
            </span>
            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer"  >
              <ClaySticker.Image
                alt="Picture of Natanel"
                src="./images/Profiles/yahya.jpg"
                className="portrait"
              />
            </ClaySticker>
              {"Yahya"} 			
              <ClayLabel
                displayType="secondary"
                >
                980
              </ClayLabel>
            </span>
            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer" >
              <ClaySticker.Image
                alt="Picture of Natanel"
                src="./images/Profiles/natanel.jpg"
                className="portrait"
              />
            </ClaySticker>
              {"Aladdin"} 			
              <ClayLabel
                displayType="secondary"
                >
                980
              </ClayLabel>
            </span>
            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer" >
              <ClaySticker.Image
                alt="Picture of Natanel"
                src="./images/Profiles/raigo.jpg"
                className="portrait"
              />
            </ClaySticker>
              {"Raigo"} 			
              <ClayLabel
                displayType="success"
                >
                888
              </ClayLabel>
            </span>
            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer" >
              <ClaySticker.Image
                alt="Picture of andres"
                src="./images/Profiles/andres.jpg"
                className="portrait"
              />
            </ClaySticker>

            
              {"Andres"} 			
              <ClayLabel
                displayType="secondary"
                >
                780
              </ClayLabel>
            </span>

            <span style={colStyles}>
            <ClaySticker userIcon size="xl" className="userContainer" >
              <ClaySticker.Image
                alt="Picture of vusala"
                src="./images/Profiles/vusala.jpg"
                className="portrait"
              />
            </ClaySticker>

            
              {"Vusala"} 			
              <ClayLabel
                displayType="secondary"
                >
                750
              </ClayLabel>
            </span>

          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="center" align="center" className="buttonContainer">
          <ClayLayout.Col sm={6} >
            
            <ClayButton displayType="primary">
              SCOREBOARD
            </ClayButton>
            
            </ClayLayout.Col>
          <ClayLayout.Col sm={6}>
            
            <ClayButton displayType="primary">
              MATCH
            </ClayButton>
            
            </ClayLayout.Col>
        </ClayLayout.Row>
      </ClayLayout.ContainerFluid>
  </div>
}
export default App;
