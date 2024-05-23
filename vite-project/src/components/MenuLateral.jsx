import { FaHome, FaTags, FaVideo} from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuLateral = () => {
    return (
        <ul className="mt-5">
            <Link to="/home"><li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaHome className="ml-4" /><span className="text-lg">Inicio</span></li></Link>      
            <li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaTags className="ml-4" /> <span className="text-lg">Tags</span></li>
            <Link to="/videos"><li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaVideo className="ml-4" /> <span className="text-lg">Vídeos</span></li></Link>
        </ul>
    )
}

export default MenuLateral