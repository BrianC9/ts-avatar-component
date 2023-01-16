type AvatarProps = {
  url: string
  alt: string
}
function Avatar({ url, alt }: AvatarProps) {
  return <img src={url} alt={alt} />
}

export default Avatar
