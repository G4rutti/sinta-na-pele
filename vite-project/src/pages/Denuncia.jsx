import NavBar from "../components/NavBar"
import { FaHome, FaTags } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

const Denuncia = () => {
    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-6 w-[80vw] mx-auto">
                <div className="grid col-span-1  border-r-2">
                    <ul className="mt-5">
                        <li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaHome className="ml-4" /><span className="text-lg">Inicio</span></li>
                        <li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaCircleQuestion className="ml-4" /> <span className="text-lg">Perguntas</span></li>
                        <li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaTags className="ml-4" /> <span className="text-lg">Tags</span></li>
                    </ul>
                </div>
                <div className="grid col-span-4 h-min w-[100%] mb-20">
                    <div className="mt-5 flex flex-col justify-center items-center">
                        <div className="flex flex-col items-start  mb-10 pb-5 border-b w-[80%]">
                            <h1 className="text-xl font-medium ">Sofri racismo no refeitório da empresa.</h1>
                            <ul className="text-gray-500 flex gap-5">
                                <li>1 Respostas</li>
                                <li>53 Visitas</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center w-[80%]">
                            <div className="border-l-4 border-gray-300 rounded-md mb-10">
                                <p className="ml-8 text-gray-700">
                                    Hoje venho compartilhar uma experiência dolorosa que vivi recentemente no refeitório da empresa onde trabalho.
                                    Durante o horário de almoço, fui alvo de comentários racistas por parte de um colega de trabalho.
                                    Ele fez piadas ofensivas sobre minha cor de pele e origem, ridicularizando minha aparência de uma forma que me
                                    deixou profundamente constrangido e magoado.
                                    Infelizmente, essa não foi a primeira vez que presenciei ou fui vítima de atitudes discriminatórias no ambiente
                                    de trabalho, mas essa situação em particular me fez sentir desrespeitado e isolado. Relatei o incidente ao
                                    departamento de recursos humanos e espero que medidas sejam tomadas para combater o racismo dentro da empresa.
                                    Esses momentos são difíceis, mas acredito que compartilhar minha história é um passo importante para
                                    promover a conscientização e a mudança necessária. Ninguém deve passar por isso, e é crucial que todos
                                    façamos nossa parte para criar um ambiente de trabalho mais inclusivo e respeitoso.
                                </p>
                            </div>
                            <div className="flex flex-col w-[100%]">
                                <div className="flex flex-col items-start justify-start mb-10">
                                    <h2 className="text-xl font-medium">Respostas dos usuários: </h2>
                                </div>
                                <div className="flex flex-col w-[100%]">
                                    <div className="border-r-4 border-gray-300 rounded-md mb-10 ">
                                        <h3 className="text-gray-500 mb-5"><span className="uppercase font-bold">Mariângela</span> - 04 Respostas</h3>
                                        <p className="mr-8 text-gray-700 text-justify">
                                        Lamento muito pelo que você passou. Racismo não deve ser tolerado em nenhum lugar. 
                                        Estou aqui para te apoiar e espero que a empresa tome as devidas providências.
                                        </p>
                                    </div>
                                    <div className="border-r-4 border-gray-300 rounded-md mb-10">
                                        <h3 className="text-gray-500 mb-5"><span className="uppercase font-bold">Octávio</span> - 13 Respostas</h3>
                                        <p className="mr-8 text-gray-700 text-justify">
                                        Passei por uma situação parecida na empresa onde trabalho. Depois de ser alvo de comentários racistas, relatei o incidente ao 
                                        departamento de recursos humanos e busquei apoio de colegas que também não toleram esse tipo de comportamento. Felizmente, 
                                        a empresa levou o assunto a sério, implementou treinamentos de diversidade e inclusão, e tomou medidas disciplinares contra
                                        o agressor. Espero que você também encontre o apoio necessário e que sua empresa tome as atitudes corretas.
                                        Não desista de lutar pelos seus direitos.
                                        </p>
                                    </div>
                                    <div className="border-r-4 border-gray-300 rounded-md mb-10">
                                        <h3 className="text-gray-500 mb-5"><span className="uppercase font-bold">Olga</span> - 01 Respostas</h3>
                                        <p className="mr-8 text-gray-700 text-justify">
                                        Sua denúncia é extremamente importante. O racismo não pode ser ignorado. 
                                        É essencial que a empresa tome atitudes concretas para evitar que isso se repita.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="grid col-span-1 w-[15vw]">
                    <div className="mt-5 ml-5">
                        <p className="mb-5 text-xl">Principais tags</p>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Denuncia