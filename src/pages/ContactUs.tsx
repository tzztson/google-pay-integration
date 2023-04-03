import { Contact_Mail, Contact_Map, Contact_Phone, mail_icon } from "../utils/consts";

const ContactUs = () => {
    return (
        <div>
            <div className="border-b">
                <div className="container mx-auto px-12 py-12 max-sm:px-6 flex flex-col gap-6">
                    <p className="font-semibold text-5xl">Contact Us</p>
                    <p className="py-2 font-semibold text-2xl ">Home &nbsp; / &nbsp; <span className="text-[#F5CC61]">Contact Us</span></p>
                </div>
            </div>
            <div className="container mx-auto px-12 max-sm:px-6 py-12 flex gap-12 max-lg:flex-col">
                <div className="flex-[1_1_40%]">
                    <div className="flex flex-col gap-8">
                        <p className="font-bold text-4xl">Reach Us!</p>
                        <div className="flex gap-4 items-start">
                            <img src={Contact_Map} className="w-8 h-8" alt="" />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-xl">Address:</p>
                                <p>32nd Lorem Street, Dolor City, Ipsum Country - 3802154</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <img src={Contact_Mail} className="w-8 h-8" alt="" />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-xl">Email:</p>
                                <p>info@e&ejewellery.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <img src={Contact_Phone} className="w-8 h-8" alt="" />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-xl">Phone:</p>
                                <p>+1 12345 67890</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. </p>
                    </div>
                </div>
                <div className="flex-[1_1_60%]">
                    <p className="font-bold text-4xl pb-12">Contact Us</p>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Your Name (required)" className=" border outline-none py-3  px-6 text-xl w-full border-[#DEE5EB] placeholder:italic" />
                        <input type="text" placeholder="Your Email (required)" className=" border outline-none py-3  px-6 text-xl w-full border-[#DEE5EB] placeholder:italic" />
                        <input type="text" placeholder="Subject" className=" border outline-none py-3  px-6 text-xl w-full border-[#DEE5EB] placeholder:italic" />
                        <input type="text" placeholder="Type your Message here ..." className=" border outline-none py-3  px-6 text-xl w-full border-[#DEE5EB] placeholder:italic" />
                        <button className="bg-[#F5CC61] px-6 py-3 font-bold text-xl w-40 rounded">SEND</button>
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
                        <div className="relative flex flex-col gap-4 w-1/2 max-md:w-full">
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
    )
}

export default ContactUs;