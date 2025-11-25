import { useState } from 'react';
import Navbar from "../components/Navbar/Navbar"
import Hero from '../components/Blog/Hero';
import CategoryFilter from '../components/Blog/CategoryFilter';
import BlogCard from '../components/Blog/BlogCard';
import Footer from '../components/Footer/Footer';

const dummyPosts = [
  {
    id: 1,
    image_url: 'https://images.pexels.com/photos/158780/field-corn-sky-clouds-158780.jpeg',
    category: 'Agriculture',
    title: 'The Future of Sustainable Agriculture',
    date: '2024-01-15',
    author: 'Admin'
  },
  {
    id: 2,
    image_url: 'https://images.pexels.com/photos/167521/pexels-photo-167521.jpeg',
    category: 'Farming Tips',
    title: '5 Tips to Improve Your Harvest',
    date: '2024-01-21',
    author: 'John Doe'
  },
  {
    id: 3,
    image_url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    category: 'Organic Farm',
    title: 'Organic Farming: What You Need to Know',
    date: '2024-02-02',
    author: 'Jane Smith'
  }
];

const categories = [
  'All',
  'Agriculture',
  'Extensive',
  'Farming Tips',
  'Food Crops',
  'Mixed Farming',
  'Organic Farm'
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [posts] = useState(dummyPosts);  // Using local dummy posts
  const [loading] = useState(false);     // No backend → no loading state needed
  const [error] = useState(null);        // No backend → no error state needed

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter(
          post =>
            post.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-gray-50">
     <Navbar />
      <Hero />

      <main className="container mx-auto px-4 py-16">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-800"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-600">Error loading posts: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard
                key={post.id}
                image={post.image_url}
                category={post.category}
                title={post.title}
                date={post.date}
                author={post.author}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
