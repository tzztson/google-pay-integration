import { Clock_Icon, Jewelry_Bundle, Neck_Race_Girl, Phone_Icon, Ship_Icon } from "../utils/consts";

const About = () => {
    return (
        <div>
            <div className="border-b">
                <div className="container mx-auto px-12 py-12 max-sm:px-6 flex flex-col gap-6">
                    <p className="font-semibold text-5xl">About Us</p>
                    <p className="py-2 font-semibold text-2xl ">Home &nbsp; / &nbsp; <span className="text-[#F5CC61]">About Us</span></p>
                </div>
                <div className="container mx-auto px-12 py-12 max-sm:px-6">
                    <div className="flex items-center gap-12 relative py-12">
                        <div className="flex-[1_1_55%] flex gap-12 max-xl:opacity-50 max-lg:flex-col max-lg:items-center">
                            <img src={Jewelry_Bundle} alt="" />
                            <img src={Neck_Race_Girl} className="max-lg:hidden" alt="" />
                        </div>
                        <div className="flex-[1_1_45%]  flex flex-col gap-2 max-xl:absolute max-xl:left-1/2 max-xl:-translate-x-1/2 max-sm:translate-x-0 max-sm:left-0">
                            <p className="font-semibold text-2xl">E&E Jewellery</p>
                            <p className="text-[#222222] max-xl:w-2/3 text-xl max-lg:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. </p>
                        </div>
                    </div>
                    <div className="py-12 grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <img src={Ship_Icon} alt="" />
                                <p className="font-bold text-xl">Free Shipping</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare egestas auctor consectetur habitasse auctor dui odio auctor. Sit urna, egestas aliquam orci.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <img src={Clock_Icon} alt="" />
                                <p className="font-bold text-xl">14 days return</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare egestas auctor consectetur habitasse auctor dui odio auctor. Sit urna, egestas aliquam orci.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <img src={Phone_Icon} alt="" />
                                <p className="font-bold text-xl">24/7 Help</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare egestas auctor consectetur habitasse auctor dui odio auctor. Sit urna, egestas aliquam orci.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;