import NavBar from "../components/NavBar";
import MenuLateral from "../components/MenuLateral";
import { Link } from "react-router-dom";


const CriarDenuncia = () => {
    return (
        <div className="min-h-[100vh] w-[100vw]">
            <NavBar />
            <div className="grid grid-cols-6 w-[80vw] mx-auto">
                <div className="grid col-span-1  border-r-2">
                    <MenuLateral />
                </div>
                <div className="grid col-span-4 h-min w-[100%]">
                    <div className="w-[100%] mx-auto mt-10">
                        <h1 className="text-center font-medium text-3xl uppercase">Faça sua denúncia</h1>
                        <div className="mx-auto">
                            <label htmlFor="Title" className="  flex flex-col justify-center items-center mt-10">
                                <span className="text-xs font-medium text-gray-700 uppercase">Título da denuncia</span>
                                <input
                                    type="text"
                                    id="Title"
                                    placeholder="Digite sua denúncia"
                                    className="mt-1 rounded-md shadow border border-gray-400 sm:text-sm w-[20vw] px-6 py-2 outline-none"
                                />
                            </label>
                            <label htmlFor="OrderNotes" className="flex flex-col justify-center items-center mt-10">
                                <span className="text-xs font-medium text-gray-700 uppercase">
                                    Order notes</span>
                                <textarea
                                    id="OrderNotes"
                                    className="mt-2 w-[30vw] rounded-lg border border-gray-400 px-2 py-2 shadow sm:text-sm outline-none"
                                    rows="4"
                                    placeholder="Detalhe o ocorrido para sua denuncia ficar mais clara"
                                ></textarea>
                            </label>
                            <label htmlFor="Title" className="  flex flex-col justify-center items-center mt-10">
                                <span className="text-xs font-medium text-gray-700 uppercase">TAGS</span>
                                <input
                                    type="text"
                                    id="Title"
                                    placeholder="Coloque os tópicos que você acha que sua denúncia cabe."
                                    className="mt-1 rounded-md shadow border border-gray-400 sm:text-sm w-[20vw] px-6 py-2 outline-none"
                                />
                            </label>

                            <label htmlFor="Option1" className="flex flex-col justify-start items-center gap-4 py-4">
                                <div className="flex items-center gap-2">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
                                    <strong className="text-xs font-medium text-gray-700 uppercase"> Postar com anonimato </strong>
                                </div>
                            </label>

                            <Link to='/home'>
                                <button className="mx-auto mt-10 rounded-md bg-teal-600 px-8 py-2 text-sm font-medium text-white shadow flex ">Postar denúncia</button>
                            </Link>


                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CriarDenuncia