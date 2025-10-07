import kwol from '../../assets/images/kwol.svg'
import bell from '../../assets/images/bell.svg'
import menu from '../../assets/images/menu.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center bg-white shadow-[0_4px_16px_0_#00000014,0_0_16px_0_#00000014] xs361:hidden h-[56px]">
        <Link to="/register" className="py-3">
          <img src={kwol} alt="" className="w-[75px] h-[26px]" />
        </Link>
      </div>
      <div className="hidden xs361:flex justify-center items-center bg-white shadow-[0_4px_16px_0_#00000014,0_0_16px_0_#00000014] h-[72px] px-[144px] py-[14px]">
        <div className="w-[1632px] h-[44px] flex items-center justify-between mx-auto">
          <Link to="/register">
            <img src={kwol} alt="logo" className="w-[114px] h-10" />
          </Link>
          <div className="flex items-center gap-4">
            <button type="button" className="p-0 bg-transparent">
              <img src={bell} alt="call" className="w-8 h-8" />
            </button>
            <button type="button" className="p-0 bg-transparent">
              <img src={menu} alt="menu" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}