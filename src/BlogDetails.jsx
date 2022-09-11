import { useParams } from "react-router-dom"; //useNavigate, not in this one. live react project
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, error, isPending} = useFetch('https://nodeblogapi.onrender.com/api/blogs/' + id);
  // const navigate = useNavigate()

  // const handleClick = () => {
  //   fetch('https://nodeblogapi.onrender.com/api/blogs/' + blog._id, {
  //     method: 'DELETE'
  //   }).then(() => {
  //     navigate('/')
  //   })
  // }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by - {blog.author}</p>
          <div> { blog.body } </div>
          {/* <button onClick={handleClick} >Delete</button> */}
        </article>
      )}
    </div>
  )
}

export default BlogDetails;