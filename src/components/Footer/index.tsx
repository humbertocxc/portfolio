import { githubLink, linkedinLink } from "@/app/constants";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-center w-screen h-24 px-20 border-t-1 border-zinc-400 dark:border-zinc-700"
    >
      <div className="flex items-center justify-between w-8/12">
        <FooterItem title="© 2023" description="Humberto G." link="/" />
        <FooterItem title="Github" description="humbertocxc" link={githubLink} />
        <FooterItem title="Linkedin" description="Humberto Mendonca" link={linkedinLink} />
        <FooterItem title="E-mail" description="humberto.gnm98@gmail.com" link="/" />
      </div>
    </footer>
  )
}
