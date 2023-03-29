import express from 'express';
import { addUser, getUsers} from '../controller/user-controller.js';
import { getConversation, newConversation } from '../controller/conversation-controller.js';
import { getMessages, newMessage } from '../controller/message-controller.js';
import { getImage, uploadFile } from '../controller/image-controller.js';
//import { getConversation } from '../../client/src/service/api.js';
import upload from '../../server/utils/upload.js';
const route = express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/message/get/:id',getMessages);
route.get('/file/:filename',getImage)
export default route;