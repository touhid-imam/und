import presidentImage from "../assets/images/president.jpg";

interface PresidentMessage {
  heading: string;
  content: string;
  boxs: {
    box_heading: string;
    box_content: string;
  }[];
  btn_label: string;
  btn_link: string;
  photo: string;
}

const presidentData: PresidentMessage = {
  heading: "Message from the President",
  content: "We are thrilled to announce our unwavering support for the University's latest social media campaign. This initiative signifies a crucial opportunity for our community to unite, interact, and effect significant change. Have thoughts or feedback on our campaign goals? We'd love to hear from you!",
  boxs: [
    {
      box_heading: "Empowering Engagement",
      box_content: "Our primary aim is to foster a vibrant online community where every voice is heard and valued. Through active participation and collaboration, we can amplify our collective impact and bring about positive change."
    },
    {
      box_heading: "Promoting Diversity and Inclusion",
      box_content: "Diversity is our strength, and inclusivity is our foundation. We strive to create an inclusive online space that celebrates diverse perspectives, cultures, and experiences. Together, we can build a community where everyone feels welcome and respected."
    },
    {
      box_heading: "Driving Innovation 2",
      box_content: "Innovation drives progress, and social media is a powerful tool for sparking creativity and innovation. We encourage innovative thinking and bold ideas that push the boundaries of what's possible. Let's harness the power of social media to drive positive change and innovation in our community and beyond."
    },
    
  ],
  btn_label: "Share your thoughts and feedback.",
  btn_link: "https://und.edu/social-media",
  photo: presidentImage,
};

export default presidentData;
