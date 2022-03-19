import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import BookCard from "../../components/BookSearch/BookCard";
import { useGetBooksByNameQuery } from "../../features/book/bookSlice";
import useDebounce from "../../hooks/useDebounce";
import Grid from "../../layouts/Grid";

const BookSearch = () => {
  const [value, setValue] = useState("react");
  const name = useDebounce(value, 400);
  const { data: books, isLoading } = useGetBooksByNameQuery(name, {
    skip: value.trim().length === 0,
  });

  const { isLoggedIn } = useAppSelector((state) => state.auth);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [navigate, isLoggedIn]);

  if (isLoading) return <p>Loading..</p>;
  return (
    <div className="w-full h-full py-10 px-10">
      <div className="flex flex-col items-center">
        <input
          onChange={onChange}
          className="bg-white rounded-2xl h-16 pl-4 min-w-[300px] mb-10 focus:outline-none"
          placeholder="검색하기"
        />
      </div>
      <div className="flex flex-col items-center gap-10">
        <Grid>
          {books.map((book: any, index: number) => (
            <BookCard key={index} book={book} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BookSearch;
