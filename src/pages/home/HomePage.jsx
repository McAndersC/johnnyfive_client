import { Link } from "react-router-dom";
import JohnnyFive from "../../components/mc/JohnnyFive/JohnnyFive";

const HomePage = () => {

    return (
        <div className={"center-page"}>
            <JohnnyFive></JohnnyFive>

            <Link to={'/howto'}>How To</Link>
        </div>
    );
};

export default HomePage;