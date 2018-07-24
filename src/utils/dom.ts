export const scrollToId = (id: string) => {
  const object = document.getElementById(id);

  if (object) {
    object.scrollIntoView({
      behavior: 'smooth'
    })
  }
}