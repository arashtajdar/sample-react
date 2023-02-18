import {ActivityInterface} from "../Interfaces/ActivityInterface";
import {useEffect, useState} from "react";

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
                    <div className="categories_item" key={item.Activity_id}>
                        <a href="/" className="">
                            <span><img className="activity-thumbnail" src="https://media.licdn.com/dms/image/sync/D5618AQEuOiIsSCZUHw/companyUpdate-article-image-shrink_627_1200/0/1676589899160/Deploy1png?e=1679529600&v=beta&t=VzhBOmFxls-W-CmB662L4BCpynZ2f2PQyuznMmoTxus"></img></span><br></br>
                            <span>Name : {item.Activity_title}</span><br></br>
                            <span>description : {item.Activity_description}</span><br></br>
                            <span>type : {item.Activity_type}</span><br></br>
                            <span>City : {item.Activity_city}</span><br></br>
                            <span>Start : {item.Activity_start}</span> - <span>End : {item.Activity_end}</span><br></br>
                        </a>
                    </div>
                ))}
                </div>
            </div>
        </div>
);
}

export default Activities;
