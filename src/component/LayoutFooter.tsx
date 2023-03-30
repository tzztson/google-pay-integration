import { FaceBook, Instagram, logo_jewelry, Twitter } from "../utils/consts";

const LayoutFooter = () => {
    return (
        <div className="py-12 px-12 max-sm:px-6 flex gap-12 text-gray-600 font-medium max-lg:flex-col" >
            <div className="flex-[1_1_35%] flex flex-col gap-4">
                <img src={logo_jewelry} className="w-24 h-24" alt="" />
                <p className="max-lg:w-2/3 max-sm:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisl maecenas quis urna placerat pretium. Neque tristique feugiat risus, enim.</p>
                <div className="flex gap-4 py-4">
                    <img src={FaceBook} className="opacity-50  rounded-full" alt="" />
                    <img src={Twitter} className="opacity-50  rounded-full" alt="" />
                    <img src={Instagram} className="opacity-50  rounded-full" alt="" />
                </div>
            </div>
            <div className="flex-[1_1_65%] flex gap-12 justify-between max-sm:flex-col">
                <div>
                    <p className="font-bold text-xl pb-8">Information</p>
                    <div className="flex flex-col gap-4">
                        <p>About Us</p>
                        <p>Delivery Inforamtion</p>
                        <p>privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-xl pb-8">Account</p>
                    <div className="flex flex-col gap-4">
                        <p>My Account</p>
                        <p>My Orders</p>
                        <p>My Cart</p>
                        <p>LogOut</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-xl pb-8">Contact Us</p>
                    <div className="flex flex-col gap-4">
                        <p>Address: Lorem Ipsum Street, Dolor Country - 685754</p>
                        <p>Phone: +1 12345 67890</p>
                        <p>pEmail: info@e-ejewelerry.com</p>
                    </div>
                </div>
                <div className="max-xl:hidden"></div>

            </div>
        </div>
    )
}

export default LayoutFooter;