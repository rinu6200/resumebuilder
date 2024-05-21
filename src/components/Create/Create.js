import React, { useState } from "react";
import HeaderLogged from "../Header/Header-logged";
import Footer from "../Footer/Footer";
import First from "../Wizard/first";
import Second from "../Wizard/second";
import Third from "../Wizard/third";
import Fourth from "../Wizard/fourth";
import Fifth from "../Wizard/fifth";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/esm/Button";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Create() {
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <>
      <HeaderLogged />

      <div className="p-5 bg-primary">
        <Container>
          <Row>
            <Col>
              <div className="p-md-5 p-3">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="bg-white rounded-top mt-n5 shadow">
        <Row>
          <Col className="px-md-5 p-2 pt-md-2 pb-md-5">

          <Tabs activeKey={currentTab} id="" variant="underline">
            <Tab eventKey={0} title="Summary" disabled={currentTab !== 0}>              
            <First />
            </Tab>
            <Tab eventKey={1} title="Experience" disabled={currentTab !== 1}>             
            <Second />
            </Tab>
            <Tab eventKey={2} title="Education" disabled={currentTab !== 2}>             
            <Third />
            </Tab>
            <Tab eventKey={3} title="Skills" disabled={currentTab !== 3}>             
            <Fourth />
            </Tab>
            <Tab eventKey={4} title="Additional Info" disabled={currentTab !== 4}>             
            <Fifth />
            </Tab>
          </Tabs>

          <Stack gap={3} direction="horizontal" className="mt-3">
        <Button
          className="btn-outline-primary bg-transparent text-primary"
          disabled={currentTab === 0}
          onClick={() => setCurrentTab((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          className="btn-primary  ms-auto"
          disabled={currentTab === 4}
          onClick={() => setCurrentTab((prev) => prev + 1)}
        >
          Let's go to next step! 
        </Button>
      </Stack>

          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Create
