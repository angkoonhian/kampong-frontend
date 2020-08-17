export interface Listing {
  listing_id: String;
  organisation_id: String;
  created_by: String;
  title: String;
  category: String;
  about: String;
  tagline: String;
  mission: String;
  listing_url: String;
  pic1: String;
  pic2: String;
  pic3: String;
  pic4: String;
  pic5: String;
}

export interface ListingFAQ {
  faq_id: String;
  listing_id: String;
  question: String;
  answer: String;
}

export interface ListingSkills {
  skill_id: String;
  listing_id: String;
  skill: String;
}

export interface ListingComments {
  listing_comment_id: String;
  listing_id: String;
  user_id: String;
  comment: String;
  reply_to_id: String;
  created_on: String;
  updated_on: String;
  nickname: String;
}

export const CreateListing = {
  title: "",
  category: "",
  about: "",
  tagline: "",
  mission: "",
};

export const ListingStory = {
  overview: "",
  problem: "",
  solution: "",
  outcome: "",
};

export const DefaultListing = {
  listing_id: "default",
  organisation_id: "default",
  created_by: "default",
  title: "default",
  category: "default",
  about: "default",
  tagline: "default",
  mission: "default",
  listing_url: "default",
  pic1: "default",
  pic2: "default",
  pic3: "default",
  pic4: "default",
  pic5: "default",
};

export interface ListingStories {
  outcome: String;
  overview: String;
  problem: String;
  solution: String;
}
