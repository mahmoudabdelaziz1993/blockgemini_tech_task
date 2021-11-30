import React from "react";
import { useForm } from "react-hook-form";
import { SaveAsIcon } from "@heroicons/react/solid";
function add() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            {...register("title", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && (
            <span className="text-xs italic text-red-500">
              This field is required
            </span>
          )}
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
            {...register("ImageUrl", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && (
            <span className="text-xs italic text-red-500">
              This field is required
            </span>
          )}
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
