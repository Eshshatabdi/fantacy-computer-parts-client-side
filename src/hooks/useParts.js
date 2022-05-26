import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch(' https://limitless-spire-51674.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts])


    return [parts, setParts];
}
export default useParts;