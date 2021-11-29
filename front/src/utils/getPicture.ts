const getPicture = (picture?: string) => {
  return `/api/images/${picture ?? 'default_picture.svg'}`
}

export default getPicture
