import React from 'react';
import Image from 'react-bootstrap/Image'
import styles from '../../statefull/home/Home.module.css'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;

        return <article key={id}>
              <Image src={image} alt={name} className={styles.image} roundedCircle/>

              <div className={styles.line}>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
        </article>;
      })}
    </>
  );
}

export default List
