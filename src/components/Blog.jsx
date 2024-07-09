import React from "react";
import { blogPosts } from "../content";

// Functional component for the Blog section
const Blog = () => {
  return (
    // Main article container with data attribute for identification
    <article className="blog" data-page="blog">
      <header className="relative">
        {/* Blog section title */}
        <h2 className="article-title mb-[20px] text-[32px] font-fw-500 capitalize text-white-2 max-md:text-[22px] max-md:font-fw-600">
          Blog
        </h2>
      </header>
      <section className="blog-posts mb-3 mt-12">
        <ul className="blog-posts-list grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {blogPosts.map((post) => (
            // List item for each blog post
            <li
              key={post.id}
              className="blog-post-item animate-pop rounded-lg bg-eerie-black-2 bg-border-gradient-onyx shadow-shadow-4"
            >
              <a href="#" className="group z-10">
                <figure className="blog-banner-box w-full overflow-hidden rounded-lg">
                  {/* Blog post image */}
                  <img
                    src={post.imgSrc}
                    alt={post.imgAlt}
                    loading="lazy"
                    className="transition-all duration-300"
                  />
                </figure>
                <div className="blog-content p-6">
                  <div className="blog-meta mb-2 flex items-center justify-start gap-2 text-[15px] text-light-gray max-md:mb-1 max-md:text-[12px]">
                    {/* Blog post category */}
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    {/* Blog post date */}
                    <time dateTime={post.date}>
                      {new Date(post.date).toDateString()}
                    </time>
                  </div>
                  {/* Blog post title */}
                  <h3 className="blog-item-title mb-2 text-[20px] font-fw-600 text-white-2 transition-all group-hover:text-orange-yellow-crayola">
                    {post.title}
                  </h3>
                  {/* Blog post excerpt */}
                  <p className="blog-text text-[12px] leading-5 text-light-gray">
                    {post.text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
