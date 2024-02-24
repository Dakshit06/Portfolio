import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="September 16, 2019"
            subTitle="UI & UX Make 2022"
            category="Travel"
          />
          <BlogCard
            image={blogImgTwo}
            title="July 15, 2020"
            subTitle="How to become a creative designer"
            category="Documentation"
          />
          <BlogCard
            image={blogImgThree}
            title="July 14, 2020"
            subTitle="Designers thoughts about mobile UI templates"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="July 13, 2020"
            subTitle="Designer "
            category="Documentation"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="July 13, 2019"
            subTitle="Designed Make"
            category="Documentation"
          />
          <BlogCard
            image={blogImgTwo}
            title="July 14, 2020"
            subTitle="Designers thoughts about mobile UI templates"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX designed 2022"
            category="Travel"
          />
          <BlogCard
            image={blogImgThree}
            title="September 16, 2020"
            subTitle="UI & UX design"
            category="Travel"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
