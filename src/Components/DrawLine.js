import   "./container.css";



const setPoint = (pointA, pointB, pointC) => {

    if(pointA && pointB && pointC) {
        const div1 = document.getElementById(`_${pointA}`);
        const div2 = document.getElementById(`_${pointB}`);
        const div3 = document.getElementById(`_${pointC}`);

        div1.classList = 'cell-box-won';
        div2.classList = 'cell-box-won';
        div3.classList = 'cell-box-won';
    }
    

}

const clearPoints = (pointA, pointB, pointC) => {

    //if(pointA && pointB && pointC) {
    // const div1 = document.getElementById(`_${pointA}`);
    // const div2 = document.getElementById(`_${pointB}`);
    // const div3 = document.getElementById(`_${pointC}`);
    const mainid = document.getElementById(`main`);
    if(mainid) {
        const main = mainid.children
        console.log(main);
    
        for(let x=0; x<9; x++) {
            console.log(main[x]);
            main[x].classList = 'cell-box';
        }
    }
   
 
    // div1.classList = 'cell-box';
    // div2.classList = 'cell-box';
    // div3.classList = 'cell-box';
   // }
}

export  {setPoint, clearPoints };