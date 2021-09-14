import { Card } from "@material-ui/core"
import "../Styles/CountryData.css"

const CountryData = (props) => {
    return (
        <div className="country-card">
            <Card className="country-data">
                <h4>{props.country.name}</h4>
                <p>{props.country.subregion === "" ? "N/A" : props.country.subregion}, {props.country.region === "" ? "N/A" : props.country.region}</p>
                <p></p>
            </Card>
        </div>
    );

};

export default CountryData;