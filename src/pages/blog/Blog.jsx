import { FiArrowUpRight, FiClock } from "react-icons/fi";

export default function Blog() {
  const categories = [
    "All",
    "Trends",
    "Lifestyle",
    "Behind The Brand",
    "Style Guide",
  ];

  const posts = [
    {
      id: 1,
      title:
        "The Art of Pure Minimalism: Shaping the Next Generation of Everyday Essentials",
      excerpt:
        "Explore how modern design movements are shifting back to foundational aesthetics, focusing heavily on sustainability, material honesty, and refined simplicity in daily consumer goods.",
      category: "Trends",
      date: "June 10, 2026",
      readTime: "5 min read",
      image: "/assets/pics/photo1.jpg",
      featured: false,
    },
    {
      id: 2,
      title: "Curating a Timeless Wardrobe on a Sustainable Budget",
      excerpt:
        "Ditch fast fashion. Learn the core principles of building a capsule collection that outlasts seasonal trends while keeping your carbon footprint minimal.",
      category: "Style Guide",
      date: "June 08, 2026",
      readTime: "4 min read",
      image: "/assets/pics/photo2.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Behind the Studio Doors: How We Source Our Organic Materials",
      excerpt:
        "An exclusive look into our global supply chain, verifying ethical factories and the premium raw textures that define our latest summer release.",
      category: "Behind The Brand",
      date: "June 05, 2026",
      readTime: "7 min read",
      image: "/assets/pics/photo-3.jpg",
      featured: true,
    },
    {
      id: 4,
      title:
        "Tactile Textures: Why Raw Aesthetics Dominate Modern Interior Design",
      excerpt:
        "From brushed concrete to unpolished oak, discover how physical retail spaces are converting visitors into loyal brand enthusiasts using touch.",
      category: "Lifestyle",
      date: "June 01, 2026",
      readTime: "3 min read",
      image: "/assets/pics/photo3.jpg",
      featured: false,
    },
  ];

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8 selection:bg-black selection:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-400 block mb-3">
              Journal & Insights
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
              The Editorial<span className="text-gray-300">.</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                idx === 0
                  ? "bg-gray-950 text-white shadow-sm"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {featuredPost && (
            <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer">
              <div className="lg:col-span-7 aspect-16/10 sm:aspect-video w-full overflow-hidden bg-gray-50 rounded-4xl border border-gray-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-400 mb-4">
                  <span className="text-gray-900 px-2.5 py-1 bg-gray-50 rounded-lg border border-gray-100">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FiClock /> {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight mb-4 group-hover:text-gray-700 transition-colors duration-300 flex items-start gap-2">
                  {featuredPost.title}
                  <FiArrowUpRight className="text-xl shrink-0 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-gray-400" />
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {featuredPost.excerpt}
                </p>
                <span className="text-xs font-bold text-gray-400">
                  {featuredPost.date}
                </span>
              </div>
            </article>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pt-16 border-t border-gray-100">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col cursor-pointer"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-gray-50 rounded-2xl mb-5 border border-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 mb-3">
                  <span className="text-gray-900">{post.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FiClock /> {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-gray-950 tracking-tight leading-snug mb-3 group-hover:text-gray-600 transition-colors duration-300 flex items-start justify-between gap-2">
                  {post.title}
                  <FiArrowUpRight className="text-base shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-400 mt-1" />
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 font-medium line-clamp-2">
                  {post.excerpt}
                </p>

                <span className="text-[11px] font-bold text-gray-300 mt-auto">
                  {post.date}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
