import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //let name = "Mario"
  const {data: blogs, isPending, error} = useFetch('https://nodeblogapi.onrender.com/api/blogs')

  return (
    <div className="home" >
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;