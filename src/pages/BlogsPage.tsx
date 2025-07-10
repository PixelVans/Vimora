import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from 'react-router-dom';
// @ts-ignore
import { client } from '../sanity/sanity';

type Category = {
  _id: string;
  title: string;
};

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any;
  mainImage?: { asset: { url: string } };
  categories?: Category[];
};

const BlogSkeleton = () => (
  <div className="animate-pulse border rounded-2xl p-4 shadow-sm bg-white space-y-4">
    <div className="h-48 bg-slate-200 rounded-xl w-full" />
    <div className="h-4 bg-slate-200 w-3/4 rounded" />
    <div className="h-3 bg-slate-200 w-1/2 rounded" />
    <div className="h-3 bg-slate-200 w-full rounded" />
    <div className="h-3 bg-slate-200 w-[80%] rounded" />
  </div>
);

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 12;

  const fetchCategories = async () => {
    try {
      const cats: Category[] = await client.fetch(`*[_type == "category"]{ _id, title }`);
      setCategories(cats);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const fetchPosts = async (page: number, categoryId?: string) => {
    setLoading(true);
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;

    let query = `*[_type == "post"${categoryId !== 'all' ? ` && "${categoryId}" in categories[]->_id` : ''}]
      | order(publishedAt desc) [${start}...${end}] {
        _id,
        title,
        slug,
        publishedAt,
        body,
        mainImage { asset->{ url } },
        categories[]->{ _id, title }
      }`;

    try {
      const fetchedPosts: BlogPost[] = await client.fetch(query);
      setPosts(fetchedPosts);

      const countQuery = `count(*[_type == "post"${categoryId !== 'all' ? ` && "${categoryId}" in categories[]->_id` : ''}])`;
      const count = await client.fetch(countQuery);
      setTotalPosts(count);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPosts(currentPage, selectedCategory);
  }, [currentPage, selectedCategory]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <>
      <Navbar />
      <section className="bg-slate-50 py-12 mt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-9 text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-sky-400">
            Vimora Blog
          </h1>

          <div className="mb-5 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-slate-200 text-blue-600 hover:bg-blue-50'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => {
                  setSelectedCategory(cat._id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat._id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-slate-200 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
              : posts.length === 0 ? (
                <p className="text-center col-span-full text-slate-500">No posts found.</p>
              ) : (
                posts.map((post) => (
                  <div
                    key={post._id}
                    className=" rounded-2xl  hover:shadow-xl transition p-4 flex flex-col"
                  >
                    {post.mainImage?.asset.url && (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        className="rounded-md h-52  object-cover mb-5 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                      />
                    )}
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="text-xl font-bold text-slate-900 hover:text-blue-600 transition"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-slate-500 mb-2">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories?.map((cat) => (
                        <span
                          key={cat._id}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 mb-4">
                      {post.body?.[0]?.children?.[0]?.text?.substring(0, 120)}...
                    </p>
                    
                  </div>
                ))
              )}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 rounded-md border text-blue-600 hover:bg-blue-100 disabled:opacity-40"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border hover:bg-blue-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-3 py-1 rounded-md border text-blue-600 hover:bg-blue-100 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
