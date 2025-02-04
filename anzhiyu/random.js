var posts=["2025/01/29/hello-world/","2025/02/05/Henu信安期末回忆/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };