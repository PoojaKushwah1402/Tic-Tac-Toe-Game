import React from "react";
import DisplayGame from "./Display";
import DisplayPlayer from "./DisplayPlayer";

class Main extends React.Component {
    constructor ( props ) {
        super(props)
        this.state ={
            current : {},
            X : 'Player1',
            O : 'Player2',
            matrix : [new Array(3),new Array(3), new Array(3)]

            // player1 : { 
            //     points : [new Array(3),new Array(3), new Array(3)],
            //     symbol : 'X'
            //     },

            // player2 : { 
            //     points : [new Array(3),new Array(3), new Array(3)],
            //     symbol : 'O'
            //     },
        }
    }

    static getDerivedStateFromProps (props, state) {
       
        if(state.matrix[0][0] == undefined) {
            for(let i in state.matrix) {
                state.matrix[i].fill(0)
            }
            // state.current.player = state.player1
            // state.current.name = 'Player1'
            state.current = state.X;
            return state;
        }
        return null
    }

    switchUser = () => {

        setTimeout(()=>{
            // if(this.state.current.player === this.state.player1) {
            //     let tempcurr = this.state.current;
            //     tempcurr.player = this.state.player2
            //     tempcurr.name = 'Player2'
            //     this.setState({
            //         current : tempcurr
            //     })
            // } else {
            //     let tempcurr = this.state.current;
            //     tempcurr.player = this.state.player1
            //     tempcurr.name = 'Player1'
            //     this.setState({
            //         current : tempcurr
            //     })
            // }

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

    }

    checkRows = ( player ) => {

        let flag = false;
        let count ;

        for(let i in player) {
            //count = 0;
            // for(let j in player[i]) {

            //     if(player[i][j]) {
            //         count++;
            //     }
            //     if(count === 3) {
            //         flag = true;
            //         break;
            //     }
            // }
            // if(flag) {
            //     break;}
            if( player[i][0] != 0 &&  player[i][0]  === player[i][1] && player[i][2] ===  player[i][1]  ) {
                flag = true;
                break;
            }

        }
        return flag;
    }

    checkDiag = player => {
        let flag = false

        if(player[0][0]) {
            // for(let i=0; i<3; i++) {
            //     if(player[i][i]) {
            //         count++;
            //     }else{
            //         break;
            //     }
            // }
            if( player[0][0] != 0 && player[0][0] === player[1][1] && player[1][1] === player[2][2] ) {
                flag = true;
            }
        }
        else if( player[0][2] ) {
            // for(let i =0; i<3; i++) {
            //     if(player[i][temp--]) {
            //         count++;
            //     }else{
            //         break;
            //     }
            // }
            if( player[0][2] != 0 && player[0][2] === player[1][1] && player[1][1] === player[2][0] ) {
                flag = true;
            }
        }
        else return false;

        return flag
    }

    checkColumns = player => {
        let flag = false;
        let count ;

        for(let i=0; i<3; i++) {
            // count = 0;
            // for(let j=0; j<3; j++) {

            //     if(player[j][i]) {
            //         count++;
            //     }
            //     if(count === 3) {
            //         flag = true;
            //         break;
            //     }
            // }
            // if(flag) {
            //     break;}

            if( player[0][i] != 0 &&  player[0][i]  === player[1][i] && player[2][i] ===  player[1][i]  ) {
                flag = true;
                break;
            }

        }

        return flag;
    }

    setPoints =  select => {
        let row = Number(select[0]);
        let col = Number(select[1]);
        let currtemp = this.state.matrix;

        currtemp[row][col] = (this.state.current === this.state.X) ? 'X' : 'O'

        this.setState({
            matrix : currtemp
        })

         let rowWin = this.checkRows(currtemp);
         let colWin = this.checkColumns(currtemp);
         let diagWin = this.checkDiag(currtemp)
      
       setTimeout(()=> {
           if( rowWin || colWin || diagWin ) {
               alert('You Won' ) ;
               return
           }
            this.switchUser();
    
       },100)
        
        
       
    }


    onSelectHandler = ( e ) => {
        console.log(e.target.id)
        let select = e.target.id;

        if(select == 'main') {
            return;
        }

       this.setPoints( select )

       
    
    }

    render() {
        return (
            <> 
              <DisplayPlayer current = {this.state.current} p1 = {this.state.X} p2 = {this.state.O} />
              {/* <DisplayGame player = {this.state.current.player} handler = {this.onSelectHandler} /> */}
              <DisplayGame player = {this.state.matrix} handler = {this.onSelectHandler} />
            </>
        )
    }

}

export default Main;