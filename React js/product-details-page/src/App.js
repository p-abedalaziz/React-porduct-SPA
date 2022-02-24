
import NavBar from './NavBar';
import {Container, Col, Row}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ProductPrewview from './ProductPreview'
import PPColors from './ProductPreviewcolors';
import Features from './Features';
import { Component } from 'react';
import ProductData from "./ProductDetails";



class App extends Component {
  onclickChangePreviewImage=(pos)=>{
    this.setState({ currentPreviewImagePos: pos})
  }
  onfeatureClick=(pos)=>{
    let updatedstates=true;
    if(pos===0){
      updatedstates = false;
    }
    this.setState({showHartBeatSextion: updatedstates})
  }
  state={
    ProductData:ProductData,
    currentPreviewImagePos:0,
    showHartBeatSextion:false  ,
    
  }
  render(){
return (
    <div className="App">
    <NavBar/>
      <Container >
        <Row className='mt-5'>
          <Col className='col-sm-12 col-md-6 '>
          <ProductPrewview  currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHartBeatSextion={this.state.showHartBeatSextion} />
          <PPColors  currentPreviewImagePos={this.state.currentPreviewImagePos} data={this.state.ProductData} onclickChangePreviewImage={this.onclickChangePreviewImage}/>           
          </Col>
        <Features onfeatureClick={this.onfeatureClick} showHartBeatSextion={this.state.showHartBeatSextion}/>
        </Row>
      </Container>
    </div>
  );}
}

export default App;
