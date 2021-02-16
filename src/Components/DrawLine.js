import   "./container.css";



const setPoint = (pointA, pointB, pointC) => {

    if(pointA && pointB && pointC) {
        const div1 = document.getElementById(`${pointA}`);
        const div2 = document.getElementById(`${pointB}`);
        const div3 = document.getElementById(`${pointC}`);

        div1.classList = 'cell-box-won';
        div2.classList = 'cell-box-won';
        div3.classList = 'cell-box-won';
    }
    

}

const clearPoints = (pointA, pointB, pointC) => {

    if(pointA && pointB && pointC) {
    const div1 = document.getElementById(`${pointA}`);
    const div2 = document.getElementById(`${pointB}`);
    const div3 = document.getElementById(`${pointC}`);

    div1.classList = 'cell-box';
    div2.classList = 'cell-box';
    div3.classList = 'cell-box';
    }
}

export  {setPoint, clearPoints };