import "./container.css";

const setPoint = (pointA, pointB, pointC) => {
    if (pointA && pointB && pointC) {
        const div1 = document.getElementById(`_${pointA}`);
        const div2 = document.getElementById(`_${pointB}`);
        const div3 = document.getElementById(`_${pointC}`);

        if (div1) div1.classList = 'cell-box-won';
        if (div2) div2.classList = 'cell-box-won';
        if (div3) div3.classList = 'cell-box-won';
    }
};

const clearPoints = () => {
    const mainid = document.getElementById('main');
    if (mainid) {
        const main = mainid.children;
        for (let x = 0; x < 9; x++) {
            if (main[x]) {
                main[x].classList = 'cell-box';
            }
        }
    }
};

export { setPoint, clearPoints };
