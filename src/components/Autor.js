

const Autor = ({ post, autor=true }) => {
  return (
    <span class="meta">
         {autor ? "Autor" : ""}
            <a href="#!">{post._embedded.author[0].name}</a>,
            {new Date (post.date).toLocaleDateString("hr-HR")}
    </span>
  )
}

export default Autor
