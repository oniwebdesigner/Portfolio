import React, { ReactElement } from 'react'

type Props  = {
    href: string,
    children: ReactElement|string
}

export default function SocialMediaButton(props: Props) {
  return (
    <a href={props.href}>{props.children}</a>
  )
}
