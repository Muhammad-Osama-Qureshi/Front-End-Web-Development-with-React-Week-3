import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle,Breadcrumb,BreadcrumbItem,Button,Label,Col, Row,ModalBody,ModalHeader,Modal } from 'reactstrap';
import {Link} from 'react-router-dom'  

import { Control,LocalForm,Errors } from "react-redux-form";



const required =(val) => val && val.length;
const maxlength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends React.Component{
        constructor(props) {
            super(props);
            this.state= {
              isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values) {
            this.toggleModal();
            console.log("Current State is: " + JSON.stringify(values));
            alert("Current State is: " + JSON.stringify(values));
        }

        render(){
            return(
                <div>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
                    </Button>
                    <React.Fragment>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating" md={12}>Rating</Label>
                                        <Col md={12}>
                                            <Control.select model=".rating" name="rating"
                                                className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="author" md={12}>Your Name</Label>
                                        <Col md={12}>
                                        <Control.text model=".author" id="author" name="author"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators ={{
                                                required, minLength: minLength(3), maxlength: maxlength(15)
                                            }} />
                                        <Errors className="text-danger" model=".author" show="touched" messages={{
                                            required: 'Required, ',
                                            minLength: 'Must be grater than 2 character',
                                            maxlength: 'Must be 15 characters or less'
                                            }} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="comment" md={12}>Comment</Label>
                                        <Col md={12}>
                                            <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="6"
                                                className="form-control" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={12}>
                                            <Button type="submit" color="primary">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </React.Fragment>
              </div>
            );
        }
    }

    function RenderDish({selectDish}) {

        if (selectDish != null) {
            return(
                <Card>
                    <CardImg width='100%' src={selectDish.image} alt={selectDish.name} />
                    <CardBody>
                        <CardTitle>{selectDish.name}</CardTitle>
                        <CardText>{selectDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        if (comments != null) {
                return (
                    <React.Fragment>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', {month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(comment.date))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm />
                    </React.Fragment>
                );
        } else {
            return (
                <div></div>
            );
        }
    }
     
    const DishDetail = (props) => {
        return(
            <div className= "container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish selectDish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }

 export default DishDetail;