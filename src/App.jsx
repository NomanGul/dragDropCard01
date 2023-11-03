import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Linkedin02Icon } from "./hugeicons/Stroke";
import { NewTwitterIcon } from "./hugeicons/Stroke";
import { GithubIcon } from "./hugeicons/Stroke";
import masoomImg from "./assets/masoombahi.jpg";
import nomanImg from "./assets/nomangul.jpg";
import alexImg from "./assets/alex.jpg";
import jamesImg from "./assets/james.jpg";

import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      avatar: nomanImg,
      name: "Noman Gul",
      title: "Full-Stack Dev",
      socialLinks: [
        {
          icon: Linkedin02Icon,
          url: "https://www.linkedin.com/in/noman-gul/",
        },
        {
          icon: NewTwitterIcon,
          url: "https://twitter.com/NomanGulKhan",
        },
        {
          icon: GithubIcon,
          url: "https://github.com/NomanGul",
        },
      ],
    },
    {
      id: 2,
      avatar: masoomImg,
      name: "Masum Parvej",
      title: "UX/UI Designer",
      socialLinks: [
        {
          icon: NewTwitterIcon,
          url: "https://twitter.com/masumparvej_",
        },
        {
          icon: GithubIcon,
          url: "https://github.com/halal-lab",
        },
      ],
    },
    {
      id: 3,
      avatar: alexImg,
      name: "Alexander Smith",
      title: "Product Manager",
      socialLinks: [
        {
          icon: Linkedin02Icon,
          url: "",
        },
        {
          icon: NewTwitterIcon,
          url: "",
        },
      ],
    },
    {
      id: 4,
      avatar: jamesImg,
      name: "Melissa Taylor",
      title: "Data Science",
      socialLinks: [
        {
          icon: Linkedin02Icon,
          url: "",
        },
        {
          icon: GithubIcon,
          url: "",
        },
      ],
    },
  ]);

  return (
    <ReactSortable list={teamMembers} setList={setTeamMembers} id="team-members" animation={350} swap={false}>
      {teamMembers.map((member) => (
        <article key={member.id} className="team-member">
          <img className="team-member-avatar" src={member.avatar} alt={member.name} />
          <div className="team-member-name">
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
          <ul className="social-links">
            {member.socialLinks.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.url}>
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </ReactSortable>
  );
}

export default App;
