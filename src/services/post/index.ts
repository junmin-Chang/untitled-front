import { axiosPrivateInstance, axiosPublicInstance } from "..";

export const getPosts = () => {
  return axiosPublicInstance.get("/post");
};
export const addPost = ({
  isbn,
  title,
  content,
}: {
  isbn: string;
  title: string;
  content: string;
}) => {
  return axiosPrivateInstance.post(`/post`, {
    title,
    content,
    bookIsbn: isbn,
  });
};

export const deletePost = (id: string) => {
  return axiosPrivateInstance.delete(`/post/${id}`);
};

export const addComment = (boardId: string, body: any) => {
  return axiosPrivateInstance.post(`/comment/${boardId}`, body);
};

export const deleteComment = (commentId: string) => {
  return axiosPrivateInstance.delete(`/comment/${commentId}`);
};
