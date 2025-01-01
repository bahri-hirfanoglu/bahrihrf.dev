import Parser from 'rss-parser'
import { NextResponse } from 'next/server'

const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'title', 'link', 'pubDate', 'categories', 'description']
  }
})

const MEDIUM_RSS_URL = 'https://medium.com/feed/@bahrihrf'

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>|&[^;]+;/g, '') // HTML etiketleri ve HTML entities'i kaldır
    .replace(/\s+/g, ' ') // Fazla boşlukları tek boşluğa indir
    .replace(/^\s+|\s+$/g, '') // Baş ve sondaki boşlukları kaldır
    .replace(/undefined/g, '') // undefined kelimesini kaldır
}

export async function GET() {
  try {
    const feed = await parser.parseURL(MEDIUM_RSS_URL)
    const posts = feed.items.map(item => {
      // Önce description'ı dene, yoksa content:encoded'ı kullan
      const content = item.description || item['content:encoded'] || ''
      const cleanText = stripHtml(content)
      
      return {
        title: item.title || 'Başlıksız Yazı',
        link: item.link || '#',
        pubDate: item.pubDate || new Date().toISOString(),
        categories: Array.isArray(item.categories) ? item.categories : [],
        snippet: cleanText.slice(0, 160).trim() + '...'
      }
    }).slice(0, 3)

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
} 