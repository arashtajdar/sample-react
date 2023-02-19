import {ActivityInterface} from "../Interfaces/ActivityInterface";
import {useEffect, useState} from "react";
import ActivityCard from "./ActivityCard";

function Activities() {
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
        <div className="container">
            <h2>there are {Activities.length} Activities</h2>
            <div className="div content">
                <div className="categories">
                {Activities.map((item) => (
                    <ActivityCard data={item}></ActivityCard>
                ))}
                </div>
            </div>
        </div>
);
}

export default Activities;
