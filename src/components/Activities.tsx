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
            <section >
                <div className="container py-5">
                    <div className="row">
                {Activities.map((item) => (
                    <ActivityCard key={item.Activity_id} data={item}></ActivityCard>
                ))}
                </div>
            </div>
            </section>
        </div>
);
}

export default Activities;
