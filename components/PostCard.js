import styles from "../styles/components.module.css";
function PostCard({ ImageUrl, title }) {
  return (
    <div className="relative w-full text-left cursor-pointer group h-96">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover rounded-xl filter blur-sm invert group-hover:filter-none "
        style={{ backgroundImage: "url(" + ImageUrl + ")" }}
      ></div>
      <div className="relative flex flex-col justify-end w-full h-full bg-gray-900 bg-opacity-20 rounded-xl">
        <h3 className="w-full max-w-xs px-4 pb-4 text-2xl font-semibold text-gray-100 capitalize filter drop-shadow-lg">
          <span className={styles.text_strocked}> {title}</span>
        </h3>
      </div>
    </div>
  );
}

export default PostCard;
