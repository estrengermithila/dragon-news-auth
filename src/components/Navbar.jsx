import { Link } from 'react-router-dom';
import useriCon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="div"></div>
            <div className="nav space-x-10">
            <Link to='/'>Home</Link>
            <Link to='/carer'>Carer</Link>
            <Link to='/about'>About</Link>
            </div>
            <div className="logo flex gap-2 items-center">
                <img src={useriCon} alt="" srcset="" />
                <Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;