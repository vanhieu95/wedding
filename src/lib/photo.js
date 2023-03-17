const albums = import.meta.glob('../assets/wedding-albums/*.jpg')

export async function getPhotos() {
  const photos = []

  for (const image in albums) {
    const { default: imageUrl } = await albums[image]()
    photos.push({
      src: imageUrl,
      alt: 'Ảnh cưới Trung Hiếu và Thúy Vân'
    })
  }

  return photos
}
