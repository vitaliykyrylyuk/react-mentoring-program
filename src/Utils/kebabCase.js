const kebabCase = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase()
}

export default kebabCase
