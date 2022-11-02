import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const dir = 'posts'
const postsDirectory = join(process.cwd(), dir)

const getAllFiles = (dirPath, arrayOfFiles) => {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(join(dirPath, '/', file))
    }
  })
  arrayOfFiles = arrayOfFiles.map((file) =>
    file.replace(join(postsDirectory, '/'), ''),
  )
  return arrayOfFiles
}

export function getPostSlugs() {
  return getAllFiles(postsDirectory, [])
}

export function getPostBySlug(slug, fields) {
  if (typeof slug === 'object') slug = slug.join('/')
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}
  console.log(data)
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(field) {
  const slugs = getPostSlugs()
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => getPostBySlug(slug, field))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
