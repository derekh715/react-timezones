import { Moon, Sun } from "react-feather";
import { useRootStore } from "../../store/rootStore";

function Nav() {
  const { toggleDarkMode, darkMode } = useRootStore();
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-wide dark:text-gray-100">
        <span className="">React</span>
        <span className="ml-2 bg-gradient-to-br from-primary-400 to-primary-800 bg-clip-text text-transparent dark:from-primary-300 dark:to-primary-600">
          Timezones
        </span>
      </h1>
      <div className="flex items-center">
        {darkMode ? (
          <Sun
            className="size-8 cursor-pointer hover:opacity-70 transition-opacity text-gray-100"
            onClick={toggleDarkMode}
          />
        ) : (
          <Moon
            className="size-8 cursor-pointer hover:opacity-70 transition-opacity text-gray-900"
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default Nav;
