import Conversation from "../model/Conversation.js"
import Message from "../model/Message.js"

export const newMessage=async(req,res)=>{
	try {
		const newMessage= new Message(req.body)
		await newMessage.save();
		await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
		return res.status(200).json("Message sent succesfully");
		} catch (error) {
			return res.status(500).json(error.message);
	}
}

export const getMessages= async(req,res)=>{
		try {
			const message=await Message.find({conversationId:req.params.id});
			return res.status(200).json(message);
		} catch (error) {
			return res.status(500).json(error.message);
		}
}