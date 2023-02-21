import React, { useState } from 'react'
import List from '../../stateless/list/List'
import styles from "../home/Home.module.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import data from '../../../data'

function Home() {
  const [people, setPeople] = useState(data); 
    return (
      <>
        <div className={styles.center}>
          <Row>
            <Col>
              <h3>{people.length} Birthdays Today</h3>
            </Col>
          </Row>
          <List people={people}></List>
          <button className="btn btn-success w-100 mt-4" onClick={() => setPeople([])}>Clear All</button>
        </div>
      </>
    )
  }

export default Home;
