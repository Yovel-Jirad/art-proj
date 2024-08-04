export const revalidate=0; 

import getCurrentUser from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrapper from "../components/FormWrapper";
import RegisterFrom from "./RegisterFrom";


const Register = async () => {
  // Fetch the current user
  const currentUser = await getCurrentUser(); 

  // Render the registration form component with the fetched current user data
  return ( 
  <Container>
    <FormWrapper>
        <RegisterFrom currentUser={currentUser}/> {/* Passed currentUser as props to RegisterForm component */}

    </FormWrapper>
  </Container>
  );
}

export default Register; 