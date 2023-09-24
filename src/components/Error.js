import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    
    return (
        <div>
            <h1>Opps...🙄</h1>
            <h2>Something went wrong ... </h2>
        </div>
    );
};
export default Error;