import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
    return (
        <div>
            <h1>Home</h1>  
        <div className="home-container">

            <Card className='card1' style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71Jas3Z5zaL._SX569_.jpg" />
  <Card.Body>
    <Card.Title>Redbull</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>

            <Card className='card2' style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://images.albertsons-media.com/is/image/ABS/960488890?$ecom-pdp-desktop$&defaultImage=Not_Available" />
  <Card.Body>
    <Card.Title>Bang Energy</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>   

            <Card className='card3' style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWVIMdFLtoQ6sijQDf6ynptznzSZy_bBw79vK7G7JQ0F4GFs-_AF73JOa2A&usqp=CAc" />
  <Card.Body>
    <Card.Title>Monster Energy</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>   

            <Card className='card4' style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://images.heb.com/is/image/HEBGrocery/002952519" />
  <Card.Body>
    <Card.Title>Monster Energy</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>   

    </div>
</div>
    );
}

export default Home;
