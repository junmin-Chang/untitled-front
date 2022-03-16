import { NavLink } from "react-router-dom";

const FilterMenu = () => {
  const baseClass = "px-4 py-2 rounded-2xl";
  return (
    <div className="flex flex-row gap-6 px-4 py-2 bg-white bg-opacity-60 rounded-2xl">
      <NavLink
        to="/shelf/all"
        className={({ isActive }) =>
          isActive
            ? baseClass + " bg-green-400 text-white"
            : baseClass + " bg-transparent"
        }
      >
        ALL
      </NavLink>
      <NavLink
        to="/shelf/hasRead"
        className={({ isActive }) =>
          isActive
            ? baseClass + " bg-green-400 text-white"
            : baseClass + " bg-transparent"
        }
      >
        읽은 책들
      </NavLink>

      <NavLink
        to="/shelf/willRead"
        className={({ isActive }) =>
          isActive
            ? baseClass + " bg-green-400 text-white"
            : baseClass + " bg-transparent"
        }
      >
        읽을 책들
      </NavLink>
    </div>
  );
};

export default FilterMenu;
