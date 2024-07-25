import { notFound } from "next/navigation";
import Image from "next/image";
async function getPost(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?slug=${slug}`
  );
  if (!res.ok) {
    return null;
  }

  const posts = await res.json();

  return posts.length > 0 ? posts[0] : null;
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <Image
        src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
        alt="Card image cap"
       loading="lazy"
        width={825}
        height={431}
        style={{ marginLeft: "500px", marginTop: "70px" }} 
        rel="preload"
      />
      <div className="second" style={{display: "flex", flexDirection:"row", marginLeft: "500px"}}>
        <Image
          src={post.yoast_head_json.schema["@graph"][4].image.url}
          height={50}
          width={50}
          alt="logo"
          style={{ borderRadius: "50px" }}
        />
        <h4 style={{marginLeft:"12px"}}>By {post.yoast_head_json.schema["@graph"][4].image.caption}</h4>
        <h4 style={{marginLeft: "500px"}}>
          {post.yoast_head_json.schema["@graph"][0].datePublished.slice(0, 10)}
        </h4>
      </div>

      <h2>{post.title.rendered}</h2>

      <div
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>

      <p>{post.yoast_head_json.schema["@graph"][4].description}</p>
    </>
  );
}
