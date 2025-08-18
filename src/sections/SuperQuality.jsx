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
              <p className="mt-4 lg:max w-lg info-text"> Ensuring premium comfort and style, our meticulous craftsmanship guarantees a perfect fit and provides long-lasting durability.
                Ensuring premium comfort and style, our meticulous craftsmanship guarantees a perfect fit and provides long-lasting durability.
              </p>
              <p>
                Our dedication to quality means every shoe is designed to meet the highest standards, offering you a blend of elegance and performance.
              </p>
              <Button label="View Details"/>
      </div>
    </section>
  )
}

export default SuperQuality;