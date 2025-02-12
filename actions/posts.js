"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { uploadImage } from "@/lib/cloudinary";

export const createPost = async (prevState, formData) => {
  const title = formData.get('title');
  const image = formData.get('image');
  const content = formData.get('content');

  const errors = [];
  if (!title || !title.trim().length) {
    errors.push('Title is required');
  }

  if (!content || !content.trim().length) {
    errors.push('Content is required');
  }

  if (!image || image.size === 0) {
    errors.push('Image is required');
  }

  if (errors.length) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (e) {
    throw new Error("Image upload failed, post wasn\'t created. Please try again later.");
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1
  });

  revalidatePath('/', 'layout');
  redirect('/feed');
};

export const togglePostLikeStatus = async (postId) => {
  await updatePostLikeStatus(postId, 2);
  revalidatePath('/', 'layout');
};
