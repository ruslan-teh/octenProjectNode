import {useDispatch} from "react-redux";

import '../Item/Item.css'
import {changeStatus, delItem} from "../../store/form.slice";

const Item = ({item}) => {
    const {id, value, status} = item
    const dispatch = useDispatch();


    return (
        <div>
            <h2>
                <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
                <span className={status ? 'checked' : ''}>{value}</span>
                <button onClick={() => dispatch(delItem({id}))}>Delete</button>
            </h2>
        </div>
    );
};

export default Item;