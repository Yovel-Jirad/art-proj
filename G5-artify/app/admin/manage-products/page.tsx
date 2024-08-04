export const revalidate=0; 

import Container from "@/app/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProductByUserName from "@/actions/getProductByUserName";
import getCurrentUser from "@/actions/getCurrentUser";
import NullDataError from "@/app/components/NullDataError";


// Define ManageProducts component
const ManageProducts = async() => {


  const currentUser = await getCurrentUser();

  const products= await getProductByUserName(currentUser.name);

  if(!currentUser || currentUser.role!='ADMIN'){
    return <NullDataError title='Oops! Access denied'/>;
  }

  // Render ManageProducts component
  return (
  <div className="pt-8">
    <Container>
      {/* Render ManageProductsClient component with fetched products */}
      <ManageProductsClient products = {products}/>
    </Container>
  </div>);
};

export default ManageProducts; // Export ManageProducts component
