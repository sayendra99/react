import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1> Oops !!</h1>
            </div>
            <div>
                <h4>{err.status}: {err.statusText}</h4>
            </div>
        </div>
    );
};

export default Error;
