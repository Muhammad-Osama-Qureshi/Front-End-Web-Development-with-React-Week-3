import React from 'react'
import { LEADERS } from './../shared/Leaders';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap'
 function RenderCard({item}){
return(
    <>
    <Card>
        <CardImg src={item.image} alt={item.name}/>
        <CardBody>
            <CardTitle>
                {item.name}
            </CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
            <CardText>{item.description}</CardText>
            </CardBody>
    </Card>
    </>
)
}



function Home(props){
    return(
        <div className="container">
             <div className="row algin-items-start">
                 <div className="col-12 col-md m-1">
                     <RenderCard item={props.dish}/>
                 </div>
                 <div className="col-12 col-md m-1">
                     <RenderCard item={props.promotions}/>
                 </div>
                 <div className="col-12 col-md m-1">
                     <RenderCard item={props.leaders}/>
                 </div>
                 </div>            
        </div>
    )

}

export default Home