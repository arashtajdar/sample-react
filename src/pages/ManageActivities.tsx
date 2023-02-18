import {json} from "react-router-dom";

function ManageActivities(){
    createNewActivity();
    return (
        <>
            <h3>Manage activities!</h3>
            <button value="SEND" onClick={ () => createNewActivity() }>SEND</button>
        </>
    );
}

export default ManageActivities;

function createNewActivity() {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 3|n0uFYFYKMgEYeu9sch5Zwd6gga7hPk9B7U2PYydd");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("X-CSRF-TOKEN", '{{ csrf_token() }}');

    // @json(csrf_token())
    const urlencoded = new URLSearchParams();
    urlencoded.append("code", "ACT001");
    urlencoded.append("title", "Activity");
    urlencoded.append("description", "Description of  activity");
    urlencoded.append("type_id", "1");
    urlencoded.append("city", "1");
    urlencoded.append("location", "44.1363603,15.2178512");
    urlencoded.append("start", "2023-02-01 23:00:00");
    urlencoded.append("end", "2023-02-03 10:00:00");
    let requestOptions : RequestInit;
     requestOptions = {
        method: 'POST',
         headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/Activities",
        requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

