import httpStatus from 'http-status';
import mongoose from 'mongoose';
import User from './post.model';
import ApiError from '../errors/ApiError';
import { IOptions, QueryResult } from '../paginate/paginate';
import { NewCreatedUser, UpdateUserBody, IUserDoc, NewRegisteredUser } from './post.interfaces';
import { Request } from 'express';

/**
 * Create a user
 * @param {NewCreatedUser} userBody
 * @returns {Promise<IUserDoc>}
 */
export const createPost = async (userBody: NewCreatedUser): Promise<IUserDoc> => {
  return User.create(userBody);
};


/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryPosts = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {
  const users = await User.paginate(filter, options);
  return users;
};