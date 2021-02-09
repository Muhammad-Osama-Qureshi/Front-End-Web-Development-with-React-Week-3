import React,{Component} from 'react';
import Menu from './MenuComponents'
import DishDetail from './Dishdetail';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {Switch, Route ,Redirect,withRouter} from 'react-router-dom'
import Contact from './contact'
import About from './About'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
 return {
   dishes:state.dishes,
   comments:state.comments,
   promotions:state.promotions,
   leaders:state.leaders 
 }  
}


class Main extends Component {
  constructor(props){
    super(props);
 
  }


  
 

  render() {
    const Homepage =()=>{
      return(<>
      <Home dish={this.props.dishes.filter(dish=>dish.featured)[0]} 
      promotions={this.props.leaders.filter(leader=>leader.featured)[0]}
      comments={this.props.comments.filter(comment=>comment.featured)[0]}
      leaders={this.props.promotions.filter(promotion=>promotion.featured)[0]}
      
      />
      </>)
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
  
   
    return (
      <div className="App">
        <Header />
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}  />} />
        <Route path="/menu/:dishId" component={DishWithId}/>
        <Route exact path="/contactus" component={Contact}/>
        <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders} />} />
        <Redirect to="/home" />
      </Switch>

        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));