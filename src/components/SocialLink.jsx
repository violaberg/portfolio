import { memo } from 'react';

const SocialLink = memo(({ Icon, url, size = 28, className = "" }) => (
  <a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className={`transform transition duration-300 hover:scale-110 ${className}`}
>
  <Icon className="shadow-lg" size={size}/>
</a>
));

export default SocialLink;