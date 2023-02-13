import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import pick from '../utils/pick';
import { IOptions } from '../paginate/paginate';
import * as postService from './post.service';
import httpStatus from 'http-status';
import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  accessKeyId:'AKIAWLSMY3YZ42UI6S3B',
  secretAccessKey: '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'
})


export const createPost = catchAsync(async (req: Request, res: Response) => {
  const user = await postService.createPost(req.body);
  
  res.status(httpStatus.CREATED).send(user);
  console.log('req received on create post');
});

export const getPosts = catchAsync(async (req: Request, res: Response) => {
  console.log('req received on get posts');
  const filter = pick(req.query, ['name', 'role']);
  const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
  const result = await postService.queryPosts(filter, options);
  res.send(result);
});


export const uploadFile = catchAsync(async (req: any, res: Response) => {
  
  console.log('request came to upload file',)
  
  const params:any = {
    Bucket: 'social-feed-yash',
    Key: req.file?.originalname,
    Body: req.file?.buffer
  }
  
  const result = await s3.upload(params).promise()
  
  console.log('result', result)
  
  res.send(result);
});