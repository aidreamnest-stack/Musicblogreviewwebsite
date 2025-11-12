export interface Review {
  id: number;
  title: string;
  artist: string;
  genre: string;
  rating: number;
  date: string;
  imageUrl: string;
  excerpt?: string;
  fullContent?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  isFeatured?: boolean;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    title: 'Neon Horizons',
    artist: 'Synthwave Riders',
    genre: 'Synthwave',
    rating: 9,
    date: 'Nov 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1649772308558-db37c0dfae7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lJTIwc3RhZ2UlMjBkYXJrfGVufDF8fHx8MTc2MjkxNTEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'A breathtaking journey through pulsating synths and nostalgic melodies.',
    fullContent: `A breathtaking journey through pulsating synths and nostalgic melodies that captures the essence of modern synthwave while pushing boundaries. This album is a masterclass in production and emotional storytelling through sound.

The opening track "Neon Lights" immediately sets the tone with its lush pads and driving bassline. The production quality is exceptional, with each element carefully placed in the mix to create a wide, cinematic soundscape.

Throughout the album, Synthwave Riders demonstrate their mastery of the genre while adding their own unique twist. The use of vintage synthesizers combined with modern production techniques creates a sound that feels both nostalgic and fresh.

Standout tracks include "Digital Highway" with its infectious groove and "Midnight City" which showcases the more emotional side of the project. The album closes with "Horizon", a 7-minute epic that perfectly encapsulates everything that makes this record special.`,
    youtubeUrl: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/album/example',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Midnight Echoes',
    artist: 'Luna Wave',
    genre: 'Indie Rock',
    rating: 8,
    date: 'Nov 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1665587908169-86cb14e1e5d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBwdXJwbGV8ZW58MXx8fHwxNzYyOTE1MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'A haunting collection of introspective tracks that showcase raw emotion.',
    fullContent: `Luna Wave returns with their most ambitious project yet. "Midnight Echoes" is a deeply personal album that explores themes of loss, love, and redemption through a lens of indie rock sensibility.

The production is deliberately raw and intimate, allowing the emotional weight of the lyrics to take center stage. Each song feels like a conversation, with the band inviting listeners into their most vulnerable moments.`,
    youtubeUrl: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/album/example',
  },
  {
    id: 3,
    title: 'Electric Dreams',
    artist: 'Neon Pulse',
    genre: 'Electronic',
    rating: 9,
    date: 'Nov 8, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1636930245053-a5503c411cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZSUyMG5lb258ZW58MXx8fHwxNzYyODQ5NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'A masterclass in modern electronic production with innovative sound design.',
    fullContent: `Neon Pulse delivers an electrifying experience with "Electric Dreams", an album that pushes the boundaries of electronic music. The sound design is innovative and fresh, incorporating elements from various electronic subgenres.

From the opening beats to the final fade-out, this album is a journey through soundscapes that are both familiar and entirely new. The production quality is top-notch, with crisp highs and deep, resonant lows that demand to be played on a quality sound system.`,
    youtubeUrl: 'dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Analog Sessions',
    artist: 'The Vinyl Collective',
    genre: 'Jazz Fusion',
    rating: 8,
    date: 'Nov 5, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1631692362908-7fcbc77c5104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MjgzOTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Recorded live to tape, capturing the raw energy of jazz improvisation.',
    fullContent: `The Vinyl Collective takes us back to the golden age of jazz recording with "Analog Sessions". Recorded entirely to tape in a single room, this album captures the magic of live jazz performance.

Each track is a masterclass in improvisation and musical conversation. The interplay between the musicians is phenomenal, with each member given space to shine while contributing to the collective sound.`,
  },
  {
    id: 5,
    title: 'Strings & Stories',
    artist: 'Marcus Gray',
    genre: 'Folk',
    rating: 9,
    date: 'Nov 2, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1638883296886-6095d6c869d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGd1aXRhcnxlbnwxfHx8fDE3NjI5MTQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Intimate storytelling meets masterful acoustic guitar work.',
    fullContent: `Marcus Gray's "Strings & Stories" is a testament to the power of simplicity. With just an acoustic guitar and his weathered voice, Gray crafts songs that feel both timeless and urgently contemporary.

The songwriting is exceptional, with each lyric carefully chosen to maximum effect. Gray has a gift for capturing complex emotions in simple, relatable terms.`,
  },
  {
    id: 6,
    title: 'Urban Poetry',
    artist: 'The Metro Beats',
    genre: 'Hip Hop',
    rating: 8,
    date: 'Oct 30, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc2MjgzMDYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Sharp lyricism meets innovative production in this urban masterpiece.',
    fullContent: `The Metro Beats craft a sonic landscape that mirrors the rhythm of city life with "Urban Poetry". This album is a love letter to urban culture, told through sharp lyrics and innovative beats.

The production is layered and complex, with samples woven seamlessly into modern trap-influenced beats. The result is something that feels both classic and cutting-edge.`,
  },
  {
    id: 7,
    title: 'Wavelength',
    artist: 'Echo Chamber',
    genre: 'Alternative',
    rating: 7,
    date: 'Oct 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1693434998054-2784e49ca563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwYXJ0fGVufDF8fHx8MTc2MjgyOTMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'An experimental journey through ambient textures and post-rock sensibilities.',
    fullContent: `Echo Chamber's "Wavelength" is an ambitious exploration of ambient and post-rock territories. While not every experiment lands perfectly, the album's adventurous spirit is commendable and shows a band willing to take risks.`,
  },
];

export const genres = [
  'All Genres',
  'Electronic',
  'Hip Hop',
  'Indie Rock',
  'Jazz Fusion',
  'Folk',
  'Alternative',
  'Synthwave',
  'Pop',
  'R&B',
  'Metal',
  'Classical',
];
