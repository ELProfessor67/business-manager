import mongoose from "mongoose";

const userDetails = new mongoose.Schema({
    business_name: {type: String,default: undefined},
    website: {type: String,default: undefined},
    company_address: {type: String,default: undefined},
    company_place_id: {type: String,default: undefined},
    user_id: {type: String,required: true},
});
mongoose.models = {}
export default mongoose.model('user_detail',userDetails);