import {createClient} from '@sanity/client'
import imageUelBuilder from '@sanity/image-url'

// this script will connect frontend with sanity backend

{
// import sanityClient from '@sanity/client'
// import imageUelBuilder from '@sanity/image-url'

// export const client = sanityClient({
//     projectId: "",
//     dataset: "",
//     apiVersion: "",
//     useCdn: true,
//     token:""
// })
}


//to fill the details
// cd .\backend_sanity\
// sanity manage
// if you are getting error something like "running scripts is disabled" then
// run this code in power shell 
// Set-ExecutionPolicy RemoteSigned


export const client = createClient({
        projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
        dataset: "production",
        apiVersion: "2023-03-01",
        useCdn: true,
        token: process.env.REACT_APP_SANITY_TOKEN
})

//this is only for if using images with sanity
const builder = imageUelBuilder(client);

export const urlFor = (source)=> builder.image(source);