import { Link } from "react-router-dom";

export default function DetailsPage(props: any) {

    const { history } = props;
    const { name, description, html_url, created_at, language } = history.location.state.repository;

    console.log(history);

    return (
        <>
            <h3>Details page</h3>
            <div>
                <h4> {name} </h4>
                <h5> {language}</h5>
                <p>{description}</p>
                <p> Créated on {created_at}</p>
                <p>  <a href={html_url} target='_blank' > {html_url} </a> </p>
                <div>
                    <Link to="/" >Home</Link>
                </div>
            </div>
        </>
    )
}