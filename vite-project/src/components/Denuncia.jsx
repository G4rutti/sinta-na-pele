import Badge from "./Badge"
import PropTypes from 'prop-types';


const Denuncia = ({ texto, nome, badges, respostas, visitas }) => {
    return (
        <div className="grid grid-cols-4 border-b w-[80%] pb-5 mb-5">
            <div className="grid col-span-1">
                <div className="flex flex-col items-center justify-center">
                    <ul className="text-gray-500">
                        <li>{respostas} Respostas</li>
                        <li>{visitas} Visitas</li>
                    </ul>
                </div>
            </div>
            <div className="grid col-span-3">
                <div className="flex flex-col">
                    <h1 className="text-xl">{texto}</h1>
                    <div className="grid grid-cols-2">
                        <div className="grid col-span-1">
                            <ul className="flex gap-2">
                                {badges && badges.map((badge, index) => (
                                    <Badge key={index} nome={badge} />
                                ))}
                            </ul>
                        </div>
                        <div className="grid col-span-1">
                            <div className="flex items-center ml-2">
                                <p>- {nome}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Denuncia.propTypes = {
    texto: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    badges: PropTypes.array.isRequired,
    respostas: PropTypes.string,
    visitas: PropTypes.string
};

export default Denuncia