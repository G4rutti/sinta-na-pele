import { FaHandPaper } from "react-icons/fa";
import { Link } from "react-router-dom"


const SignUp = () => {
    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1487365690840-c3ee9db234a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <a className="block text-[#7BABB2]" href="#">
                            <FaHandPaper className="size-10" />
                        </a>

                        <h1 className="mt-6 text-2xl font-bold text-[#7BABB2] sm:text-3xl md:text-4xl">
                            Bem vindo ao Sinta na pele!
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Lugar onde você pode expor todos os seus problemas no ambiente familiar, trabalho e etc.
                        </p>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    Primeiro nome
                                </label>

                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="FirstName"
                                    type="text"
                                    placeholder="Primeiro nome"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Ultimo nome
                                </label>

                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="LastName"
                                    type="text"
                                    placeholder="Ultimo nóme"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="E-mail"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Password Confirmation
                                </label>

                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    <span>Ao criar a conta, você está de acordo com os nossos </span>
                                    <a href="#" className="text-gray-700 underline"> termos e condições </a>
                                    <span className="mx-1">e</span>
                                    <a href="#" className="text-gray-700 underline">nossa política de privacidade</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <Link to='/create_complaint'>
                                    <button
                                        className="inline-block shrink-0 rounded-md border border-[#49686d] bg-[#7BABB2] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Criar conta
                                    </button>
                                </Link>


                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    <span className="mr-2">Já possui uma conta?</span>
                                    <a href="#" className="text-gray-700 underline">Fazer Login</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default SignUp