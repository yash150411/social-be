import express, { Router } from 'express';
import { postController } from '../../modules/post';
import multer from 'multer'
const storage = multer.memoryStorage()
const upload = multer({storage: storage});

const router: Router = express.Router();

// router
//   .route('/')
//   .post(postController.createPost)
//   .get(postController.getPosts); 
  
router
  .route('/upload')
  .post(upload.single('file'),postController.uploadFile)

export default router;