import { axiosPrivateInstance } from "..";

const getBooks = (sortBy: string) => {
  return axiosPrivateInstance(`/book?sortBy=${sortBy}`);
};
const addBook = ({
  title,
  image,
  isbn,
}: {
  title: string;
  image: string;
  isbn: string;
}) => {
  return axiosPrivateInstance.post("/book", {
    title,
    image,
    isbn,
  });
};

const deleteBook = ({ id }: { id: string }) => {
  return axiosPrivateInstance.delete(`/book/${id}`);
};

const updateBook = (id: string, body: any) => {
  return axiosPrivateInstance.patch(`/book/${id}`, body);
};

const bookService = { addBook, getBooks, deleteBook, updateBook };

export default bookService;
