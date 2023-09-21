import { contactEmail, githubLink, linkedinLink } from "@/app/constants"
import FooterItem from "./FooterItem"

export default function Footer() {
  return (
    <footer
      className="flex text-center items-center justify-center w-screen py-8 px-20 border-t-1 border-zinc-400 dark:border-zinc-700"
    >
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-y-4">
        <FooterItem title="© 2023" description="Humberto G." link="/" />
        <FooterItem title="Github" description="humbertocxc" link={githubLink} />
        <FooterItem title="Linkedin" description="Humberto Mendonca" link={linkedinLink} />
        <FooterItem title="E-mail" description={contactEmail} link={'mailto:'+contactEmail} />
      </div>
    </footer>
  )
}
