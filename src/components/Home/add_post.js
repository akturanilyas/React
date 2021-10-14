import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import React, {Component, useContext} from "react";
import {sendPost} from "../../api/services/post_service";


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.changeContent = this.changeContent.bind(this);
        this.changeSelectedGroup = this.changeSelectedGroup.bind(this)

    }

    changeContent(value) {
        this.setState({
            content: value
        })
    }

    changeSelectedGroup(selected) {
        this.setState({
            selectedGroup: selected
        })
        console.log(selected)
    }

    render() {
        let arrayIndex;
        let status = this.state.content == null ||
            this.state.content == "" || this.state.selectedGroup == null
            || this.state.selectedGroup == "Select a group";
        let myGroups = this.props.myGroups;
        return (
            <div className="card border card-body row-cols-auto">
                    <textarea className="form-control textarea-autosize col" onChange={event => {
                        this.changeContent(event.target.value)
                    }} id="textareaExample" rows="1"
                              placeholder="Try this textarea"/>
                <div className="form-group pt-3">
                    <select disabled={!myGroups.length} className="form-control" onChange={(e) => {
                        this.changeSelectedGroup(e.target.value)
                        console.log()
                    }} id="groupSelection">
                        <option>Select a group</option>
                        {
                            myGroups.map((value,index) => {
                                arrayIndex =index;
                                return (<option>{value.name}</option>)
                            })
                        }
                    </select>
                </div>
                <div className="pt-3 d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary p-2 " disabled={status}
                            onClick={() => sendPost(this.props.jwt, myGroups[arrayIndex].id, this.state.content)}
                            type="button">Send <FontAwesomeIcon className="col"
                                                                icon={faPaperPlane}/>
                    </button>
                </div>
            </div>
        );
    }
}

export default AddPost;