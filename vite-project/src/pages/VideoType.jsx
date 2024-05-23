import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";
import MenuLateral from "../components/MenuLateral";
import data from "../data/data.json"

const VideoType = () => {
    const { userType } = useParams()
    let linkVideo = linkarVideo()

    function linkarVideo() {
        switch (userType) {
            case "Assédio moral":
                return data.link[0]
            case "Assédio Sexual":
                return data.link[1]
            case "Discriminação Racial":
                return data.link[2]
        }
    }


    return (
        <div className="min-h-[100vh]">
            {console.log(linkVideo)}
            <NavBar />
            <div className="grid grid-cols-6 w-[80vw] mx-auto">
                <div className="grid col-span-1  border-r-2">
                    <MenuLateral />
                </div>
                <div className="grid col-span-4 h-min w-[100%]">
                    <div className="w-[100%] mx-auto mt-10">
                        <h1 className="text-center font-medium text-3xl uppercase text-gray-700">{userType}</h1>
                        <div className="mx-auto flex flex-col items-center justify-center mt-5">
                            <iframe width="527" height="300" src={`${linkVideo}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                className="rounded"></iframe>
                        </div>
                    </div>
                    <a href="https://vvcpo9qabar.typeform.com/to/qIeLdoBP" target="_blank" className='rounded-md bg-teal-600 px-8 py-4 text-sm font-medium mx-auto mt-10 text-white shadow flex items-center'>Fazer o formulário</a>
                </div>


            </div>
        </div>
    )
}

export default VideoType