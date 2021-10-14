import React, {Component} from 'react';
import {UserContext} from "../../api/user_provider";
import {createGroup, getUserGroup} from "../../api/services/group_service";
import Card from "../../utils/card";
import {faculty} from "../../constants/faculty_constant";

class Groups extends Component {
    static contextType = UserContext;

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            selected: 0,
            groups: [],
            groupName: "",
            faculty: 'Diş Hekimliği Fakültesi'
        };
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(index) {
        this.setState({selected: index});
    }

    changeName(e) {
        console.log(e.target.value)
        this.setState({groupName: e.target.value})
    }

    changeFaculty(e) {
        this.setState({faculty: e.target.value})
        console.log(e.target.value)
    }

    render() {
        let user = this.context
        const disabled = "col btn shadow-none rounded-end border";
        const enabled = "col btn shadow-none rounded-end btn-primary";

        if (this.state.isLoaded == false) {
            getUserGroup(user["jwt"]).then(r => {
                this.setState({
                    isLoaded: true, groups: r.groups
                })
            })
        }

        const myGroups =
            <div className="container py-3">
                {this.state.groups.map(group => {
                    return (
                        <div className="pb-3">
                            <Card group={group}/>
                        </div>);
                })}
            </div>;

        const createGroupView =
            <div className="container">
                <form>
                    <div className="form-group pt-3">
                        <label htmlFor="exampleFormControlInput1">Group Name</label>
                        <input name="name" className="form-control"
                               id="exampleFormControlInput1"
                               onChange={(e) => {
                                   this.changeName(e)
                               }}
                               placeholder="Football Group "/>
                    </div>
                    <div className="form-group pt-3">
                        <label htmlFor="exampleFormControlSelect1">Faculty Name</label>
                        <select className="form-control" onChange={(e) => {
                            this.changeFaculty(e)
                        }} id="exampleFormControlSelect1">
                            {faculty.map((value) => {
                                return <option>{value}</option>
                            })}
                        </select>
                    </div>
                    <div className="pt-3">
                        <button className="btn btn-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    createGroup(user.jwt, this.state.groupName, this.state.faculty);
                                }}
                        >Create
                        </button>
                    </div>
                </form>
            </div>;


        return (
            <div className="container-sm border mx-auto rounded">
                <div className="container mx-auto my-2 row justify-content-center ">
                    <button className={this.state.selected === 0 ? enabled : disabled} onClick={() => {
                        this.changeSelected(0)
                    }}>button1
                    </button>

                    <button className={this.state.selected === 1 ? enabled : disabled} onClick={() => {
                        this.changeSelected(1)
                    }}> button2
                    </button>
                </div>
                <div className="container justify-content-center ">
                    {this.state.selected === 0 ? myGroups : createGroupView}
                </div>
            </div>
        );
    }
}

export default Groups;