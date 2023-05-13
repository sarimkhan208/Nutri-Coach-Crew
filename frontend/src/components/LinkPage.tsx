import React from "react";
import { Link } from "react-router-dom";

type Props = {
  blogLink: string;
  recipeLink: string;
  exerciseLink: string;
  chatLink: string;
};

const LinkPage: React.FC<Props> = ({
  blogLink,
  recipeLink,
  exerciseLink,
  chatLink,
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-4">
        <Link
          to={blogLink}
          className="p-8 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          Blogs
        </Link>
        <Link
          to={recipeLink}
          className="p-8 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          Recipes
        </Link>
        <Link
          to={exerciseLink}
          className="p-8 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          Exercise Videos
        </Link>
        <Link
          to={chatLink}
          className="p-8 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          Chat
        </Link>
      </div>
    </div>
  );
};

export default LinkPage;
