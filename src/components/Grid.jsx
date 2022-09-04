import checkmark from '../icons/check.svg';
import '../styles/grid.css';

const Grid = (props) => {

    const dataSet = props.dataSet;
    const gridId = props.gridId;
    const columns = Math.floor(Math.sqrt(dataSet.length));
    const varGridColumns = {
        gridTemplateColumns: `repeat(${columns}, 1fr)` 
    }

    return ( 
        <div className="grid-wrapper" style={varGridColumns} id={gridId}>
        {dataSet.map(subject => (
            <div className="subject-wrapper">
                <img src={checkmark} alt="checkmark" width={25} />
                <h3>{subject}</h3>
            </div>
            ))
        }

        </div>       

);

}
 
export default Grid;