import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SaveAsIcon } from "@heroicons/react/solid";
import { PostsContext } from "../../context/PostContext";
import { ErrorMessage } from "@hookform/error-message";

function add() {
  const { addPost } = useContext(PostsContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    addPost(data);
    reset();
  };

  return (
    <div className="w-full max-w-xs m-auto mt-3 rounded-lg">
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-gray-100 bg-opacity-75 rounded shadow-xl "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Title
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            {...register("title", {
              required: "This is feild required.",
              minLength: {
                value: 5,
                message: "This feild must be at least 5 characters.",
              },
            })}
          />
          {/* errors will return when field validation fails  */}
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="block text-xs italic text-red-500" key={type}>
                  {message}
                </p>
              ))
            }
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ImageUrl"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Image Url
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            {...register("ImageUrl", {
              required: "This is feild required.",
              pattern: {
                value: /(http(s?):)/g,
                message: "This faild image  URL ",
              },
              minLength: {
                value: 10,
                message: "This feild must be at least 10 characters.",
              },
            })}
          />
          {/* errors will return when field validation fails  */}
          <ErrorMessage
            errors={errors}
            name="ImageUrl"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="block text-xs italic text-red-500" key={type}>
                  {message}
                </p>
              ))
            }
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
        >
          <SaveAsIcon className="w-6 h-6 mr-2" /> Save
        </button>
      </form>
    </div>
  );
}

export default add;
