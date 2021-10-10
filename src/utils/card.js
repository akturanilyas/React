export default function Card(props) {
    const {group} = props;
    return <div className="card w-100">
        <div className="card-body row">
            <div className="col">
                <h5 className="card-title">{group.name}</h5>
                <p className="card-text">{group.users.length} member(s)</p>
            </div>
            <div className="col-auto">
                <a href="#" className="btn btn-primary">Button</a>
            </div>
        </div>
    </div>;
}