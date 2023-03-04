import {ActivityCardInterface} from "../Interfaces/ActivtiyCardInterface";

function ActivityCard(props : ActivityCardInterface) {
    return (
        <div className="categories_item" key={props.data.Activity_id}>
            {/*<a href="/" className="">*/}
            {/*    <span>Start : {props.data.Activity_start}</span> - <span>End : {props.data.Activity_end}</span><br></br>*/}
            {/*</a>*/}
                <div className="card">
                    <div className="d-flex justify-content-between p-3">
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                         className="card-img-top" alt="Laptop"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <p className="small"><a href="#!" className="text-muted">{props.data.Activity_type}</a></p>
                            <p className="small text-danger"><s>$1099</s></p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{props.data.Activity_title}</h5>
                            <h5 className="text-dark mb-0">$999</h5>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <p className="text-muted mb-0">Location: <span className="fw-bold">{props.data.Activity_city}</span></p>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <p className="text-muted mb-0">
                                From: <span className="fw-bold">{props.data.Activity_start}</span>
                                to <span className="fw-bold">{props.data.Activity_end}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ActivityCard;
