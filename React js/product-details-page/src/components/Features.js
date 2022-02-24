import React from "react";
import { Col, Row, Button } from 'react-bootstrap';
import ProductData from './ProductDetails'
import classes from './App.module.css';

const Features=(props)=>{
    const featureList=ProductData.featureList.map((item,pos)=>{
        const classArr=[classes.featureItem];
        if(pos===1){
            classArr.push(classes.btndanger)
        }else{
            classArr.push(classes.btnsucces) 
        }
        return(
            <>
                <Col className="mt-2">
                    <Button onClick={()=>props.onfeatureClick(pos)} key={pos} className={classArr.join('')}>{item}</Button>
                </Col>
            </>
           
        );
    })
    return(
        <>
            <Col className='col-sm-12 mt-2 col-md-6 '>
                <h3 className=" text-white-50">Features:</h3>
                <Row className='mt-2'>
                    {featureList}
                    
                    {/* <Col>
                <button className='btn btn-outline-light w-100 text-dark'>Buy Now!</button>
              </Col> */}
                </Row>
                <h4 className='text-white-50'>Description:</h4>
                <p className={classes.producdescription}>{ProductData.description}
                </p>
            </Col></>
    )
}
export default Features;