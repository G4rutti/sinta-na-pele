import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Videos = ({episodio, tipo, tempo, descricao}) => {
    return (
        <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
                <div>
                    <strong
                        className="rounded border border-teal-500 bg-teal-500 px-3 py-1.5 text-[10px] font-medium text-white"
                    >
                        Episódio #{episodio}
                    </strong>

                    <h3 className="mt-4 text-lg font-medium sm:text-xl">

                        <Link to={`/videos/${tipo}`} className="hover:underline"> {tipo} </Link>
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                        {descricao}
                    </p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 text-gray-500">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>

                            <p className="text-xs font-medium">{tempo} minutos</p>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    )
}

Videos.propTypes = {
    episodio: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,

};

export default Videos