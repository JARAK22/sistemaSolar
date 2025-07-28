import { IoIosHome, IoIosMail, IoIosPerson } from "react-icons/io";
export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <ul className="flex gap-4">
        <li><IoIosHome /></li>
        <li><IoIosPerson /></li>
        <li><IoIosMail /></li>
      </ul>
    </nav>
  )
}