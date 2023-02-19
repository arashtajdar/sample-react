import {ActivityInterface} from "../Interfaces/ActivityInterface";
import {ActivityCardInterface} from "../Interfaces/ActivtiyCardInterface";

function ActivityCard(props : ActivityCardInterface) {
    return (
        <div className="categories_item" key={props.data.Activity_id}>
            <a href="/" className="">
                <span><img className="activity-thumbnail" src="https://media.licdn.com/dms/image/sync/D5618AQEuOiIsSCZUHw/companyUpdate-article-image-shrink_627_1200/0/1676589899160/Deploy1png?e=1679529600&v=beta&t=VzhBOmFxls-W-CmB662L4BCpynZ2f2PQyuznMmoTxus"></img></span><br></br>
                <span>Name : {props.data.Activity_title}</span><br></br>
                <span>description : {props.data.Activity_description}</span><br></br>
                <span>type : {props.data.Activity_type}</span><br></br>
                <span>City : {props.data.Activity_city}</span><br></br>
                <span>Start : {props.data.Activity_start}</span> - <span>End : {props.data.Activity_end}</span><br></br>
            </a>
        </div>
    );
}

export default ActivityCard;
