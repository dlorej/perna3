import { useEffect, useState } from "react";
const DisplayTable = () => {
    const [info, setInfo] = useState([]);
    const getInfo = async () => {
        try {
            const response = await fetch("/getall");
            console.log(response);
            const responseData = await response.json();
            console.log(responseData);
            setInfo(responseData);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getInfo();
    }, []);
    return <div>info: {info}</div>;
};
export default DisplayTable;
