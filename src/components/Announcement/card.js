export default function Card(props) {
    const {announcement} = props;
    return <div className="card w-100 mt-3">
        <a target="_blank" href={announcement.link}>
            <div className="card-body row">
                <div className="col">
                    <h5 className="card-title">{announcement.title}</h5>
                </div>
            </div>
        </a>
    </div>;
}