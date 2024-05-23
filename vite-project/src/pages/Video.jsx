import NavBar from "../components/NavBar"
import MenuLateral from "../components/MenuLateral";
import Videos from "../components/Videos";



const Video = () => {
  return (
    <div className="min-h-[100vh]">
        <NavBar />
        <div className="grid grid-cols-6 w-[80vw] mx-auto">
                <div className="grid col-span-1  border-r-2">
                    <MenuLateral />
                </div>
                <div className="grid col-span-4 h-min w-[100%] mt-10">
                    <div className="flex flex-col justify-center items-center w-[80%] mx-auto gap-5">
                        <Videos episodio="1" tempo="2:00" tipo="Assédio moral" descricao="Toda conduta abusiva, a exemplo de gestos, palavras e atitudes que se repitam de forma sistemática, atingindo a dignidade ou integridade psíquica ou física de um trabalhador" />
                        <Videos episodio="2" tempo="1:45" tipo="Assédio Sexual" descricao="assédio sexual é crime, definido no artigo 216-A do Código Penal como “constranger alguém com o intuito de obter vantagem ou favorecimento sexual, prevalecendo-se o agente da sua condição de superior hierárquico ou ascendência inerentes ao exercício de emprego, cargo ou função"/>
                    </div> 
                    
                </div>
        </div>
    </div>
  )
}

export default Video