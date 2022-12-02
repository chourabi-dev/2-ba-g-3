export default function Product( props ){

    return(
        <div className="card">
            <div className="card-body">
            <div className="card-title">{ props.title }</div>
            <div className="text-success">{ props.price } $</div>
                
            </div>
        </div>
    );
}