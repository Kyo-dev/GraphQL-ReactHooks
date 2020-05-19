import message_model from "../../models/message_model";

const Query = {
    ping(){
        return "pong";
    },
    
    // AQUI SE HACIA LA CONSULTA SQL
    messages: async () =>{
        return await message_model.find()
    }
}
export default Query