import React from "react";
import ReactWizard from "react-bootstrap-wizard";
import First from "./first";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";
import Fifth from "./fifth";
import Sixth from "./sixth";


class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step here"
    };
  }
  render() {
    return <First />;
  }
}

class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondStep: "second step here"
    };
  }
  render() {
    return <Second />;
  }
}

class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thirdStep: "third step here"
    };
  }
  render() {
    return <Third />;
  }
}
class FourthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fourthStep: "fourth step here"
    };
  }
  render() {
    return <Fourth />;
  }
}
class FifthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fifthStep: "third step here"
    };
  }
  render() {
    return <Fifth />;
  }
}
class SixthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sixthStep: "third step here"
    };
  }
  render() {
    return <Sixth />;
  }
}

var steps = [
  { stepName: "Summary", component: FirstStep },
  { stepName: "Experience", component: SecondStep },
  { stepName: "Education", component: ThirdStep },
  { stepName: "Skills", component: FourthStep },
  { stepName: "Additional Info", component: FifthStep },
  { stepName: "Finalize", component: SixthStep }
];

class Wizard extends React.Component {
  finishButtonClick(allStates) {
    console.log(allStates);
  }
  render() {
    return (
            <ReactWizard
              steps={steps}
              navSteps
              headerTextCenter
              validate
              color="primary"
              finishButtonClick={this.finishButtonClick}
              progressbar
            />
    );
  }
}
 
export default Wizard;