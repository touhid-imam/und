import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

interface SocialIcon {
  icon: React.ReactNode;
  url: string;
}

export const SocialMedia: SocialIcon[] = [
  {
    icon: <FaFacebookF />,
    url: "#",
  },
  {
    icon: <FaInstagram />,
    url: "#",
  },
  {
    icon: <FaLinkedinIn />,
    url: "#",
  },
];
