import { ChangeEvent, Fragment, useCallback, useState } from "react";
import { useAppSelector } from "../app/hooks";
import Input from "../components/common/Input";
import { useGetBooksByNameQuery } from "../features/book/bookSlice";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [name, setName] = useState("프론트엔드");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const { data, isLoading, error } = useGetBooksByNameQuery(name, {
    skip: name.trim().length === 0 || !user,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      <Input placeholder="검색어" onChange={onChange} />
      <ul>
        {data?.map((item: any, index: number) => (
          <Fragment key={index}>
            <li>{item.title.replace(/<\/?[^>]+(>|$)/g, "")}</li>
            <img src={item.image} alt="pro" />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Home;
