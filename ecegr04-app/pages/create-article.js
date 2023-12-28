import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout.js';

export default function CreateArticle() {
  const supabase = useSupabaseClient();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const articleData = Object.fromEntries(data);
    const { error } = await supabase
      .from('articles')
      .insert([articleData], { returning: 'minimal' });
    if (error) {
      setMessage('Sorry, an error occurred: ' + error.message);
    } else {
      setMessage('Your article has been submitted successfully!');
    }
  };
  return (
    <Layout>
      <h1>Create New Article</h1>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label className="block">
            <span>Title</span>
            <input type="text" name="title" className="mt-1 block w-full"/>
          </label>
        </div>
        <div>
          <label className="block">
            <span>Content</span>
            <textarea name="content" className="mt-1 block w-full" />
          </label>
        </div>
        <div>
          <label className="block">
            <span>Author</span>
            <input type="text" name="author" className="mt-1 block w-full"/>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Article
        </button>
      </form>
      {message && <div>{message}</div>}
    </Layout>
  );
}