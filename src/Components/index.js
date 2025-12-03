import React from "react";
import { Switch, Route } from 'react-router-dom'

import Dashboard from "./Dashboard";
import {setPoint, clearPoints} from "./DrawLine";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./UserDetails";
import NotFound from "./NotFoundPage";
import Modal from "./Modal";

class Main extends React.Component {
    constructor ( props ) {
        super(props)
        this.state ={
            isLogin : false,
            current : 'Player1',
            X : 'Player1',
            O : 'Player2',
            matrix : [[0,0,0],[0,0,0],[0,0,0]],
            won : [],
            showModal: false,
            modalType: '',
            modalWinner: ''
        }
    }

    checkForTie = () => {
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
            this.showGameResult('tie');
        }
    }

    showGameResult = (type, winner = '') => {
        this.setState({
            showModal: true,
            modalType: type,
            modalWinner: winner
        });
    }

    handleModalClose = () => {
        this.setState({
            showModal: false,
            modalType: '',
            modalWinner: ''
        });
        this.resetGame();
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
                return true;
            }
        }
        if( player[0][2] ) {
            if( player[0][2] !== 0 && player[0][2] === player[1][1] && player[1][1] === player[2][0] ) {
                flag = true;
                this.state.won.push(`02`)
                this.state.won.push(`11`)
                this.state.won.push(`20`);
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
                setPoint(...this.state.won);
                break;
            }
        }

        return flag;
    }

    resetGame = () => {
        this.setState({
            current : this.state.X,
            X : this.state.X,
            O : this.state.O,
            matrix : [[0,0,0],[0,0,0],[0,0,0]],
            won : [],
        });
        clearPoints()
    }

    resetWholeGame = () => {
        this.setState({
            current : 'Player1',
            X : 'Player1',
            O : 'Player2',
            matrix : [[0,0,0],[0,0,0],[0,0,0]],
            won : [],
            isLogin : false,
            showModal: false,
            modalType: '',
            modalWinner: ''
        });
        clearPoints()
    }

    setPoints = select => {
        let row = Number(select[1]);
        let col = Number(select[2]);
        let currtemp = [...this.state.matrix.map(row => [...row])];
        
        if(currtemp[row][col] === 0) {
            currtemp[row][col] = (this.state.current === this.state.X) ? 'X': 'O'
            this.setState({
                matrix : currtemp
            })

            let rowWin = this.checkRows(currtemp);
            let colWin = this.checkColumns(currtemp);
            let diagWin = this.checkDiag(currtemp)
        
            setTimeout(()=> {
                if( rowWin || colWin || diagWin ) {
                    this.showGameResult('winner', this.state.current);
                    return
                }
                this.switchUser();
            },100)
        }
    }

    onSelectHandler = ( e ) => {
        let select = e.target.getAttribute('data-custom-id');
        if(!select) {
            return;
        }
        if(select[0]==='_'){
            this.setPoints( select )
        }
    }

    fillUserDetails = ( player1, player2) => {
        this.setState({
            X : player1,
            O : player2,
            current: player1,
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
                {gameboard}
                <Route path='*' component={NotFound} />
            </Switch>

            <Modal 
                isOpen={this.state.showModal}
                type={this.state.modalType}
                winner={this.state.modalWinner}
                onClose={this.handleModalClose}
            />

            <Footer/>
            </>
        )
    }
}

export default Main;
