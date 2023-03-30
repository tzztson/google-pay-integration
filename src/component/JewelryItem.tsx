import add_cart from "../assets/img/svg/add_cart.svg"

const JewelryItem = ({ image, name, price }: any) => {

    return (
        <div className="flex flex-col gap-4">
            <img src={image} className="" alt="" />
            <p className="text-center font-bold">{name}</p>
            <p className="text-center font-bold text-[#F5CC61]">From ${price}.00</p>
            <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-[#F5CC61] text-white font-bold rounded-full py-2 px-6">
                    <span>Add to Cart</span>
                    <img src={add_cart} className="w-6 h-6" alt="" />
                </div>
            </div>
        </div>
    )
}

export default JewelryItem;