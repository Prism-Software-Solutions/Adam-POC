import React from 'react';
import Header from '../app/Header'; 

const Page: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <h1>Welcome to My Website</h1>
        <p>This is the main content of the page.</p>
      </main>
    </div>
  );
};

export default Page;