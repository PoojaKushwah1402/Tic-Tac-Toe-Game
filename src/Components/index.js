import React from "react";
import { Switch, Route } from 'react-router-dom'


import Dashboard from "./Dashboard";
import {setPoint, clearPoints} from "./DrawLine";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./UserDetails";

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
        console.log('check');
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
                setPoint(...this.state.won);

                break;
            }

        }
        return flag;
    }

    checkDiag = player => {
        let flag = false

        if(player[0][0]) {
            if( player[0][0] !== 0 && player[0][0] === player[1][1] && player[1][1] === player[2][2] ) {
                flag = true;
                this.state.won.push(`00`)
                this.state.won.push(`11`)
                this.state.won.push(`22`);
                setPoint(...this.state.won);

            }
        }
        else if( player[0][2] ) {
            if( player[0][2] !== 0 && player[0][2] === player[1][1] && player[1][1] === player[2][0] ) {
                flag = true;
                setPoint( `02`, `11`, `20`);
                this.state.won.push(`02`)
                this.state.won.push(`11`)
                this.state.won.push(`20`);
                setPoint(...this.state.won);

                
            }
        }
        else return false;

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
                setPoint(...this.state.won);

                break;
            }

        }

        return flag;
    }

    resetGame = () => {
        let points = this.state.won;
        this.setState({
            current : {},
            X : this.state.X,
            O : this.state.O,
            matrix : [new Array(3),new Array(3), new Array(3)],
            won : [],
        });
        clearPoints(...points)
    }

    resetWholeGame = () => {
        let points = this.state.won;
        this.setState({
            current : {},
            X : 'Player1',
            O : 'Player2',
            matrix : [new Array(3),new Array(3), new Array(3)],
            won : [],
            isLogin : false
        });
        clearPoints(...points)
    }

    setPoints =  select => {
        let row = Number(select[0]);
        let col = Number(select[1]);
        let currtemp = this.state.matrix;
        console.log(currtemp[row][col])
        //need to create new method that will take care of selected point
        if(currtemp[row][col] === 0) {
            currtemp[row][col] = (this.state.current === this.state.X) ? 'X' : 'O'
                this.setState({
                    matrix : currtemp
                })

                let rowWin = this.checkRows(currtemp);
                let colWin = this.checkColumns(currtemp);
                let diagWin = this.checkDiag(currtemp)
            
            setTimeout(()=> {
                if( rowWin || colWin || diagWin ) {
                    console.log(this.state.current)
                        alert('You Won '+ this.state.current ) ;
                    this.resetGame();
                    return
                }
                    this.switchUser();
            },100)
        }
        
          
    }


    onSelectHandler = ( e ) => {
        console.log(e.target.id)
        let select = e.target.id;

        if(select === 'main') {
            return;
        }
       this.setPoints( select )
    }

    fillUserDetails = ( player1, player2) => {
        console.log('hello',player1, player2)
        this.setState({
            X : player1,
            O : player2,
            isLogin : true
        })
    }

    render() {
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

                <Route exact path='/gamedashboard'
                    render={(props) => (
                    <Dashboard {...props} 
                    current = {this.state.current} 
                    p1 = {this.state.X} 
                    p2 = {this.state.O} 
                    player = {this.state.matrix} 
                    handler = {this.onSelectHandler} />)}
                />
                <Route path='*' >
                    <div> <h1>404 not found</h1></div>
                </Route>
            </Switch>

            <Footer/>
            </>
        )
    }

}

export default Main;