export interface Change {
  number?: number
  percentage?: number
  type: "increase" | "decrease"
}

export interface Followers {
  platform: string
  followers: number
  change: Change
  handle: string
  term: "Followers" | "Subscribers"
}

export interface Overview {
  type: "Page Views" | "Likes" | "Retweets" | "Profile Views" | "Total Views"
  platform: string
  number: number
  change: Change
}

export interface SocialMediaStats {
  followers: Followers[]
  overview: Overview[]
}
