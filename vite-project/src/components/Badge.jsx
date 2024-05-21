import PropTypes from 'prop-types';

const Badge = ({ nome }) => {
    return (
        <li className="font-roboto my-2 hover:cursor-pointer " id={nome}><span className="text-gray-200 bg-gray-500 hover:bg-gray-800 duration-100 rounded-md px-3 py-2">{nome}</span></li>
    )
}


Badge.propTypes = {
    nome: PropTypes.string.isRequired,
};

export default Badge