import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import GlossyCard from "../components/GlossyCard";
import { getBooks } from "../features/book/bookSlice";
import Grid from "../layouts/Grid";
import convertHtmlToText from "../utils/convertHtmlToText";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const books = useAppSelector((state) => state.book);
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center py-10">
      <p className="font-black text-3xl">{user.user.userName}님의 서재</p>
      <Grid>
        {books.map((book, index) => (
          <GlossyCard key={index}>
            <Link
              to={`/book/${book.isbn}`}
              className="flex flex-col items-center gap-10"
            >
              <p className="text-black font-black">
                {convertHtmlToText(book.title)}
              </p>
              <img src={book.image} alt={book.title} />
            </Link>
          </GlossyCard>
        ))}
      </Grid>
    </div>
  );
};

export default Profile;
