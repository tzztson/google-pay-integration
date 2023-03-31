import { Clock_Icon, Jewelry_Bundle, Jewelry_Woman, Neck_Race_Girl, Phone_Icon, Ship_Icon, About_Jewelry_1, About_Jewelry_2, About_Jewelry_3, mail_icon } from "../utils/consts";

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
                <div className="bg-[#F3F3F3]">
                    <div className="container mx-auto px-12 gap-12 max-sm:px-6 relative flex max-xl:items-center max-md:flex-col ">
                        <div className="flex-[1_1_50%] max-xl:flex-[1_1_100%] py-32 max-xl:py-12 max-md:pb-0 flex flex-col gap-4">
                            <p className="font-semibold text-2xl">Lorem Ipsum</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus a vulputate convallis risus in egestas phasellus nulla. Eget quis et sed mi sed aenean in. Quisque porttitor rhoncus euismod ut sed viverra volutpat. Molestie sit sed parturient velit leo cursus lacus convallis turpis. Fringilla blandit arcu mi suspendisse diam. Nibh lacus adipiscing in ipsum interdum adipiscing. Id pulvinar elit tellus aliquet vulputate convallis duis sed. Purus sed nec mauris ultricies nunc. Sit sed curabitur sem pharetra. Odio vulputate convallis velit sodales. Morbi egestas purus ipsum, tincidunt pellentesque montes, pellentesque lacus mi. Aliquam pretium, consectetur quis mattis mi tortor. Faucibus augue pharetra cras curabitur consequat lobortis ipsum ultrices diam. Neque, eu, sociis ipsum scelerisque sapien consectetur nulla.</p>
                        </div>
                        <div className="flex-[1_1_50%] relative  py-32 max-xl:py-12 max-md:py-0 flex  items-center justify-center">
                            <img src={Jewelry_Woman} className="absolute left-0 bottom-0 max-xl:relative max-md:w-[calc(50%+24px)] max-md:h-[calc(50%+24px)] max-[480px]:w-full max-[480px]:h-full" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-12 py-12 max-sm:px-6">
                    <div className="flex items-center max-md:flex-col max-md:gap-6 max-md:pb-12">
                        <div className="flex-[1_1_50%]">
                            <img src={About_Jewelry_1} className="w-full" alt="" />
                        </div>
                        <div className="flex-[1_1_50%] flex flex-col gap-4 px-24 max-xl:px-12 max-md:px-0">
                            <p className="font-semibold text-2xl">Dolor Sit Mon</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum a nullam aenean non dui eget convallis turpis. Nisl nullam massa pellentesque eget et, amet sit in. Viverra interdum non sed eget in condimentum orci, enim velit. Pretium adipiscing in tortor, habitant velit. Habitant aliquet pellentesque condimentum quis nunc rutrum. Et erat malesuada aenean potenti donec at. Egestas vitae nisl pellentesque sed aliquet.</p>
                        </div>
                    </div>
                    <div className="flex items-center max-md:flex-col-reverse max-md:gap-6 max-md:pb-12">
                        <div className="flex-[1_1_50%] flex flex-col gap-4 px-24 max-xl:px-12 max-md:px-0">
                            <p className="font-semibold text-2xl">Dolor Sit Mon</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum a nullam aenean non dui eget convallis turpis. Nisl nullam massa pellentesque eget et, amet sit in. Viverra interdum non sed eget in condimentum orci, enim velit. Pretium adipiscing in tortor, habitant velit. Habitant aliquet pellentesque condimentum quis nunc rutrum. Et erat malesuada aenean potenti donec at. Egestas vitae nisl pellentesque sed aliquet.</p>
                        </div>
                        <div className="flex-[1_1_50%]">
                            <img src={About_Jewelry_2} className="w-full" alt="" />
                        </div>
                    </div>  <div className="flex items-center max-md:flex-col max-md:gap-6 max-md:pb-12">
                        <div className="flex-[1_1_50%]">
                            <img src={About_Jewelry_3} className="w-full" alt="" />
                        </div>
                        <div className="flex-[1_1_50%] flex flex-col gap-4 px-24 max-xl:px-12 max-md:px-0">
                            <p className="font-semibold text-2xl">Dolor Sit Mon</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum a nullam aenean non dui eget convallis turpis. Nisl nullam massa pellentesque eget et, amet sit in. Viverra interdum non sed eget in condimentum orci, enim velit. Pretium adipiscing in tortor, habitant velit. Habitant aliquet pellentesque condimentum quis nunc rutrum. Et erat malesuada aenean potenti donec at. Egestas vitae nisl pellentesque sed aliquet.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F2F2F2] mt-16">
                    <div className="container mx-auto px-12 py-12 max-sm:px-6 flex gap-12 items-center justify-center">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <div className="flex flex-col gap-4 pt-12">
                                <p className="font-semibold text-3xl text-center">Get Our Latest Update In Your Email</p>
                                <p className="font-light text-md text-center">Subscribe Now To Get 15% Off On Any Product</p>
                            </div>
                            <div className="relative flex flex-col gap-4 w-1/2">
                                <input type="text" className="outline-none w-full pl-12 pr-6 text-[#CFCFCF] text-xl py-2 rounded" />
                                <img src={mail_icon} className="absolute w-6 h-6 top-1/2 left-4 -translate-y-1/2" alt="" />
                            </div>
                            <div className="flex items-center justify-center pb-12">
                                <button className="bg-[#F5CC61] py-2 px-6 text-bold text-white text-xl">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;