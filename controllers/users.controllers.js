const bcrybt   = require ('bcrypt');
const User = require ('../models/user');


 
async function register (req, res){

    // Read data from request body
    const { fullname, email, password, telephone} =  req.body;
    console.log(req.body)

    try{

        // check if user already exists
       const existingUser = await User.findOne({ where: { email }, attributes: ['id', 'password'] });

        if(existingUser){
            return res.status(400).send({ error : 'User already exists'});
        }

        // Crypt password
        const hashedPassword = await bcrybt.hash(password, 10);

        // Create instance from my model user

        const newUser = await User.create({
            fullname,
            email,
            password : hashedPassword,
            telephone,
        });
       
        console.log(newUser)
        
        res.status(201).send({ message: 'User registered successfully', user: newUser });
        

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }

};


async function login (req, res){

    // Read data from request body
    const { email, password } = req.body;
    try {

        // Check by mail if already exists in db 
        const user = await User.findOne({ where :{email}, attributes:['id', 'password']});

        if(!user){
            return res.status(404).send({ error : 'User not found'});
        }
        
        // Check Ur password
        isPasswordValid = await bcrybt.compare(password, user.password);

        if(! isPasswordValid){
            return res.status(404).send({ error : 'Invalid password'});
        }

        res.status(200).send({ message : 'Login successful'});

    } catch (error){
        console.error('Error logging in user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};


module.exports = { register,login };