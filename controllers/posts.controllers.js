const  User =  require ('../models/user');
const  Post  =  require ('../models/post');


async function createPost(req, res) {

    // Read data from request body
    const {title, content} = req.body;
    const userId = req.query.userId;

    try {

        // Check if user exists
        const user = await User.findOne({ where : {id :userId}});

        if(!user){
            return res.status(404).send({ error : 'User not found'});
        }

        console.log(user);
        console.log(user.id);


        // Create instance from my model Post
        const newPost = await Post.create({
            title,
            content,
            userId: user.id,
        });

        res.status(200).send({ message : 'Post created successfully', post : newPost});




    } catch (error) {
        console.error('Error occurred during post creation :', error);
        return res.status(500).send({ error: 'Internal server error' });
    }
};


module.exports = createPost;