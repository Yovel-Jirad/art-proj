import Link from "next/link";
import Container from "../Container";

const Footer: React.FC = () => {
  return (
    <footer className=" text-sm mt-16 relative">
      <Container>
        <div className="footer">
          <div className="footer-about-us">
            <h3 className="footer-about-us-title">About Us</h3>
            <p className="footer-about-us-text">
              At Artify, we make it our mission to help you discover and buy from the best emerging artists around the world.
            </p>
            <p>&copy; {new Date().getFullYear()} Artify. All rights reserved</p>
          </div>  
          <div>
            <h3 className="footer-creators">Creators</h3>
            <p className="mb-1">Shay Pinsky</p>
            <p className="mb-1">Yovel Jirad</p>
            <p className="mb-1">Adar Budomski</p>
            <p className="mb-1">Ariel Dahan</p>  
          </div>    
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
