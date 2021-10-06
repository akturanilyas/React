import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import React, {useContext} from "react";
import {sendPost} from "../../api/services/post_service";
import {UserContext} from "../../api/user_provider";

function AddPost() {
    const state = useContext(UserContext);
    let content = "";

    return (
        <div className="card border card-body row-cols-auto">
                    <textarea className="form-control textarea-autosize col" onChange={event => {
                        content = event.target.value
                    }} id="textareaExample" rows="1"
                              placeholder="Try this textarea"/>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary p-2 " onClick={() => sendPost(state["jwt"], content)}
                        type="button">Send <FontAwesomeIcon className="col"
                                                            icon={faPaperPlane}/>
                </button>
            </div>
        </div>
    );
}

export default AddPost;

