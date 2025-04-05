import zzikmeokLogo from '@/assets/images/icon.svg'
import ZzikMeokButton from '@/components/zzik-meok-button'

const Popup = () => {
  return (
    <>
      <div className="flex justify-center">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-[#646cff] hover:text-[#535bf2]"
        >
          <img
            src={zzikmeokLogo}
            id="logo"
            className="w-[161.45px] h-[144px] p-3 will-change-[filter] transition-[filter] duration-300"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1 className=" font-medium text-[48px] leading-[1.1] mx-auto my-[32px]">ZZIK MEOK</h1>
      <div className="flex flex-col items-center justify-center">
        <ZzikMeokButton />
      </div>
    </>
  )
}

export default Popup
