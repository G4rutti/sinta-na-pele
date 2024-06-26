import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Denuncia from "../components/Denuncia"
import MenuLateral from "../components/MenuLateral";

import NavBar from "../components/NavBar";


const Home = () => {
  const listaTags = ["Abuso", "SintaNaPele", "Agressão", "Discriminação", "Mansplaning", "Racismo", "Assédio", "Segregação", "Intolerância", "Regeição", "Preconceito", "Violência", "Perseguição", "Xenofobia", "Desrespeito"]
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-6 w-[80vw] mx-auto">
        <div className="grid col-span-1  border-r-2">
        <MenuLateral/>
        </div>
        <div className="grid col-span-4 h-min w-[100%]">
          <div className="mt-5 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-10 mb-10 pb-5 border-b w-[80%]">
              <h1 className="text-xl font-medium ">Veja as principais denúncias</h1>
              <Link to="/create_complaint"><button className="rounded-md bg-teal-600 px-8 py-2 text-sm font-medium text-white shadow mx-auto">Faça uma denúncia</button></Link>
            </div>
            <div className=" flex flex-col items-center">
              <Denuncia texto="Sofri racismo no refeitório da empresa." nome="Anônimo" badges={["Racismo", "Discriminação"]} respostas="3" visitas="53" />
              <Denuncia texto="Sofri assédio no transporte público." nome="Ana Carolina" badges={["Abuso", "Violência"]} respostas="6" visitas="52" />
              <Denuncia texto="Enfrentei mansplaining em uma reunião importante." nome="Mariana Silva" badges={["Mansplaning", "Desrespeito"]} respostas="31" visitas="625" />
              <Denuncia texto="Experimentei xenofobia ao tentar alugar um apartamento." nome="Hassan Mohamed" badges={["Xenofobia", "Discriminação"]} respostas="11" visitas="543" />
              <Denuncia texto="Sofri agressão física na escola." nome="Lucas Almeida" badges={["Agressão", "Violência"]} respostas="13" visitas="355" />
              <Denuncia texto="Fui discriminada por ser mulher em um ambiente de trabalho masculino" nome="Julia Ferreira" badges={["Discriminação", "Preconceito"]} respostas="5" visitas="153" />
            </div>
          </div>
        </div>
        <div className="grid col-span-1 w-[15vw]">
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
    </div>

  )
}

export default Home