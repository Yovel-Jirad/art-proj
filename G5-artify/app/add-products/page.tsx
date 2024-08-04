export const revalidate=0; 

// Import necessary dependencies
import Container from "@/app/components/Container";
import FormWrapper from "@/app/components/FormWrapper";
import AddProductForm from "./AddProductForm";
import getCurrentUser from "@/actions/getCurrentUser";
import NullDataError from "@/app/components/NullDataError";

// Define AddProducts component

const AddProducts = async () => {

  const currentUser = await getCurrentUser();
  
  if(!currentUser || currentUser.role!='ADMIN'){
    return <NullDataError title='Oops! Access denied'/>;
  }

  // Render AddProducts component
  return (
    <div className="p-8">
      <Container>
        <FormWrapper>
          {/* Render AddProductForm component */}
          <AddProductForm user_name={currentUser.name} />
        </FormWrapper>
      </Container>
    </div>
  );
};

export default AddProducts; // Export AddProducts component
