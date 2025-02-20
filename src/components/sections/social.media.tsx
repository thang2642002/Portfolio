import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
  youtube: string;
  facebook: string;
  tiktok: string;
  github: string;
}

const SocialMedia = (props: IProps) => {
  const { youtube, tiktok, github, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a href={youtube} target="_blank" className="highlight" title="Youtube">
        <SiYoutubeshorts size={30} />
      </a>
      <a href={tiktok} target="_blank" className="highlight" title="Tiktok">
        <FaTiktok size={30} />
      </a>
      <a href={github} target="_blank" className="highlight" title="github">
        <FaGithub size={30} />
      </a>
      <a href={facebook} target="_blank" className="highlight" title="Facebook">
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
