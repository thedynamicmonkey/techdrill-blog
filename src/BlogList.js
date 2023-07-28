import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p className="blog-preview__username">Spoken by {blog.author}</p>
                        <p>{blog.body}</p>
                        <button className="edit">
                            <i class="fa fa-edit"></i>
                            </button>
                        <div className="blog-preview__like-dislike">
                            <button className="like"><i class="fa fa-thumbs-o-up"></i></button>
                            <button className="dislike"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
                        </div>

                    </Link>

                </div>
            ))}
        </div>
    );
}

export default BlogList;