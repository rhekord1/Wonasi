import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
    id = "about-us"
    className = "flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className = "flex flex-1 flex-col">
     
              <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >  
                 We Provide You <span className="text-coral-red ">Super</span> <span className="text-coral-red ">Quality</span> Shoes
              </h2>
              <p className="mt-4 lg:max-w-lg info-text"> Ensuring premium comfort and style, our meticulous craftsmanship guarantees a perfect fit and provides long-lasting durability.
                Ensuring premium comfort and style, our meticulous craftsmanship guarantees a perfect fit and provides long-lasting durability.
              </p>
              <p className = "mt-6 lg:max-w-lg info-text">
                Our dedication to quality means every shoe is designed to meet the highest standards, offering you a blend of elegance and performance.
              </p>
              <div className="mt-11 " >
              <Button label="View Details"/>
              </div>
      </div>
      <div className="flex-1 flex justify-center item-center">
        <  img 
          src={shoe8}
          alt="image of shoe8"
          width={570}
          height={522}
          className="mt-2 rounded-full w-5 h-5"
        />
      </div>

    </section>
  )
}

export default SuperQuality;