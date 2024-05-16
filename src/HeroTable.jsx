import React, {useState, useEffect} from "react"

function HeroTable(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        let fullData = [];
        let idx = props.idx === 1? 1 : 0;
        for (let i = 0; i < 10; i++) {
            let rawData = await fetch('https://www.superheroapi.com/api.php/10225405115382482/' + (i + idx).toString());
            let jsonData = await rawData.json();
            if (jsonData.response === 'success'){
                fullData.push(jsonData);
            }
        }
        setData(fullData);
        console.log(fullData);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>publisher</th>
                        <th>intelligence</th>
                        <th>strength</th>
                        <th>speed</th>
                        <th>power</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.biography.publisher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HeroTable;