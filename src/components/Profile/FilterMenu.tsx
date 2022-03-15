import { useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getBooks } from "../../features/book/bookSlice";

const FilterMenu = () => {
  const dispatch = useAppDispatch();
  const onClickDefault = useCallback(() => {
    dispatch(getBooks("default"));
  }, [dispatch]);
  const onClickHasRead = useCallback(() => {
    dispatch(getBooks("hasRead"));
  }, [dispatch]);
  const onClickWillRead = useCallback(() => {
    dispatch(getBooks("willRead"));
  }, [dispatch]);
  return (
    <div className="flex flex-row gap-6 px-4 py-2 bg-white bg-opacity-60">
      <button
        onClick={onClickDefault}
        className="hover:bg-green-500 hover:text-white"
      >
        ALL
      </button>
      <button
        onClick={onClickHasRead}
        className="hover:bg-green-500 hover:text-white"
      >
        읽은 책들
      </button>
      <button
        onClick={onClickWillRead}
        className="hover:bg-green-500 hover:text-white"
      >
        읽을 책들
      </button>
    </div>
  );
};

export default FilterMenu;
