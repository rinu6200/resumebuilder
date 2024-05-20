import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumeImg from '../../assets/img/resume-avatar.jpg';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';


function Resume() {
  return (
    <>



      <div className="bg-white shadow-lg">
        <section id="header" className="p-3 bg-dark">
          <Row>
            <Col>
              <Image src={ResumeImg} roundedCircle width={250} />
            </Col>
            <Col>
              <h1 class="text-white text-uppercase">Steve Doe</h1>
              <div class="text-white">Full Stack Developer</div>
            </Col>
            <Col>
              <ul class="list-unstyled text-white">
                <li class="mb-2"><i class="bi bi-envelope"></i> steve.doe@website.com</li>
                <li><i class="bi bi-phone"></i> 0123 456 78900</li>
              </ul>
            </Col>
          </Row>
        </section>

        <div className="p-md-5 p-3">


          <section id="summary" className="mb-5">
            <h5 class="text-uppercase fw-bold pb-2 mb-0">Career Summary</h5>
            <hr />
            <p class="mb-0">Summarise your career here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </section>

          <Row>
            <Col md={9} className="pe-5">
              <section id="work">
                <h5 class="text-uppercase fw-bold pb-2 mb-0">Work Experience</h5>
                <hr />

                <div className="border-start ps-5">

                  <article class="pb-5">
                    <div class="mb-2">
                      <div class="d-flex flex-column flex-md-row position-relative">
                        <i class="bi bi-arrow-right-circle-fill position-absolute top-0 start-0 translate-middle mt-2 h4 mb-0 ms-n5"></i>
                        <h6 class="fw-bold mb-1">Lead Developer</h6>
                        <div class="ms-auto">Startup Hub</div>
                      </div>
                      <div class="small text-muted">2023 - Present</div>
                    </div>
                    <div class="py-3">
                      <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                      <h6 class="fw-bold mb-1">Achievements:</h6>
                      <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                      <ul>
                        <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                        <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                        <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                        <li>Maecenas tempus tellus eget.</li>
                      </ul>
                      <h6 class="fw-bold mb-1">Technologies used:</h6>
                      <div className="d-grid d-md-flex gap-2">
                        <Badge bg="secondary">Angular</Badge>
                        <Badge bg="secondary">Python</Badge>
                        <Badge bg="secondary">jQuery</Badge>
                        <Badge bg="secondary">Webpack</Badge>
                        <Badge bg="secondary">HTML</Badge>
                        <Badge bg="secondary">PostgresSQL</Badge>
                      </div>
                    </div>
                  </article>

                  <article class="pb-5">
                    <div class="mb-2">
                      <div class="d-flex flex-column flex-md-row position-relative">
                        <i class="bi bi-arrow-right-circle-fill position-absolute top-0 start-0 translate-middle mt-2 h4 mb-0 ms-n5"></i>
                        <h6 class="fw-bold mb-1">Senior Software Developer</h6>
                        <div class="ms-auto">Google</div>
                      </div>
                      <div class="small text-muted">2019 - 2023</div>
                    </div>
                    <div class="py-3">
                      <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                      <h6 class="fw-bold mb-1">Achievements:</h6>
                      <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                      <ul>
                        <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                        <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                        <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                        <li>Maecenas tempus tellus eget.</li>
                      </ul>
                      <h6 class="fw-bold mb-1">Technologies used:</h6>
                      <div className="d-grid d-md-flex gap-2">
                        <Badge bg="secondary">React</Badge>
                        <Badge bg="secondary">Webpack</Badge>
                        <Badge bg="secondary">HTML</Badge>
                        <Badge bg="secondary">PostgresSQL</Badge>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            </Col>
            <Col md={3}>
              <section id="skill" className="mb-5">
                <h5 class="text-uppercase fw-bold pb-2 mb-0">Skills & Tools</h5>
                <hr />
                <h6 class="fw-bold mb-1">Frontend</h6>
                <small class="mb-1">Angular</small>
                <ProgressBar now={60} variant="primary" style={{ height: '5px' }} className="mb-2" />
                <small class="mb-1">React</small>
                <ProgressBar now={40} variant="primary" style={{ height: '5px' }} className="mb-2" />
                <small class="mb-1">JavaScript</small>
                <ProgressBar now={50} variant="primary" style={{ height: '5px' }} className="mb-2" />
                <small class="mb-1">Node.js</small>
                <ProgressBar now={60} variant="primary" style={{ height: '5px' }} className="mb-2" />
                <small class="mb-1">HTML/CSS/SASS/LESS</small>
                <ProgressBar now={90} variant="primary" style={{ height: '5px' }} className="mb-2" />
              </section>

              <section id="education" className="mb-5">
                <h5 class="text-uppercase fw-bold pb-2 mb-0">Education</h5>
                <hr />
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <div class="fw-bold">MSc in Computer Science</div>
                    <div class="">University College London</div>
                    <div class="small text-muted">2013 - 2014</div>
                  </li>
                  <li>
                    <div class="fw-bold">BSc Maths and Physics</div>
                    <div class="">Imperial College London</div>
                    <div class="small text-muted">2010 - 2013</div>
                  </li>
                </ul>
              </section>


              <section id="awards" className="mb-5">
                <h5 class="text-uppercase fw-bold pb-2 mb-0">Awards</h5>
                <hr />
                <ul class="list-unstyled">
                  <li class="mb-2"><div className="fw-bold"><i class="bi bi-trophy-fill text-muted"></i> Award Name Lorem </div><span className="text-muted">Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem.</span></li>
                  <li class="mb-2"><div className="fw-bold"><i class="bi bi-trophy-fill text-muted"></i> Award Name  </div><span className="text-muted">Award desc tricies nec, pellentesque eu, pretium quis, sem.</span></li>
                </ul>
              </section>

              <section id="language" className="mb-5">
                <h5 class="text-uppercase fw-bold pb-2 mb-0">Language</h5>
                <hr />
                <ul class="list-unstyled">
                  <li class="mb-2">English <small className="text-muted">(Native)</small></li>
                  <li class="mb-2">French  <small className="text-muted">(Professional)</small></li>
                  <li class="mb-2">Spanish  <small className="text-muted">(Professional)</small></li>
                </ul>
              </section>

              <section id="interests" className="mb-5">
                <h5 class="text-uppercase fw-bold pb-2 mb-0">Interests</h5>
                <hr />
                <ul class="list-unstyled">
                  <li class="mb-2">Climbing</li>
                  <li class="mb-2">Snowboarding</li>
                  <li class="mb-2">Cooking</li>
                </ul>
              </section>

            </Col>
          </Row>
        </div>
      </div>




    </>
  )
}

export default Resume
