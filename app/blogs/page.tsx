'use client';
import { useState } from "react";
import {
  IconMessageCircle,
  IconCalendarEvent,
  IconUser,
  IconBookmark,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

// Blog post interface
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  comments: number;
}

// Dynamically generating 30 blog posts
const blogPosts: BlogPost[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post Title ${i + 1}`,
  author: `Author ${i + 1}`,
  date: new Date().toLocaleDateString(),
  content: `This is the summary of blog post ${
    i + 1
  }. It contains interesting information about various topics and trends. Stay tuned for more!`,
  comments: Math.floor(Math.random() * 20),
}));

// BlogCard component for each blog post
const BlogCard = ({ title, author, date, content, comments }: BlogPost) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow m-4 p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <IconBookmark size={24} className="text-blue-500" />
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center">
          <IconUser size={18} className="text-green-500 mr-2" />
          <span>{author}</span>
        </div>
        <div className="flex items-center">
          <IconCalendarEvent size={18} className="text-purple-500 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <IconMessageCircle size={18} className="text-red-500 mr-2" />
          <span>{comments} Comments</span>
        </div>
      </div>
    </div>
  );
};

// Pagination controls component
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-orange-500 hover:bg-orange-600 rounded-full disabled:opacity-50"
      >
        <IconChevronLeft size={24} />
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-orange-500 hover:bg-orange-600 rounded-full disabled:opacity-50"
      >
        <IconChevronRight size={24} />
      </button>
    </div>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts to show per page

  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const onPageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Our Blog
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Discover the latest trends, tips, and insights from our expert
        contributors.
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default BlogPage;
