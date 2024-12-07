import { FaFacebook } from "react-icons/fa6";
import { TbArrowIteration } from "react-icons/tb";
import { TiWeatherCloudy } from "react-icons/ti";
import { GrTwitter } from "react-icons/gr";
import { CiInstagram } from "react-icons/ci";


const  FindUs = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="mt-12 font-semibold">Find Us On</h1>
            <div className="join join-vertical *:bg-base-100">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
  <button className="btn join-item justify-start"><GrTwitter></GrTwitter> Twitter</button>
  <button className="btn join-item justify-start"><CiInstagram />Instagram</button>
</div>
        </div>
    );
};

export default FindUs;