import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


//sanity client side setup 
// run sanity manage from backend folder, 
// add CORS origin as http://localhost:3000
// generate token from  Tokens
export const client = sanityClient({
  projectId: ehhe73j6,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);