import {useEffect, useState} from "react";
import {ActivityInterface} from "../Interfaces/ActivityInterface";
import ActivityListRow from "./ActivityListRow";

function ActivityList() {
    const [Activities, setActivities] = useState(Array<ActivityInterface>);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/Activities")
            .then((response) => response.json())
            .then((data) => {
                console.log('fetched!');
                setActivities(data);
            });
    },[]);

    return (
        <table className="table table-striped activity-list">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Type</th>
                <th scope="col">City</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {Activities.map((item) => (
                <ActivityListRow key={item.Activity_id} data={item}></ActivityListRow>
            ))}


            </tbody>
        </table>
    );
}

export default ActivityList;
