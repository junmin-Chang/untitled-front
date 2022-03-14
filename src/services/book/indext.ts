import { axiosPrivateInstance } from "..";

const getBooks = () => {
  return axiosPrivateInstance("/book");
};
const addBook = ({
  title,
  image,
  isbn,
}: {
  title: string;
  image: string;
  hasRead: boolean;
  isbn: string;
}) => {
  return axiosPrivateInstance.post("/book", {
    title,
    image,
    hasRead: true,
    isbn,
  });
};

const bookService = { addBook, getBooks };

export default bookService;
