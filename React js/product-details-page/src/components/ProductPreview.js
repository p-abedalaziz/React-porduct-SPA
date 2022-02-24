import React from "react";
import ProductData from './ProductDetails'
import { Col, Row} from 'react-bootstrap';
import classes from './PorductPreview.module.css'
const currentHoures = new Date().getHours() > 0 ? new Date().getHours() : '0' + new Date();
const currentMinutes = new Date().getMinutes() > 0 ? new Date().getMinutes() : '0' +  Date();

const ProductPrewview=(props)=>{
    return(
        <>
            <Row>
                <Col className="tex-center col-6"><div></div>
                {
                        props.showHartBeatSextion ? <span className={classes.icon}><i className="fa-solid fa-heart-pulse pulse animated infinite " ></i><br />
                            <p className={classes.heartRate}>78</p></span> : <p className={classes.time}>{`${currentHoures}:${currentMinutes}`}</p>

                }
                   
                   
                </Col>
               
            </Row>
            <Row >
                <h1 className={classes.produacttitle}>{ProductData.title}</h1>
                {/* here product pic */}
                <Col className='col-sm-12 text-center'><img className='text-center' src={props.currentPreviewImage} width="350px" />
                </Col>
            </Row>
            
        </>
    )
}
export default ProductPrewview;