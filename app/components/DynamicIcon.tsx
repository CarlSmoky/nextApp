import { IconType } from 'react-icons';

type IconProps = {
  iconName: string;
  size: number;
}

const DynamicIcon: React.FC<IconProps> = ({ iconName, size }) => {
  const iconMap: { [key: string]: IconType } = {
    'instagram': require('react-icons/bs').BsInstagram, 
    'youtube': require('react-icons/bs').BsYoutube,
  };

  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent size={size}/> : <div>Icon Not Found</div>;
};

export default DynamicIcon;