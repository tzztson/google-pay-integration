import SimpleAccordion from "../component/SimpleAccordion";
import JewelryItem from "../component/JewelryItem";
import { mail_icon } from "../utils/consts";

import { Products, Treasures } from "../utils/consts";

const Shop = () => {
    return (
        <div>
            <div className="border-b">
                <div className="container mx-auto px-12 py-12 max-sm:px-6 flex flex-col gap-6">
                    <p className="font-semibold text-5xl">Shop</p>
                    <p className="py-2 font-semibold text-2xl ">Home &nbsp; / &nbsp; <span className="text-[#F5CC61]">Shop</span></p>
                </div>
            </div>
            <div className="container mx-auto px-12 py-12 max-sm:px-6 flex gap-12">
                <div className="flex-[1_1_30%]">
                    <div className="py-4">
                        <p className="font-bold">Filter By Price</p>
                        <input type="range" className="w-full  h-1 mb-6 bg-[#F5CC61] accent-[#F5CC61]  rounded-lg appearance-none cursor-pointer range-sm" />
                    </div>
                    <div className="py-4">
                        <p className="font-bold pb-4">Product Categories</p>
                        <div className="flex flex-col gap-4">
                            {Products.map((item, ind) => <SimpleAccordion key={`product${ind}`} title={item.title} content={item.content} />)}
                        </div>
                    </div>
                    <div className="py-4">
                        <p className="font-bold  pb-4">Gender</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Male</p></div>
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Female</p></div>
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>UniSex</p></div>
                        </div>
                    </div>
                    <div className="py-4">
                        <p className="font-bold  pb-4">Metal Color</p>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <p>Silver (08)</p>
                                <div className="silver-background w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Rose (18)</p>
                                <div className="rose-background w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>White (50)</p>
                                <div className="bg-[#F2F2F2] w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>All Gold (227)</p>
                                <div className="gold-background w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Yellow (54)</p>
                                <div className="yellow-background w-6 h-6 rounded-full"></div>
                            </div> <div className="flex items-center justify-between">
                                <p>Silver & Rose (10)</p>
                                <div className="silverrose-background w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Silver & Yellow (03)</p>
                                <div className="silveryellow-background w-6 h-6 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <p className="font-bold  pb-4">Type</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Bridial (03)</p></div>
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Gemstones (12)</p></div>
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Diamonds (16)</p></div>
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Men's (32)</p></div>
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Gold (16)</p></div>
                            <div className="flex gap-4"><input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " /><p>Sterling Silver (19)</p></div>
                        </div>
                    </div>

                </div>
                <div className="flex-[1_1_70%]">
                    <div className="grid grid-cols-3 gap-4">
                        {Treasures.map((item, ind) => <JewelryItem key={`jewelry${ind}`} image={require(`../assets/img/png/jewelry-${ind+1}.jpg`)} name={item.name} price={item.price} />)}
                    </div>
                </div>
            </div>
            <div className="bg-[#F2F2F2] mt-16">
                <div className="container mx-auto  px-12 py-12 max-sm:px-6 flex gap-12 items-center justify-center">
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
        </div >
    )
}

export default Shop;