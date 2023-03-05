import CreateNewActivity from "../components/CreateNewActivity";
import ActivityList from "../components/ActivityList";
import {Component} from "react";

function ManageActivities(){

    return (
        <>
            <h3>Manage activities!</h3>
            <CreateNewActivity></CreateNewActivity>
            <ActivityList></ActivityList>
        </>
    );
}

export default ManageActivities;


