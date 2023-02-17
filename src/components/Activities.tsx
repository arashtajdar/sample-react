import {throws} from "assert";

function Activities() {
    let keys;
    keys = [
        {'name' : 'ACT001'},
        {'name' : 'ACT002'},
        {'name' : 'ACT003'},
        {'name' : 'ACT004'},
        {'name' : 'ACT005'},
        {'name' : 'ACT006'},
        {'name' : 'ACT007'},
        {'name' : 'ACT008'},
    ];
    return (
        <div className="container">
            <div className="div content">
                <div className="categories">
                {keys.map((item) => (
                    <div className="categories_item">
                        <a href="" className="">
                            <span><img className="activity-thumbnail" src="https://media.licdn.com/dms/image/sync/D5618AQEuOiIsSCZUHw/companyUpdate-article-image-shrink_627_1200/0/1676589899160/Deploy1png?e=1679529600&v=beta&t=VzhBOmFxls-W-CmB662L4BCpynZ2f2PQyuznMmoTxus"></img></span><br></br>
                            <span>Name : {item.name}</span><br></br>
                            <span>City : {item.name}</span><br></br>
                            <span>Start : {item.name}</span> - <span>End : {item.name}</span><br></br>
                        </a>
                    </div>
                ))}
                </div>
            </div>
        </div>
);
}

export default Activities;
