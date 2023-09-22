import { Post } from "@prisma/client";
import prisma from "../database/database";

export type CreatePost = Omit<Post, "id" | "createdAt">

async function getPosts() {
  const result = await prisma.post.findMany()
  return result;
}

async function getPost(id: number) {
  const result = await prisma.post.findUnique({
    where: {
      id
    }
  })
  return result;
}

async function createPost(post: CreatePost) {
  const result = await prisma.post.create({
    data: post
  })
  return result;
}

async function deletePost(id: number) {
  const result = await prisma.post.delete({
    where: {
      id
    }
  })
  return result;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;