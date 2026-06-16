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
    <div className="bg-neutral-bg min-h-screen py-20 px-4 sm:px-6 lg:px-8 selection:bg-primary-500 selection:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-light/50">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-neutral-dark/40 block mb-3">
              Journal & Insights
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-dark tracking-tight">
              The Editorial<span className="text-neutral-light/60">.</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                idx === 0
                  ? "bg-primary-500 text-white shadow-sm shadow-primary-500/10"
                  : "bg-neutral-light text-neutral-dark/60 hover:bg-neutral-light/80 hover:text-primary-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {featuredPost && (
            <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer">
              <div className="lg:col-span-7 aspect-16/10 sm:aspect-video w-full overflow-hidden bg-neutral-light/30 rounded-4xl border border-neutral-light">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold text-neutral-dark/40 mb-4">
                  <span className="text-neutral-dark px-2.5 py-1 bg-neutral-light rounded-lg border border-neutral-light/50">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FiClock /> {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-dark tracking-tight leading-tight mb-4 group-hover:text-primary-500 transition-colors duration-300 flex items-start gap-2">
                  {featuredPost.title}
                  <FiArrowUpRight className="text-xl shrink-0 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-neutral-dark/40" />
                </h2>
                <p className="text-neutral-dark/60 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {featuredPost.excerpt}
                </p>
                <span className="text-xs font-bold text-neutral-dark/40">
                  {featuredPost.date}
                </span>
              </div>
            </article>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pt-16 border-t border-neutral-light/50">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col cursor-pointer"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-neutral-light/30 rounded-2xl mb-5 border border-neutral-light">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="flex items-center gap-3 text-[11px] font-bold text-neutral-dark/40 mb-3">
                  <span className="text-neutral-dark">{post.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FiClock /> {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-neutral-dark tracking-tight leading-snug mb-3 group-hover:text-primary-500 transition-colors duration-300 flex items-start justify-between gap-2">
                  {post.title}
                  <FiArrowUpRight className="text-base shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-dark/40 mt-1" />
                </h3>

                <p className="text-neutral-dark/50 text-xs sm:text-sm leading-relaxed mb-4 font-medium line-clamp-2">
                  {post.excerpt}
                </p>

                <span className="text-[11px] font-bold text-neutral-dark/30 mt-auto">
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
