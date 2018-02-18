import React from 'react';
import {connect} from 'react-redux';
import ACTION from '../action_constants';
import { Link } from 'react-router-dom';
import './mazegame.less';
import {Pawnreside} from '../util/common.js'

class Mazegame extends React.Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
    this.state={
        pawnsPosition:[4,23,54,21],
        kingPosition:35,
        dimension:8,
        totalsteps:0,
        GameOver:false
    }
  }
  escFunction(event){
     if(this.state.pawnsPosition.length>0){
        if(event.keyCode === 37) {
            if((this.state.kingPosition-1)>(0)){
          this.setState({
              kingPosition:this.state.kingPosition-1,
              totalsteps:++this.state.totalsteps,
          })
        }
        }else if(event.keyCode === 38) {
            if((this.state.kingPosition-8)>(0)){
                this.setState({
                    kingPosition:this.state.kingPosition-8,
                    totalsteps:++this.state.totalsteps,
                })
            }
          }else if(event.keyCode === 39) {
            if((this.state.kingPosition+1)<=(this.state.dimension*this.state.dimension)){
                this.setState({
                    kingPosition:this.state.kingPosition+1,
                    totalsteps:++this.state.totalsteps,
                });
            }          
          }else if(event.keyCode === 40) {
              if((this.state.kingPosition+8)<=(this.state.dimension*this.state.dimension)){
                this.setState({
                    kingPosition:this.state.kingPosition+8,
                    totalsteps:++this.state.totalsteps,
                })
            }
         }
     } else{
         this.setState({
             GameOver:true
         })
     }
  }
  loopbox=(event)=>{
    var rows = [],
    self=this.state;
    let i = 0;
    var len = this.state.dimension*this.state.dimension;
    while (++i <= len) rows.push(i);
    return (
      <div>
        {
        rows.map( (i)=> {
            if(Pawnreside(self.pawnsPosition,i).data){
                if(self.kingPosition==i){
                    self.pawnsPosition.splice(Pawnreside(self.pawnsPosition,i).index,1);   
                    const {dispatch}=this.props;  
                    dispatch({type:ACTION.MAZEGAME.GAMEOVER,data:self.pawnsPosition})              
                    return (  
                        <div key={i} className="white">&#9819;</div>
                    );
                }else{
                    return(
                        <div key={i} className="white">&#9823;</div>
                    );
                } 
            }else if(self.kingPosition==i){
                return (  
                    <div key={i} className="white">&#9819;</div>
                );
            }else{
                return (  
                    <div key={i} className="white"></div>
                );  
            }
        })}
      </div>
    ); 
  }

  render() {
    return (
        <div className="container">
        {
            this.state.GameOver &&
            alert("You save the queen in "+this.state.totalsteps+" steps!! WELL PLAYED")            
        }
        <div className="chessboard" >
          {   
              this.loopbox(this) 
          }
       </div>
       <Link className='tab-text' to="/about">About</Link>
       </div>
    );
  }
  componentDidMount(){
    document.addEventListener("keyup", this.escFunction, false);
  }
  componentWillReceiveProps(newprops){
        if(!newprops.mazegame.gameover){
            this.setState({
                GameOver:true
            });       
        }
  }
}
const mapStateToProps = (state) => {
  return {
    mazegame: state.mazegame
  };
};
export default connect(mapStateToProps)(Mazegame);
