import message_model from "../../models/message_model";
const Mutation = {
    newMessage: async (_, {title, content, author}) => {
        const newMessage = await new message_model({title, content, author})
        return await newMessage.save()
    }
}
export default Mutation