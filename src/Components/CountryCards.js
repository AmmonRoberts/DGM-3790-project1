import CountriesJson from '../Data/countries.json'
import CountryData from './CountryData';

const CountryCards = (props) => {

    const createRow = () => {
        let rows = [];
        let counter = 1;
        CountriesJson.forEach((item, index) => {
            rows[counter] = rows[counter] ? [...rows[counter]] : [];
            if (index % 3 === 0 && index !== 0) {
                counter++;
                rows[counter] = rows[counter] ? [...rows[counter]] : [];
                rows[counter].push(item);
            } else {
                rows[counter].push(item);
            }
        });

        return rows;
    }

    return (
        <div className="container">
            {createRow().map((row) => {
                return (
                    <div className="row">
                        {
                            row.map((country) => {
                                return (<CountryData country={country} />);
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
};

export default CountryCards;