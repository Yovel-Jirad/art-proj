
export const revalidate=0; 

// Import necessary components and functions
import HomeBanner from "./components/HomeBanner";
import Container from "./components/Container";
import MarketplacePage from "./marketPlace/page";



// Define the Home component as an asynchronous function
export default async function Home() {


  // Render the home page layout
  return (
    <div className="p-8">
      {/* Container component to provide layout structure */}
      <Container>
        <div>
          {/* Render the HomeBanner component */}
          <HomeBanner />
        </div>
        {/* Additional grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-6">
          {/* Add content for the additional grid here */}
        </div>
      </Container>
    </div>
  );
}
