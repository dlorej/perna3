import { useEffect, useState } from "react";
const DisplayTable = () => {
    const [info, setInfo] = useState([]);
    const getInfo = async () => {
        try {
            const response = await fetch("/getall");
            const responseData = await response.json();
            setInfo(responseData);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getInfo();
    }, []);
    return <div>{JSON.stringify(info)}</div>;
};
export default DisplayTable;
