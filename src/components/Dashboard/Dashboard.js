import React from "react";
import { useState } from "react";
import DataTable from 'react-data-table-component';
import HeaderLogged from "../Header/Header-logged";
import Footer from "../Footer/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Button = () => <button type="button" className="btn btn-primary text-nowrap"><i class="bi bi-eye"></i></button>;

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Email ID',
    selector: row => row.email,
    sortable: true,
  },
  {
    name: 'Phone',
    selector: row => row.tel,
    sortable: true,
  },
  {
    name: 'View Resume',
    button: true,
    cell: () => <Button>View Resume</Button>,
    selector: row => row.action,
  },
];

const data = [
  {
    id: 1,
    name: 'Rinu Madathil',
    email: 'rinu@gmail.com',
    tel: '+919874561230',
  },
  {
    id: 2,
    name: 'Sunny',
    email: 'sunny@ymail.com',
    tel: '+914567891230',
  },
  {
    id: 3,
    name: 'Dolly',
    email: 'dnny@ymail.com',
    tel: '+914564891230',
  },
  {
    id: 4,
    name: 'Klly',
    email: 'dnjny@ymail.com',
    tel: '+914564891230',
  },
  {
    id: 5,
    name: 'Glly',
    email: 'dnany@ymail.com',
    tel: '+91456481230',
  },
  {
    id: 6,
    name: 'Zolly',
    email: 'dnny@ymail.com',
    tel: '+914564891230',
  },
  {
    id: 7,
    name: 'Colly',
    email: 'dngny@ymail.com',
    tel: '+9145671230',
  },
  {
    id: 8,
    name: 'Molly',
    email: 'dnnsy@ymail.com',
    tel: '+9145891230',
  },
  {
    id: 9,
    name: 'Eolly',
    email: 'dnkny@ymail.com',
    tel: '+914564891230',
  },
  {
    id: 31,
    name: 'Tolly',
    email: 'dnny@ymail.com',
    tel: '+9145j9891230',
  },
  {
    id: 32,
    name: 'Aolly',
    email: 'dnny@ymail.com',
    tel: '+91444891230',
  },
  {
    id: 33,
    name: 'Holly',
    email: 'dngny@ymail.com',
    tel: '+9145648980',
  },
  {
    id: 34,
    name: 'Volly',
    email: 'dngny@ymail.com',
    tel: '+914564891230',
  },
  {
    id: 35,
    name: 'Folly',
    email: 'dnnb@ymail.com',
    tel: '+914531230',
  },
];


function Dashboard() {

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())

    })
    setRecords(newData)
  }

  return (
    <>
      <HeaderLogged />

      <div className="p-5 bg-primary">
        <Container>
          <Row>
            <Col>
              <div className="py-5">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="bg-white rounded-top p-md-5 p-3 mt-n5 shadow">
        <Row>
          <Col>
            <Row className="justify-content-end align-items-center mb-2">
              <Col>
                <h3 className="mb-md-0 mb-3"><i class="bi bi-person"></i> Users</h3>
              </Col>
              <Col lg={4}>
                <FloatingLabel controlId="" label="Search">
                  <Form.Control type="text" onChange={handleFilter} />
                </FloatingLabel> </Col>
            </Row>

            <DataTable
              columns={columns}
              data={records}
              pagination
            />

          </Col>
        </Row>
      </Container>




      <Footer />

    </>
  )
}

export default Dashboard