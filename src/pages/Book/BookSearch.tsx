import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import BookCard from "../../components/BookSearch/BookCard";
import { useGetBooksByNameQuery } from "../../features/book/bookSlice";
import useDebounce from "../../hooks/useDebounce";
import Grid from "../../layouts/Grid";

const BookSearch = () => {
  const [value, setValue] = useState("react");
  const [start, setStart] = useState(1);
  const name = useDebounce(value, 400);
  const { data: books, isLoading } = useGetBooksByNameQuery(
    { name, start },
    {
      skip: value.trim().length === 0,
    }
  );

  const { isLoggedIn } = useAppSelector((state) => state.auth);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setStart(1);
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
        <div className="flex flex-row gap-40">
          {start !== 1 && (
            <button
              className="p-4 rounded-full hover:bg-transparent/[.06]"
              onClick={() => setStart(start - 10)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
          )}

          <button
            className="p-4 rounded-full hover:bg-transparent/[.06]"
            onClick={() => setStart(start + 10)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
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
