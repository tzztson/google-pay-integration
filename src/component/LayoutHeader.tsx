import logo_mark from "../assets/img/svg/logo_mark.svg";
import logo_letter from "../assets/img/svg/logo_letter.svg";
// import deliver from "../assets/img/svg/deliver.svg";
// import user from "../assets/img/svg/user.svg";
// import search from "../assets/img/svg/search.svg";

const LayoutHeader = () => {

    return (
        <div className="flex max-sm:px-6 px-24 py-6 items-center justify-between border-b">
            <div className="flex items-center">
                <div className="flex pr-10 max-sm:pr-4">
                    <img src={logo_mark} alt="" />
                    <img src={logo_letter} className="max-[420px]:hidden" alt="" />
                </div>
                <div className="flex gap-16 text-xl font-semibold px-12 max-xl:hidden">
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
            <div className="flex gap-12 items-center justify-between">
                {/* <div className="flex gap-8 pr-36">
                    <img src={user} className="w-8 h-8" alt="" />
                    <img src={search} className="w-8 h-8" alt="" />
                    <img src={deliver} className="w-12 h-12" alt="" />
                </div> */}
                <div className="hidden max-xl:flex">
                    <input id="menu-toggle" type="checkbox" />
                    <label className='menu-button-container max-xl:flex' htmlFor="menu-toggle" />
                    <div className='menu-button'></div>
                </div>
                <div className="flex gap-2 items-center font-semibold text-xl">
                    <img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48" alt="" />
                    <p className="max-sm:hidden">English</p>
                </div>

            </div>
        </div>
    )

}

export default LayoutHeader;