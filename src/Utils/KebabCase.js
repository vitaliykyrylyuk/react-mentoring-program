const KebabCase = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase()
}

export default KebabCase
