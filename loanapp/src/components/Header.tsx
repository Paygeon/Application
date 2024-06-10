import logo from "../logo-full.png";

export default function Header(){
    return (
        <header className="bg-white sticky top-0 z-100 p-4">
            <div className="max-w-5xl mx-auto">
                <img className="max-w-[160px]" src={logo} alt="Paygeon-Logo"/>
            </div>
        </header>
    )
}