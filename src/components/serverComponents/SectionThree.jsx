import Image from "next/image";
import Link from "next/link";

// Server Component (default in the App Router)
const Home = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`, {
    cache: "force-cache"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <div className="w-full flex flex-wrap min-h-screen">
      {data.map((cur, i) => (
        <div key={i} className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="card" style={{ width: "18rem" }}>
            <Image
              className="card-img-top"
              src={cur.yoast_head_json.schema["@graph"][0].thumbnailUrl}
              alt="Card image cap"
              width={200}
              height={150}
              priority
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link href={`/blog/${cur.slug}`} prefetch>{cur.title.rendered}</Link>
              </h5>
              <p>{cur.excerpt.rendered.slice(0, 102).replace('<p>','') }</p>
             
              <Link href={`/blog/${cur.slug}`} prefetch>Read more...</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
