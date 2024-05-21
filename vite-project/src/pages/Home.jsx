import { FaHome, FaTags } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

import Badge from "../components/Badge";
import Denuncia from "../components/Denuncia"


const Home = () => {
  const listaTags = ["Abuso", "SintaNaPele", "Agressão", "Discriminação", "Mansplaning", "Racismo", "Assédio", "Segregação", "Intolerância", "Regeição", "Preconceito", "Violência", "Perseguição", "Xenofobia", "Desrespeito"]
  return (
    <div className="grid grid-cols-4 w-[80vw] mx-auto">
      <div className="grid col-span-1 w-[15vw] border-r-2">
        <ul className="mt-5">
          <li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaHome className="ml-4" /><span className="text-lg">Inicio</span></li>
          <li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaCircleQuestion  className="ml-4"/> <span className="text-lg">Perguntas</span></li>
          <li className="flex items-center gap-2 font-roboto py-2 cursor-pointer hover:bg-gray-200 rounded-l-lg"><FaTags  className="ml-4"/> <span className="text-lg">Tags</span></li>
        </ul>
      </div>
      <div className="grid col-span-2 h-min mx-auto">
        <div className="mt-5">
          <div className="flex items-center gap-10 mb-20">
            <h1 className="text-xl font-medium ">Veja as principais denúncias</h1>
            <button className="rounded-md bg-teal-600 px-8 py-2 text-sm font-medium text-white shadow mx-auto">Faça uma denúncia</button>
          </div>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>
          <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Jorge Augusto" badges={["Racismo","Discriminação"]}/>


        </div>
      </div>
      <div className="grid col-span-1">
        <div className="mt-5 ml-5">
          <p className="mb-5 text-xl">Principais tags</p>
          <ul className="flex gap-2 w-60 flex-wrap">
            {listaTags.map((i, index) => (
              <Badge key={index} nome={i} />
            ))}
          </ul>
        </div>
      </div>

      
    </div>
  )
}

export default Home