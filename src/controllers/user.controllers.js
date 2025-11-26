import {asyncHandler} from '../utils/asyncHandler.js';

const registeruser = asyncHandler(async (req, res) => {
    // Registration logic here
    return res.status(200).json({message: 'OK' });
});

export { registeruser };