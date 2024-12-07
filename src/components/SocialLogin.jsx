import { FaGoogle } from "react-icons/fa6"; 
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <div className="flex flex-col gap-3">
                <button className="btn">
                    <FaGoogle></FaGoogle> Login with google
                    </button>
                    <button className="btn">
                    <FaGithub></FaGithub> Login with github
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;