var posts=["2025/02/05/2024-2025Henu信安期末复习/","2025/01/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };