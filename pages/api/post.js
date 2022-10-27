import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

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
  return arrayOfFiles
}

export function getPostSlugs() {
  return getAllFiles(postsDirectory, [])
}

export function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '')
  // const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(slug, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

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
    .map((slug) => getPostBySlug(slug, field))
    .sort((post1, post2) => (post1.data > post2.data ? -1 : 1))
  return posts
}
