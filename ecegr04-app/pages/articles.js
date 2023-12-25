import Layout from '../components/Layout';
function ArticlesPage() {
    // Dummy data 
    const articles = [
      { id: 1, title: "Article 1", content: "Content for article 1." },
      { id: 2, title: "Article 2", content: "Content for article 2." },
     
    ];
  
    return (
        <Layout>
            <div>
                <h1>Articles</h1>
                <ul>
                {articles.map(article => (
                    <li key={article.id}>
                    <p>{article.title}</p>
                    <p>{article.content}</p>
                    </li>
                ))}
                </ul>
            </div>
        </Layout>
    );
  }
  
  export default ArticlesPage;
  
