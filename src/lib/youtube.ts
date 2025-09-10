const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export async function searchYouTube(query: string) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=12&key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error buscando videos');
  const data = await res.json();
  return data.items || [];
}