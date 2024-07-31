import Link from "next/link";
import Container from "../Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-500 bg-opacity-60 text-sm mt-16 relative">
      {/* Content */}
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8 relative z-10">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
            Artify is your hub to share, sell and purchase art. We strive to give artists and customers a safe and open environment to exhibit and trade in art.
            </p>
            <p>&copy; 2024 All rights reserved to Artify.</p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-2">Creators</h3>
              <p className="mb-2">Shy pinsky</p>
              <p className="mb-2">Yovel jirad</p>
              <p className="mb-2">Adar budomsky</p>
              <p className="mb-2">Ariel dahan</p>  
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
