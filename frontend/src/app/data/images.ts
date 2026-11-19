// PHOTOS AND TEAM: fill these in when the real photos are ready.
// Put the image files in the "public" folder (for example public/images/team-1.jpg) and write the path here.
// Anything left as "" shows a clearly labelled placeholder.

export const IMAGES = {
  aboutStory: "/images/team/team-group.jpg", // About page, beside "Who We Are": team or office photo (landscape, 4:3)
};

export interface TeamMember {
  name: string;
  role: string;
  photo: string; // for example "/images/team-1.jpg"
}

// Replace these placeholders with the real team. Set SHOW_TEAM_SECTION to false to hide the section.
export const SHOW_TEAM_SECTION = true;
export const TEAM: TeamMember[] = [
  { name: "Paul Anang Amasah", role: "Business Lead", photo: "/images/team/paul-anang-amasah.jpg" },
  // Add a portrait later: put the file in public/images/team and write its path here
  { name: "Courage Senayah", role: "IT Support", photo: "" },
];
