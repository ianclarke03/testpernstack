import React, { Fragment, useState } from "react";

const EditUsername = ({ users }) => {

    const [description, setDescription] = useState(users.description);
    
    //function for editing description

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:4000/users/${users.user_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }

    return <Fragment>

        <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target={`#id${users.user_id}`}
        >
        Edit
        </button>

        {/*
        id = id10
        */}
        <div class="modal"
            id={`id${users.user_id}`}
            onClick={() => setDescription(users.description)}
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Username</h4>
                        <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        onClick={() => setDescription(users.description)}
                        >
                            &times;
                        </button>
                </div>


            <div class="modal-body">
                <input type='text' className="form-control" value={description} 
                onChange={e => setDescription(e.target.value)}
                />
            </div>


            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-warning"
                    data-dismiss="modal"
                    onClick = {e => updateDescription(e)}
                >
                    Edit
                </button>
                <button 
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => setDescription(users.description)}
                >
                    Close
                </button>
            </div>

            </div>
        </div>
        </div>
    </Fragment>;
};


export default EditUsername;