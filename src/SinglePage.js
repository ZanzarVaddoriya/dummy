import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';


function SinglePage(){

    // const { id } = useParams()
    let [val,setval] = useState ([])
    let [status,setstatus] = useState(false)

    const params = useParams();
    
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.id}`)
            .then(function (response) {
                // handle success
                setval(response.data)
                setstatus(true)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [params.id])

    const Arr = val.images;
    const [showImage, setShowImage] = useState(val)
    const handleClick = (value) => {
        setShowImage(Arr[value]);
    };

    console.log("image",showImage)
    if(status)
    {
        return(
            <>
              <div className="App">
                    <Container fluid>
                        <Row className='my-4'>
                            <Col md={5} sm={12}>
                                <img src={showImage} alt='' className="img_big"></img>
                            </Col>
                            <Col md={7} sm={12}>
                                <div className="cantain_area py-5 px-1">
                                    <div className='pro_title'>
                                        <h3>{val.title}</h3>
                                    </div>
                                    <hr className="product-divider"></hr>
                                    <div className="price">
                                        <h3>${val.price}</h3>
                                    </div>
                                    <div className="star d-flex">
                                        <h2>{val.rating}</h2><h4 className="pt-2">(Rating)</h4>
                                    </div>
                                    <div className="disc">
                                        <p>{val.desciption}</p>
                                    </div>
                                    <hr className="proct-divider"></hr>
                                    {/* <a className="btn btn-dark btn-rounded btn-icon-right">Add to Cart</a> */}
                                    <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className='p-0'>
                                <ul className='d-flex p-0'>
                                    {
                                        Arr.map((data,index)=>{
                                            return(
                                                <>
                                                <li className='px-2'>
                                                    <div key={index} className='smallImg_area d-flex'>
                                                        <img src={data} alt='' onClick={()=> handleClick(index)} className='img-fluid'></img>
                                                    </div>
                                                </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>       
            </>
        );
    }
    else{
        <h1> data load</h1>
    }

}

export default SinglePage;