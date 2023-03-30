import SimpleAccordion from "../component/SimpleAccordion";
import { Products } from "../utils/consts";

const Shop = () => {
    return (
        <div>
            <div className="border-b">
                <div className="container mx-auto px-12 py-12 max-sm:px-6 flex flex-col gap-6">
                    <p className="font-semibold text-5xl">Shop</p>
                    <p className="py-2 font-semibold text-2xl ">Home &nbsp; / &nbsp; <span className="text-[#F5CC61]">Shop</span></p>
                </div>
            </div>
            <div className="container mx-auto px-12 py-12 max-sm:px-6 flex">
                <div className="flex-[1_1_30%]">
                    <div className="py-4">
                        <p className="font-bold">Filter By Price</p>
                        <input type="range" className="w-full  h-1 mb-6 bg-[#F5CC61] accent-[#F5CC61]  rounded-lg appearance-none cursor-pointer range-sm" />
                    </div>
                    <div className="py-4">
                        <p className="font-bold pb-4">Product Categories</p>
                        <div className="flex flex-col gap-4">
                            {Products.map((item, ind) => <SimpleAccordion title={item.title} content={item.content} />)}
                        </div>
                    </div>
                    <div className="py-4">
                        <p className="font-bold  pb-4">Gender</p>
                        <div className="flex flex-col gap-2">
                            <input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " />
                            <input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " />
                            <input type="checkbox" value="" className="w-6 h-6  accent-yellow-400  rounded " />
                        </div>
                    </div>

                </div>
                <div className="flex-[1_1_70%]">

                </div>
            </div>
        </div>
    )
}

export default Shop;