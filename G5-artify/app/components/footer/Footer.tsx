import Link from "next/link";
import Container from "../Container";

const Footer: React.FC = () => {
  return (
    <footer className=" text-sm mt-16 relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8 relative z-10">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="w-full mb-2 md:mb-0">
              At Artify, we make it our mission to help you discover and buy from the best emerging artists around the world.
            </p>
            <p>&copy; {new Date().getFullYear()} Artify. All rights reserved</p>
          </div>  
          <div>
            <h3 className="text-base font-bold mb-2">Creators</h3>
              <p className="mb-2">Shay Pinsky</p>
              <p className="mb-2">Yovel Jirad</p>
              <p className="mb-2">Adar Budomski</p>
              <p className="mb-2">Ariel Dahan</p>  
          </div>    
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
