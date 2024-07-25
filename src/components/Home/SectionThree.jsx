import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`,{
    cache: "force-cache"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div className="w-full flex flex-wrap min-h-screen">
        {data.map((cur, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="card" style={{ width: "18rem" }}>
              <Image
                className="card-img-top"
               rel="preload"
                src={cur.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="Card image cap"
                width={200}
                height={150}
                priority
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link rel="preload" href={`/blog/${cur.slug}`} prefetch >{cur.title.rendered}</Link>
                </h5>
               
                  <div dangerouslySetInnerHTML={{ __html: cur.excerpt.rendered.slice(0, 102) }}></div>
                  <Link rel="preload" href={`/blog/${cur.slug}`} prefetch >Read more...</Link>
             
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
