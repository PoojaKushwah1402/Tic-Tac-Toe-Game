import React from "react";
import { Switch, Route } from 'react-router-dom'



import Dashboard from "./Dashboard";
import {setPoint, clearPoints} from "./DrawLine";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./UserDetails";
import NotFound from "./NotFoundPage";

class Main extends React.Component {
    constructor ( props ) {
        super(props)
        this.state ={
            isLogin : false,
            current : {},
            X : 'Player1',
            O : 'Player2',
            matrix : [new Array(3),new Array(3), new Array(3)],
            won : []
        }
    }

    static getDerivedStateFromProps (props, state) {
       
        if(state.matrix[0][0] === undefined) {
            for(let i in state.matrix) {
                state.matrix[i].fill(0)
            }
            state.current = state.X;
            return state;
        }
        return null
    }

    checkForTie = () => {
       // console.log('check');
        for(let i in this.state.matrix) {
            for(let j in this.state.matrix[i]) {
                if(this.state.matrix[i][j] === 0 ) {
                    return false
                }
            }
        }
        return true;
    }

    switchUser = () => {

        if( ! this.checkForTie() ) {

        setTimeout(()=>{
                if(this.state.current === this.state.X) {
                    this.setState({
                        current : this.state.O
                    })
                }
                else {
                    this.setState({
                        current : this.state.X
                    })
                }
            },0)

         } else {
            this.resetGame();
            alert('Game Tied')
         }

    }

    checkRows = ( player ) => {

        let flag = false;

        for(let i in player) {
            if( player[i][0] !== 0 &&  player[i][0]  === player[i][1] && player[i][2] ===  player[i][1]  ) {
                flag = true;
                this.state.won.push(`${i}0`);
                this.state.won.push(`${i}1`);
                this.state.won.push(`${i}2`);
               // console.log(this.state.won);
                setPoint(...this.state.won);

                break;
            }

        }
        return flag;
    }

    checkDiag = player => {
        let flag = false

        if(player[0][0]) {
            console.log(this.state.won);
            if( player[0][0] !== 0 && player[0][0] === player[1][1] && player[1][1] === player[2][2] ) {
                flag = true;
                this.state.won.push(`00`)
                this.state.won.push(`11`)
                this.state.won.push(`22`);
               // console.log(this.state.won);
                setPoint(...this.state.won);
                return true;
            }
        }
        if( player[0][2] ) {
            console.log(this.state.won);
            if( player[0][2] !== 0 && player[0][2] === player[1][1] && player[1][1] === player[2][0] ) {
                flag = true;
                //setPoint( `02`, `11`, `20`);
                this.state.won.push(`02`)
                this.state.won.push(`11`)
                this.state.won.push(`20`);
                console.log(this.state.won);
                setPoint(...this.state.won);
                return true
                
            }
        }

        return flag
    }



    checkColumns = player => {
        let flag = false;

        for(let i=0; i<3; i++) {

            if( player[0][i] !== 0 &&  player[0][i]  === player[1][i] && player[2][i] ===  player[1][i]  ) {
                flag = true;
                setPoint( `0${i}`, `1${i}`, `2${i}`);
                this.state.won.push(`0${i}`)
                this.state.won.push(`1${i}`)
                this.state.won.push(`2${i}`)
              //  console.log(this.state.won);
                setPoint(...this.state.won);

                break;
            }

        }

        return flag;
    }

    resetGame = () => {
        console.log('reset')
        this.setState({
            current : {},
            X : this.state.X,
            O : this.state.O,
            matrix : [new Array(3),new Array(3), new Array(3)],
            won : [],
        });
        //clearPoints(...points)
        clearPoints()
    }

    resetWholeGame = () => {
        //let points = this.state.won;
        this.setState({
            current : {},
            X : 'Player1',
            O : 'Player2',
            matrix : [new Array(3),new Array(3), new Array(3)],
            won : [],
            isLogin : false
        });
       // clearPoints(...points)
        clearPoints()
    }

    setStyle = id => {

        const currDiv = document.querySelector('#_'+id);
       // console.log(currDiv,id);
        currDiv.className = 'occupied-div'
    }

    setPoints =  select => {
        let row = Number(select[1]);
        let col = Number(select[2]);
        let currtemp = this.state.matrix;
        //console.log(currtemp)
        if(currtemp[row][col] === 0) {
            this.setStyle(row+''+col);
            currtemp[row][col] = (this.state.current === this.state.X) ? 'X': 'O'
           // currtemp[row][col] = (this.state.current === this.state.X) ? <CloseIcon/> : <RadioButtonUncheckedIcon/>
                this.setState({
                    matrix : currtemp
                })

                let rowWin = this.checkRows(currtemp);
                let colWin = this.checkColumns(currtemp);
                let diagWin = this.checkDiag(currtemp)
            
            setTimeout(()=> {
                if( rowWin || colWin || diagWin ) {
                   // console.log(this.state.current)
                        alert('You Won '+ this.state.current ) ;
                    this.resetGame();
                    return
                }
                    this.switchUser();
            },100)
        }
        
          
    }


    onSelectHandler = ( e ) => {
       // console.log(e.target.id)
        let select = e.target.getAttribute('data-custom-id');
        console.log(select)
        if(!select) {
            return;
        }
        if(select[0]==='_'){
            this.setPoints( select )
        }
       
    }

    fillUserDetails = ( player1, player2) => {
      //  console.log('hello',player1, player2)
        this.setState({
            X : player1,
            O : player2,
            isLogin : true
        })
    }

    ifEligible = token => {
        let dashboard = (<Route exact path='/gamedashboard'
                                render={(props) => (
                                <Dashboard {...props} 
                                current = {this.state.current} 
                                p1 = {this.state.X} 
                                p2 = {this.state.O} 
                                player = {this.state.matrix} 
                                handler = {this.onSelectHandler} 
                                onreset = {this.resetGame}  />)}
                            />)
        return (token) ? dashboard : '';
    }

    render() {

        const gameboard = this.ifEligible(this.state.isLogin)

        return (
            <> 
            <Header userLogin = {this.state.isLogin}
                    resetWhole = {this.resetWholeGame}
            />

            <Switch>

               <Route exact path='/'
                    render={(props) => (
                    <Details {...props} 
                    setDetails = {this.fillUserDetails} />)}
               />

                {/* // <Route exact path='/gamedashboard'
                //     render={(props) => (
                //     <Dashboard {...props} 
                //     current = {this.state.current} 
                //     p1 = {this.state.X} 
                //     p2 = {this.state.O} 
                //     player = {this.state.matrix} 
                //     handler = {this.onSelectHandler} />)}
                // /> */}
                {gameboard}
                <Route path='*' component={NotFound} />
                    
            </Switch>

            <Footer/>
            </>
        )
    }

}

export default Main;
