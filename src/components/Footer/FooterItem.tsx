import Link from "next/link";

interface IFooterItem {
  description: string;
  title: string;
  link: string;
}

export default function FooterItem({ description, title, link }: IFooterItem) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-semibold text-xs">{title}</span>
      <Link href={link} target="_blank" className="underline text-sm">{description}</Link>
    </div>
  )
}
