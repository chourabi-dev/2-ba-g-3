export default function Contact(props){

    console.log(props);

    return(
        <div>
            <h3> { props.contactname } </h3>
            <p> { props.contactemail } </p>
        </div>
    );
}