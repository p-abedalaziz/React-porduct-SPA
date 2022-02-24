import React from "react";
import classes from './PorductPreview.module.css';

import { Col, Row } from 'react-bootstrap';

const PPColors = (props) => {
    const ColorsChange = props.data.colorOptions.map((item,pos) => {
        const Arrclass = [classes.selectedimg];
        if (pos === props.currentPreviewImagePos) {
            Arrclass.push(classes.borderedprouduct);
        }
        
        return (
            <>
                <Col>
                    <img onClick={() => props.onclickChangePreviewImage(pos)} key={pos} className={Arrclass.join('')} src={item.imageUrl} width="100%" />
                </Col>

            </>
        )
    });
    return (
        <>
            <Row className="mt-2 text-white-50 mb-5">
                <h3 className="mt-2 text-white-50 ">Select Color</h3>
                {ColorsChange}
            </Row>
        </>

    )
}
export default PPColors;