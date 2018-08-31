export const generateFBShareLink = (url: string) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
}

export const generateLinkedinShareLink = (url: string, title: string) => {
  return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
}

export const generateTwitterShareLink = (url: string) => {
  return `https://twitter.com/home?status=Curso%20de%20instala%C3%A7%C3%B5es%20hidr%C3%A1ulicas%20-%20saiba%20mais%3A%20${url}`;
}