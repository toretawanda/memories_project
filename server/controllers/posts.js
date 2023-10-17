import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
   try {
     const postMessages =  await PostMessage.find();

     console.log(postMessages.length);
     res.status(200).json(postMessages);  

   } catch(error){
      res.status(404).json({message: error.message});


   }

}



export const createPost = async (req, res) => {
  
   try {
     // Extract data from the request body
     const { title, message, creator, tags,  selectedFile } = req.body;
 
     // Create a new post using the extracted data
     const newPost = new PostMessage({
       title,
       message,
       creator,
       tags: tags.split(','), // Convert tags to an array if it's a comma-separated string
       selectedFile,
       
       likeCount: 0, // You can adjust the initial likeCount as needed
       createdAt: new Date(), // You can adjust the creation date if needed
     });
 
     // Save the new post to the database
     await newPost.save();
 
     // Respond with a success message or the newly created post
     res.status(201).json(newPost);
   } catch (error) {
     // Handle any errors that occur during the save process
     res.status(500).json({ message: "Internal server error", error: error.message });
   }
 };


// export const createPost = async (req, res) => {
//    console.log(req.body);
//    try {
//      // Sample post data matching the postSchema
//      const samplePost = {
//        title: "Sample Post Title",
//        message: "This is a sample post message.",
//        creator: "Sample Creator",
//        tags: ["tag1", "tag2"],
//        selectedFile: "sample-file.jpg",
//        likeCount: 10, // You can adjust the likeCount as needed
//        createAt: new Date() // You can adjust the creation date if needed
//      };
 
//      // Create a new post using the samplePost object
//      const newPost = new PostMessage(samplePost);
 
//      // Save the new post to the database
//      await newPost.save();
 
//      // Respond with a success message or the newly created post
//      res.status(201).json(newPost);
//    } catch (error) {
//      // Handle any errors that occur during the save process
//      res.status(500).json({ message: "Internal server error" });
//    }
//  };
//export const createPost = async (req, res) => {
   // const { title, message, selectedFile, creator, tags } = req.body;

   // const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

   // try {
   //     await newPostMessage.save();

   //     res.status(201).json(newPostMessage );
   // } catch (error) {
   //     res.status(409).json({ message: error.message });
   // }
//}

  