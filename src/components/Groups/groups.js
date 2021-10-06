import React, {Component} from 'react';


class Groups extends Component {
    constructor() {
        super();
        this.state = {
            selected: 0
        };
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(index) {
        this.setState(
            {
                selected: index
            }
        )
        console.log(this.state.selected === 0)
    }

    render() {
        const disabled = "col btn shadow-none rounded-end border";
        const enabled = "col btn shadow-none rounded-end btn-primary";

        return (
            <div className="container-sm border mx-auto rounded ">
                <div className="container mx-auto  my-2 row justify-content-center ">
                    <button className={this.state.selected === 0 ? enabled : disabled} onClick={() => {
                        this.changeSelected(0)
                    }}>button1
                    </button>

                    <button className={this.state.selected === 1 ? enabled : disabled} onClick={() => {
                        this.changeSelected(1)
                    }}> button2
                    </button>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Groups;