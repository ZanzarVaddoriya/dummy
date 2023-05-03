import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Header from './Header';
function Product() {  

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                setdata(response.data.products)
                console.log(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <>
             <div className="App">
     <>
      <Header/>

      <Container>
        <div className="img wrapper">
          {
            data.map((user,i) => {
                return(
                  <>
                  <Card style={{ width: '15rem'}} key={i}>
                    <a ><Card.Img variant="top" src={user.thumbnail} className="img-fluid"></Card.Img></a>
                    <Card.Body>
                      <Card.Title>{user.title}</Card.Title>
                      <Card.Text>{user.brand}</Card.Text>
                      <Card.Text className='p-0'>
                        {/* <BsCurrencyDollar className='icon_bs'></BsCurrencyDollar>{user.price}BsCurrencyDollar */}
                      </Card.Text>
                      <Card.Text>
                        Stock : {user.stock}
                      </Card.Text>
                      <Card.Text>
                        <a href={`/singlepro/${user.id}`}>{user.brand}</a>
                        {/* <Button variant="primary"></Button> */}
                        {/* <Link to={`/singlepro/${user.id}`}>Click to view product </Link> */}
                        {/* <Link to={`/Home/${i.id}`}>more</Link> */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </>
                )
            })
          }
        </div>
      </Container> 
     </>
    </div>

        </>
    );
}

export default Product;