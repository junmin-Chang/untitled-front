import { useGetBooksByNameQuery } from "../features/book/bookSlice";

const Home = () => {
  const { data, isLoading, error } = useGetBooksByNameQuery("react", {
    refetchOnFocus: true,
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <ul>
        {data.map((item: any, index: number) => (
          <li>{item.title.replace(/<\/?[^>]+(>|$)/g, "")}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
