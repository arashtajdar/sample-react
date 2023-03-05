import {ActivityCardInterface} from "../Interfaces/ActivtiyCardInterface";

function ActivityListRow(props : ActivityCardInterface) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.data.Activity_title}</td>
            <td>{props.data.Activity_type}</td>
            <td>{props.data.Activity_city}</td>
            <td>{props.data.Activity_start}</td>
            <td>{props.data.Activity_end}</td>
            <td>...</td>
        </tr>
    );
}

export default ActivityListRow;
