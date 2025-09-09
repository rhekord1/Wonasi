import Button from "../components/Button";
import {offer} from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className = "flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687}  className="object-contain w-full"/>
      </div>
      <div className = "flex flex-1 flex-col">
     
              <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >  
                 <span className="text-coral-red ">Special </span> Offer
              </h2>
              <p className="mt-4 lg:max-w-lg info-text"> Ensuring premium comfort and style, our meticulous craftsmanship guarantees a perfect fit and provides long-lasting durability.
                Ensuring premium comfort and style, our meticulous craftsmanship guarantees a perfect fit and provides long-lasting durability.
              </p>
              <p className = "mt-6 lg:max-w-lg info-text">
                Our dedication to quality means every shoe is designed to meet the highest standards, offering you a blend of elegance and performance.
              </p>
              <div className="mt-11 flex flex-wrap gap-4" >
              <Button label="Shop now " iconUrl={arrowRight}/>
              <Button label="Learn more" 
              backgroundColor="bg-white"  
              borderColor="border-slate-gray"  
              textColor="text-slate-gray"/>
              </div>
      </div>
    </section>
  )
}

export default SpecialOffer;