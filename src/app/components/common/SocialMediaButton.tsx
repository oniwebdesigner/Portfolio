import { ReactElement, ReactNode } from 'react';

type Props = {
  href: string;
  children?: ReactNode;
  
};

export default function SocialMediaButton(props: Props) {
  return (
    <a href={props.href}>
      <span>{props.children}</span> 
    </a>
  );
}
