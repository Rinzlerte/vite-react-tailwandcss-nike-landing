import { headerLogo } from "../assets/images";

const Logo = () => {
  return (
    <img
    src={headerLogo}
    alt='logo'
    width={129}
    height={29}
    className='m-0 w-[129px] h-[29px]'
  />
  )
}

export default Logo