import Image from "next/image";
import redditIcon from "../../public/social-icons/reddit.svg";
import twitterIcon from "../../public/social-icons/twitter.svg";
import discordIcon from "../../public/social-icons/discord.svg";
import instagramIcon from "../../public/social-icons/instagram.svg";

interface SocialButtonProps {
  icon: "twitter" | "reddit" | "discord" | "instagram";
  className?: string;
}

const icons = {
  twitter: twitterIcon,
  reddit: redditIcon,
  discord: discordIcon,
  instagram: instagramIcon,
};
export function SocialButton({ icon, className }: SocialButtonProps) {
  return (
    <button className={`hover:bg-gray-900 rounded-full p-2 ${className}`}>
      <Image
        src={icons[icon]}
        alt={icon}
        className="w-6 h-6"
        width={24}
        height={24}
      />
    </button>
  );
}
