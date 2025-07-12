import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
//@ts-ignore
import { client } from "../sanity/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  body: any;
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  categories?: {
    _id: string;
    title: string;
  }[];
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const data = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            body,
            publishedAt,
            mainImage { asset->{ url } },
            categories[]->{ _id, title }
          }`,
          { slug }
        );

        setPost(data);
        setLoading(false);

        if (data?.categories?.length > 0) {
          const categoryId = data.categories[0]._id;

          const suggestions = await client.fetch(
            `*[_type == "post" && references($categoryId) && slug.current != $slug] | order(publishedAt desc)[0...10] {
              _id,
              title,
              slug,
              publishedAt,
              mainImage { asset->{ url } }
            }`,
            { categoryId, slug }
          );
          setRelatedPosts(suggestions);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading || !post) {
    return (
      <div className="max-w-6xl mx-auto py-24 px-6">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-slate-200 rounded w-2/3"></div>
          <div className="h-5 bg-slate-200 rounded w-1/4"></div>
          <div className="h-64 bg-slate-300 rounded-xl"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    < >
      <Navbar />
      <div className="container mx-auto mt-24 px-6 bg-slate-50 p-4 sm:p-10 ">
        <div className="flex flex-col lg:flex-row gap-12 mt-9">
          {/* Main Blog Post */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>

            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="rounded-xl w-full mb-6"
              />
            )}

            <div className="prose max-w-none prose-blue">
              <PortableText value={post.body} />
            </div>
          </div>

          {/* Suggestions */}
          <aside className="w-full lg:w-1/3">
            {relatedPosts.length > 0 && (
              <div className="sticky top-24">
                <h2 className="text-xl font-semibold text-blue-800 mb-4 mt-9 md:mt-24 py-7">
                  More in this category
                </h2>
                <div className="space-y-6">
                  {relatedPosts.map((suggestion) => (
                    <Link
                      to={`/blog/${suggestion.slug.current}`}
                      key={suggestion._id}
                      className="block group border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition"
                    >
                      {suggestion.mainImage?.asset?.url && (
                        <img
                          src={suggestion.mainImage.asset.url}
                          alt={suggestion.title}
                          className="w-full h-40 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 text-base">
                          {suggestion.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(suggestion.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
      <Footer/>
    </>
  );
}
