import React,{Component} from 'react';
import Menu from './MenuComponents'
import DishDetail from './Dishdetail';
import {DISHES} from '../shared/dishes'
import {PROMOTIONS} from '../shared/Promotion'
import {COMMENTS} from '../shared/Comments'
import {LEADERS} from '../shared/Leaders'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {Switch, Route ,Redirect} from 'react-router-dom'
import Contact from './contact'
import About from './About'




class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
  
    }
  }

 
  
 

  render() {
    const Homepage =()=>{
      return(<>
      <Home dish={this.state.dishes.filter(dish=>dish.featured)[0]} 
      promotions={this.state.leaders.filter(leader=>leader.featured)[0]}
      comments={this.state.comments.filter(comment=>comment.featured)[0]}
      leaders={this.state.promotions.filter(promotion=>promotion.featured)[0]}
      
      />
      </>)
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
  
   
    return (
      <div className="App">
        <Header />
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}  />} />
        <Route path="/menu/:dishId" component={DishWithId}/>
        <Route exact path="/contactus" component={Contact}/>
        <Route exact path="/aboutus" component={()=> <About leaders={this.state.leaders} />} />
        <Redirect to="/home" />
      </Switch>

        <Footer/>
      </div>
    );
  }
}
export default Main;