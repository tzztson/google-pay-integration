import JewelryItem from "../component/JewelryItem";
import { Home_Jewelry_Woman1, Home_Jewelry_Woman2, Ship_Icon, Clock_Icon, Phone_Icon, mail_icon, Jewelry_Box, Jewelry_Handcraft, Jewelry_Flower, Treasures, MEN_Jewelry, WOMEN_Jewelry, Home_Model2, Home_Model1, Home_Model3 } from "../utils/consts";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto px-12 max-sm:px-6 py-12">
                <div className="flex gap-12 items-center justify-center max-[480px]:flex-col relative">
                    {/* <div><img src={Home_Jewelry_Woman1} alt="" /></div>
                <div><img src={Home_Jewelry_Woman2} alt="" /></div> */}
                    <div className="absolute bg-[#222222] px-6 py-2 text-white rounded text-2xl max-sm:top-1/3">
                        Jade-NFT-Diamond
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
                <div className="py-12">
                    <div className="flex gap-12 items-center justify-center max-lg:flex-col">
                        <div className="flex-[1_1_35%]  flex flex-col gap-4">
                            <p className="font-semibold text-3xl">Featured Product</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. </p>
                        </div>
                        <div className="flex-[1_1_65%]"></div>
                    </div>
                    <div className="flex  max-sm:justify-center py-12">
                        <div className="flex gap-4">
                            <button className="pr-4 text-[#F5CC61] font-semibold text-xl">All</button>
                            <button className="pr-4 font-semibold text-xl">Earrings</button>
                            <button className="pr-4 font-semibold text-xl">Bracelets</button>
                            <button className="pr-4 font-semibold text-xl">Necklaces</button>
                            <button className="pr-4 font-semibold text-xl">Rings</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                        {Treasures.map((item, key) => <JewelryItem key={`-${key}`} image={item.image} name={item.name} price={item.price} />)}
                    </div>
                </div>
                <div className="py-12 flex gap-12 max-md:flex-col">
                    <div className="flex-[1_1_40%] max-lg:flex-[1_1_50%] relative   flex items-center justify-center">
                        <img src={MEN_Jewelry} className="max-md:w-full" alt="" />
                        <div className="absolute flex flex-col gap-4 bottom-20 left-24 max-xl:left-16 max-sm:bottom-auto max-sm:left-4">
                            <p className="font-bold text-4xl">All you want <br /> for Men</p>
                            <p className="underline font-semibold">SHOP NOW</p>
                        </div>
                    </div>
                    <div className="flex-[1_1_60%] max-lg:flex-[1_1_50%] relative   flex items-center justify-center">
                        <img src={WOMEN_Jewelry} className="" alt="" />
                        <div className="absolute flex flex-col gap-4 left-0 max-xl:left-4">
                            <p className="font-bold text-4xl">Beautifully Crafted Jewellery <br /> for Women</p>
                            <p className="underline font-semibold">SHOP NOW</p>
                        </div>
                    </div>
                </div>
                <div className="py-12 flex flex-col">
                    <div className="flex max-2xl:flex-col">
                        <div className="flex-[1_1_65%] max-2xl:flex max-sm:flex-col">
                            <div className="max-2xl:flex-[1_1_50%]"><img src={Home_Model1} className="w-full max-2xl:object-cover  object-cover" alt=" " /></div>
                            <div className="max-2xl:flex-[1_1_50%] max-2xl:flex hidden"><img src={Home_Model2} className="w-full  max-2xl:object-cover  object-cover object-center" alt=" " /></div>
                        </div>
                        <div className="flex-[1_1_35%] flex flex-col">
                            <img src={Home_Model2} className="max-2xl:hidden flex-[1_1_40%]" alt="" />
                            <div className="p-4 bg-black text-center flex-[1_1_60%] flex justify-center items-center">
                                <div className="text-white border border-gray-200 px-4 py-4 flex flex-col gap-4">
                                    <p className="font-semibold text-xl">About E&E Jewellery</p>
                                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. Enim, nam phasellus in amet, molestie. Interdum nunc augue quis non integer mus ultrices sed. Sed eleifend congue amet consequat facilisi volutpat justo, ut ultrices. Arcu nec in vitae nunc tristique massa vestibulum nulla. Integer mauris, lorem tortor commodo sit.</p>
                                    <p>READ MORE ≫</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col-reverse">
                        <div className="flex-[1_1_40%] bg-[#F2F2F2] px-6 flex flex-col gap-4  justify-center max-md:py-4">
                            <p className="text-2xl text-bold">“Jewelry is like the perfect spice.  it complements what’s already there.”</p>
                            <p className="italic">-Diane Von Furstenberg</p>
                        </div>
                        <div className="flex-[1_1_60%]">
                            <img src={Home_Model3} className="w-full" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-12 max-lg:flex-col py-12">
                        <div className="flex-[1_1_50%] flex flex-col gap-4">
                            <p className="font-semibold text-3xl ">Latest News & Articles</p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. </p>
                        </div>
                        <div className="flex-[1_1_50%]"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1">
                        <div className="flex flex-col gap-6 max-xl:flex-row max-lg:flex-col">
                            <div className="w-full">
                                <img src={Jewelry_Box} className="w-full" alt="" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="font-semibold text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p>21/03/2021</p>
                                <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. </p>
                                <p className="underline font-medium">READ MORE</p>

                            </div>
                        </div>
                        <div className="flex flex-col gap-6 max-xl:flex-row max-lg:flex-col">
                            <div className="w-full">
                                <img src={Jewelry_Handcraft} className="w-full" alt="" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="font-semibold text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p>21/03/2021</p>
                                <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. </p>
                                <p className="underline font-medium">READ MORE</p>

                            </div>
                        </div>
                        <div className="flex flex-col gap-6 max-xl:flex-row max-lg:flex-col" >
                            <div className="w-full">
                                <img src={Jewelry_Flower} className="w-full" alt="" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="font-semibold text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p>21/03/2021</p>
                                <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros, elit eleifend congue amet viverra eros sit. Dui tempus amet, mattis arcu. Pharetra ut cursus mi et habitant euismod. </p>
                                <p className="underline font-medium">READ MORE</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-12 px-12 py-12 max-sm:px-6 xl:h-[480px] subscribe-image justify-center items-center w-full relative max-lg:flex-col">
                <div className="flex-[1_1_60%] flex flex-col w-full gap-4">
                    <div className="flex flex-col text-white  items-center justify-center gap-4">
                        <p className="font-semibold text-2xl text-center">Get Our Latest Update In Your Email</p>
                        <p className="text-center">Subscribe now to get 15% off on any product</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full items-center justify-center">
                        <div className="relative flex flex-col gap-4 w-full">
                            <input type="text" className="outline-none w-full pl-16 pr-6 text-gray-700 text-xl py-2 rounded placeholder:italic" placeholder="Type your Email here ..." />
                            <img src={mail_icon} className="absolute  w-6 h-6 top-1/2 left-4 -translate-y-1/2" alt="" />
                        </div>
                        <button className="bg-[#F5CC61] py-2 px-6 text-bold text-white text-xl">SUBSCRIBE</button>

                    </div>
                </div>
                <div className="flex-[1_1_40%]"></div>
            </div>
        </div>
    )
}

export default Home;