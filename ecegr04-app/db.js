const db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae1b',
        title: 'Article2',
        content: 'Art#2',
        date: '04/10/2022',
        author: 'David'
      },
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae2b',
        title: 'Article 3',
        content: 'Art. #3',
        date: '04/10/2022',
        author: 'Ramirez'
      }
  
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'COMMENT #1',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
        timestamp: 1664835050,
        content: 'COMMENT #2',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6f',
        timestamp: 1664835050,
        content: 'COMMENT #3',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae1b',
        author: 'Bob McLaren'
      },
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6g',
        timestamp: 1664835050,
        content: 'COMMENT #4',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae2b',
        author: 'Bob McLaren'
      },
  
    ]
  }
  
  module.exports = db;