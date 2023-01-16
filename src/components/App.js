import React from "react";
import blogData from "../data/blog";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} text={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}



function About(props) {
  return (
    <aside>
      <img src={props.image} alt="A blog about learning React" />
      <p>{props.text}</p>
    </aside>
  );
}

function ArticleList(props) {
  return (
    <main>
      {props.posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

function Article(props) {
  let minutesEmoji = ''
  if(props.minutes<30){
      const min = Math.ceil(props.minutes/5)
      for(let i=0;i<min;i++){
          minutesEmoji += '☕️'
      }
      minutesEmoji += ' ' + props.minutes + ' min read'
  }else {
      const min = Math.ceil(props.minutes/10)
      for(let i=0;i<min;i++){
          minutesEmoji += '🍱'
      }
      minutesEmoji += ' ' + props.minutes + ' min read'
  }
  return (
  <article>
    <h3>{props.title}</h3>
    <small>{props.date || "January 1, 1970"}</small>
    <p>{props.preview}</p>
    <span>{minutesEmoji}</span>
  </article>
);
}