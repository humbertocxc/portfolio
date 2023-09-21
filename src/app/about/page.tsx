import Link from "next/link"
import { contactEmail, githubLink, linkedinLink } from "../constants"

export default function Page() {
  return (
    <div className="relative group pt-24 inset-y-full">
      <div className="flex flex-col pb-12 gap-2">
        <h2 className="text-pink-500 font-bold pb-4">ABOUT ME</h2>
        <p>Hello, I'm Humberto Gessinger do Nascimento Mendonca, a passionate fullstack developer with a strong commitment to creating exceptional web experiences.</p>
        <p>I began my journey into the world of web development in 2018 when I pursued a Bachelor's degree in Computer Science at UFSJ but had to leave the university during the COVID-19 pandemic. In mid-2023, I resumed my educational journey in Computer Science, this time at Anhanguera.</p>
        <p>My web development career began in 2020 when I ventured into the world of freelancing, taking on diverse projects that honed my skills as a fullstack developer. Subsequently, I had the privilege of serving as a trainee fullstack developer at Passaredo from August 2021 to June 2022, where I gained invaluable hands-on experience. Following that, I contributed as a Jr Frontend Developer at Abmex from June 2022 to May 2023, where I continued to refine my skills in front-end technologies. Currently, I am working as a freelancer, eagerly taking on new challenges and projects.</p>
        <p>My toolkit encompasses a diverse array of technologies and languages, such as Reactjs, Nextjs, JavaScript, TypeScript, Nodejs, Python, Flask, Django, HTML, CSS, Docker, PostgreSQL, MongoDB, SQLite, Chakra, Tailwind, Redux, Vue, Angular, React Native, C, C++, Rust, and more. These tools empower me to craft robust and dynamic web solutions customized to meet your unique requirements.</p>
      </div>
      <div className="flex flex-col pb-12 gap-2">
        <h2 className="text-pink-500 font-bold pb-4">CONTACT</h2>
        <p>If you'd like to get in touch with me, you can find me at the following contact points:</p>
        <ul className="px-12 list-disc">
          <li>
            <span>Linkedin: </span>
            <Link target="_blank" className="font-semibold text-pink-500" href={linkedinLink}>{linkedinLink}</Link>
          </li>
          <li>
            <span>GitHub: </span>
            <Link target="_blank" className="font-semibold text-pink-500" href={githubLink}>{githubLink}</Link>
          </li>
          <li>
            <span>E-mail: </span>
            <Link className="font-semibold text-pink-500" href={'mailto:' + contactEmail}>{contactEmail}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
