"use client";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero, Accent } from "@/components/PageHero";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const coordinators = [
  {
    name: "Amay Dixit",
    github: "https://github.com/amaydixit11",
    linkedin: "https://www.linkedin.com/in/amaydixit11",
  },
];

const mentors = [
  {
    name: "Divyansh Dubey",
    github: "https://github.com/divyansh1705",
    linkedin: "https://www.linkedin.com/in/divyansh-dubey-b55a49280",
  },
  {
    name: "Harshit Kandpal",
    github: "https://github.com/HarK-github",
    linkedin: "https://www.linkedin.com/in/harshit-k-a746a1310/",
  },
  {
    name: "Sakshi Shamrao Jadhav",
    github: "https://github.com/sakshi1755",
    linkedin: "https://www.linkedin.com/in/sakshi-jadhav-020925282",
  },
  {
    name: "Saurav Gupta",
    github: "https://github.com/Saurav1375",
    linkedin: "https://www.linkedin.com/in/saurav1375/",
  },
  {
    name: "Rajeev Kumar",
    github: "https://github.com/rajeev-sr",
    linkedin: "https://www.linkedin.com/in/rajeev-kumar-bb143a289",
  },
  {
    name: "Slok Tulsyan",
    github: "https://github.com/Slok9931",
    linkedin: "https://www.linkedin.com/in/slok-tulsyan-003786293",
  },
  {
    name: "Aviral Saxena",
    github: "https://github.com/aviralsaxena16",
    linkedin: "https://www.linkedin.com/in/aviral-saxena-528598320/",
  },
  {
    name: "Harshita Patidar",
    github: "https://github.com/harshitap1305",
    linkedin: "",
  },
  {
    name: "Sumagna Das",
    github: "https://www.github.com/sumagnadas",
    linkedin: "",
  },
  {
    name: "Ashish Kumar Dash",
    github: "https://github.com/Ashish-Kumar-Dash",
    linkedin: "",
  },
  {
    name: "Sri Varshith Nimmagadda",
    github: "https://github.com/Sri-Varshith",
    linkedin: "",
  },
  {
    name: "Thanmaie Nagineni",
    github: "https://github.com/naginenithanmaie",
    linkedin: "https://www.linkedin.com/in/thanmaie-nagineni-454a79321/",
  },
];

function Member({
  name,
  github,
  linkedin,
}: {
  name: string;
  github: string;
  linkedin: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 20px",
        borderBottom: "1px solid var(--border)",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontSize: "17px",
          fontWeight: 600,
          color: "var(--foreground)",
        }}
      >
        {name}
      </span>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexShrink: 0,
        }}
      >
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on GitHub`}
            style={{ color: "var(--foreground)" }}
          >
            <FaGithub size={20} />
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            style={{ color: "var(--foreground)" }}
          >
            <FaLinkedin size={20} />
          </a>
        )}
      </div>
    </div>
  );
}

const maintainers = [
  {
    name: "Rahul Raj",
    github: "https://github.com/Rahul5977",
    linkedin: "",
  },
  {
  name: "Umap Utkarsh Sharad",
  github: "https://github.com/UtkarshUmap",
  linkedin: "",
},
{
  name: "Bodike Chaithali",
  github: "https://github.com/BodikeChaithali",
  linkedin: "https://www.linkedin.com/in/chaithali-bodike-607a26324/",
},
{
  name: "Potnuru Jagath",
  github: "https://github.com/Jagath-P",
  linkedin: "",
},
{
  name: "Khushagra Barfa",
  github: "https://github.com/Khushagra30",
  linkedin: "",
},
{
  name: "Neil Chitale",
  github: "https://github.com/Neil-ctrl",
  linkedin: "",
},
{
  name: "Kushaal Kumar Pothula",
  github: "https://github.com/Kushaalkumar-pothula/",
  linkedin: "",
},
];

//2024-25
const coordinators2024 = [
  {
    name: "Nishchay Rajput",
    github: "https://github.com/NishchayRajput",
    linkedin: "https://www.linkedin.com/in/nishchay18r",
  },
  {
    name: "Sumit Kumar Pathak",
    github: "https://github.com/sk-pathak",
    linkedin: "https://www.linkedin.com/in/capable-average",
  },
];

const mentors2024 = [
 {
  name: "Hemanth Kumar Reddy",
  github: "https://github.com/asp-irin",
  linkedin: "https://in.linkedin.com/in/hemanth-kumar-reddy-89668b252",
},
{
  name: "Kriti Arora",
  github: "https://github.com/kritiarora2003",
  linkedin: "https://in.linkedin.com/in/arora-kriti",
},
{
  name: "Arbaz Shaikh",
  github: "https://github.com/arbazshaikh150",
  linkedin: "https://in.linkedin.com/in/aatsshaikh",
},
{
  name: "Sachin Prakash",
  github: "https://github.com/prasachin",
  linkedin: "https://in.linkedin.com/in/sachin-prakash-24076b289",
},
{
  name: "Amay Dixit",
  github: "https://github.com/amaydixit11",
  linkedin: "https://www.linkedin.com/in/amaydixit11",
},
{
  name: "Sumit Pathak",
  github: "https://github.com/sk-pathak",
  linkedin: "https://www.linkedin.com/in/capable-average",
},
{
  name: "Shashank Pant",
  github: "https://github.com/shashankpantiitbhilai",
  linkedin: "https://in.linkedin.com/in/shashankpant12",
},
{
  name: "Divyanshu Prakash",
  github: "https://github.com/divyanshu-prakash-rx",
  linkedin: "https://in.linkedin.com/in/divyanshu-prakash-rx",
},
{
  name: "Nidhi Singh",
  github: "https://github.com/Nidhicodes",
  linkedin: "https://in.linkedin.com/in/nidhi-singh-376a171b8",
},
{
  name: "Nishant",
  github: "https://github.com/nishant9083",
  linkedin: "",
},
];

//2023-24
const coordinators2023 = [
  {
    name: "Tushar Bansal",
    github: "",
    linkedin: "https://www.linkedin.com/in/tusharbansal22",
  },
  {
    name: "Madhur Jain",
    github: "",
    linkedin: "https://www.linkedin.com/in/madhur-jain-37a243218",
  },
];

const mentors2023 = [
  {
  name: "Sudeep Ranjan Sahoo",
  github: "https://github.com/srs-sudeep",
  linkedin: "https://www.linkedin.com/in/sudeep-ranjan-sahoo-b82355232",
},
{
  name: "Aditya Dubey",
  github: "",
  linkedin: "",
},
{
  name: "Arya Lanjewar",
  github: "https://github.com/AryaLanjewar3005",
  linkedin: "https://www.linkedin.com/in/lanjewar-arya",
},
{
  name: "Ayush Krishnan",
  github: "",
  linkedin: "https://www.linkedin.com/in/aayush-krishnan05",
},
{
  name: "Javed Habib",
  github: "",
  linkedin: "https://www.linkedin.com/in/javed-habib",
},
{
  name: "Roshan Jha",
  github: "",
  linkedin: "https://www.linkedin.com/in/phool-roshan-jha",
},
{
  name: "Rohit Ashwani",
  github: "https://github.com/rohitashwani1",
  linkedin: "https://www.linkedin.com/in/rohit-ashwani-25654a248/",
},
{
  name: "Shubham Daule",
  github: "",
  linkedin: "https://www.linkedin.com/in/shubham-daule-6387a0227",
},
{
  name: "Siddhi Aggarwal",
  github: "",
  linkedin: "",
},
{
  name: "Arnav Prakash Choudhury",
  github: "",
  linkedin: "",
},
];
//2022-23
const coordinators2022 = [
  {
    name: "Sudhir Sharma",
    github: "",
    linkedin: "",
  },
  {
    name: "Satvik Vemuganti",
    github: "",
    linkedin: "",
  },
];
const mentors2022 = [
  {
  name: "Aakash Thatte",
  github: "",
  linkedin: "",
},
{
  name: "Abhishek Singh Khushwaha",
  github: "",
  linkedin: "",
},
{
  name: "Ananya Hooda",
  github: "",
  linkedin: "https://www.linkedin.com/in/04ananya",
},
{
  name: "Anshu Kumar",
  github: "",
  linkedin: "",
},
{
  name: "Sudeep Ranjan Sahoo",
  github: "",
  linkedin: "https://www.linkedin.com/in/sudeep-ranjan-sahoo-b82355232",
},
{
  name: "Chaitanya Bisht",
  github: "",
  linkedin: "",
},
{
  name: "Harshith Naresh Chunduri",
  github: "",
  linkedin: "",
},
{
  name: "Madhur Jain",
  github: "",
  linkedin: "https://www.linkedin.com/in/madhur-jain-37a243218",
},
{
  name: "Sarvesh Kumar",
  github: "",
  linkedin: "",
},
];
//2021-2022
const coordinators2021 = [
  {
    name: "Kumar Shivendu",
    github: "",
    linkedin: "https://www.linkedin.com/in/kshivendu",
  },
  {
    name: "Shashwat Jaiswal",
    github: "",
    linkedin: "https://www.linkedin.com/in/shashwatjaiswal",
  },
];
const mentors2021 = [
  {
  name: "Ambar",
  github: "",
  linkedin: "https://www.linkedin.com/in/ambarvm",
},
{
  name: "Shikhar",
  github: "",
  linkedin: "",
},
{
  name: "Rishi",
  github: "",
  linkedin: "",
},
{
  name: "Shashwat",
  github: "",
  linkedin: "",
},
{
  name: "Ashutosh",
  github: "",
  linkedin: "",
},
{
  name: "Gopal",
  github: "",
  linkedin: "https://www.linkedin.com/in/gopald27",
},
{
  name: "Ashita",
  github: "",
  linkedin: "",
},
{
  name: "Shivam",
  github: "",
  linkedin: "",
},
{
  name: "Akshat",
  github: "",
  linkedin: "",
},
{
  name: "Sunit",
  github: "",
  linkedin: "",
},
];
//2020-2021
const coordinators2020 = [
  {
    name: "Anand Panchbhai",
    github: "",
    linkedin: "https://www.linkedin.com/in/anandpanchbhai",
  },
  {
    name: "Rachuri Sri Pramodh",
    github: "",
    linkedin: "https://www.linkedin.com/in/pramodhrachuri",
  },
  {
    name: "Anees Ahmed",
    github: "",
    linkedin: "https://www.linkedin.com/in/aneesahmedpro",
  },
  {
    name: "Yatendra Singh",
    github: "",
    linkedin: "https://www.linkedin.com/in/yatendra-singh-a80920164",
  },
];
const mentors2020 = [
  {
    name: "Meghana Varanasi",
    github: "",
    linkedin: "",
  },
  {
    name: "Kumar Shivendu",
    github: "",
    linkedin: "https://www.linkedin.com/in/kshivendu",
  },
  {
    name: "Ambar Mutha",
    github: "",
    linkedin: "https://www.linkedin.com/in/ambarvm",
  },
];

function Member2024({
  name,
  github,
  linkedin,
}: {
  name: string;
  github: string;
  linkedin: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        padding: "16px 20px",
        paddingLeft: "clamp(20px, 8vw, 130px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Name */}
      <span
        style={{
          flex: 1,
          minWidth: 0,
          overflowWrap: "anywhere",
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--foreground)",
        }}
      >
        {name}
      </span>

      {/* Icons */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          flexShrink: 0,
        }}
      >
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`}>
            <FaGithub size={22} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}>
            <FaLinkedin size={22} />
          </a>
        )}
      </div>
    </div>
  );
}

function Coordinator2024({
  name,
  github,
  linkedin,
}: {
  name: string;
  github: string;
  linkedin: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        padding: "16px clamp(16px, 5vw, 40px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Name */}
      <span
        style={{
          flex: 1,
          minWidth: 0,
          overflowWrap: "anywhere",
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--foreground)",
          marginLeft: "20px",
        }}
      >
        {name}
      </span>

      {/* Icons */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          flexShrink: 0,
        }}
      >
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`}>
            <FaGithub size={22} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}>
            <FaLinkedin size={22} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function PastCommunityPageClient() {
  return (
    <>
      <Navbar />

      <main
        id="main"
        tabIndex={-1}
        style={{
          background: "var(--background)",
          minHeight: "100vh",
        }}
      >
        <PageHero
          title={
            <>
              Meet the
              <br />
              <Accent>Past Community</Accent>.
            </>
          }
          lede="Honoring the members whose leadership, dedication, and contributions helped shape OpenLake. Their efforts laid the foundation for the vibrant community we have today."
        />

        <div style={{ background: "var(--surface)", padding: "80px 0" }}>

        {/* Content */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0px auto",
            padding: "0 24px",
          }}
        >
          {/* Year */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "var(--foreground)",
            }}
          >
            2025 – 2026
          </h2>

          {/* Coordinator */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto 60px",
            }}
          >
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Coordinator
              </h3>

              {coordinators.map((member) => (
                <Member key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Mentors & Maintainers */}
          <div className="pc-duo-grid">
            {/* Mentors */}
            <div
              style={{
                minWidth: 0,
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Mentors
              </h3>

              {mentors.map((member) => (
                <Member key={member.name} {...member} />
              ))}
            </div>

            {/* Maintainers */}
            <div
              style={{
                minWidth: 0,
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
                alignSelf: "start",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Maintainers
              </h3>

              {maintainers.map((member) => (
                <Member key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
        {/* 2024-25 */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "80px auto",
            padding: "0 24px",
          }}
        >
          {/* Year */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "var(--foreground)",
            }}
          >
            2024 – 2025
          </h2>

          {/* Coordinators */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto 60px",
            }}
          >
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Coordinators
              </h3>

              {coordinators2024.map((member) => (
                <Coordinator2024 key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              className="pc-card-narrow"
              style={{
                margin: "0 auto",
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                Mentors
              </h3>

              {mentors2024.map((member) => (
                <Member2024 key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
        {/* 2023-24 */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "80px auto",
            padding: "0 24px",
          }}
        >
          {/* Year */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "var(--foreground)",
            }}
          >
            2023 – 2024
          </h2>

          {/* Coordinators */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto 60px",
            }}
          >
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Coordinators
              </h3>

              {coordinators2023.map((member) => (
                <Coordinator2024 key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              className="pc-card-narrow"
              style={{
                margin: "0 auto",
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                Mentors
              </h3>

              {mentors2023.map((member) => (
                <Member2024 key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
        {/* 2022-23 */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "80px auto",
            padding: "0 24px",
          }}
        >
          {/* Year */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "var(--foreground)",
            }}
          >
            2022 – 2023
          </h2>

          {/* Coordinators */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto 60px",
            }}
          >
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Coordinators
              </h3>

              {coordinators2022.map((member) => (
                <Coordinator2024 key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              className="pc-card-narrow"
              style={{
                margin: "0 auto",
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                Mentors
              </h3>

              {mentors2022.map((member) => (
                <Member2024 key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
        {/* 2021-22 */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "80px auto",
            padding: "0 24px",
          }}
        >
          {/* Year */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "var(--foreground)",
            }}
          >
            2021 – 2022
          </h2>

          {/* Coordinators */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto 60px",
            }}
          >
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Coordinators
              </h3>

              {coordinators2021.map((member) => (
                <Coordinator2024 key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              className="pc-card-narrow"
              style={{
                margin: "0 auto",
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                Mentors
              </h3>

              {mentors2021.map((member) => (
                <Member2024 key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
        <section
          style={{
            maxWidth: "1100px",
            margin: "80px auto",
            padding: "0 24px",
          }}
        >
          {/* Year */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "var(--foreground)",
            }}
          >
            2020 – 2021
          </h2>

          {/* Coordinators */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto 60px",
            }}
          >
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Coordinators
              </h3>

              {coordinators2020.map((member) => (
                <Coordinator2024 key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              className="pc-card-narrow"
              style={{
                margin: "0 auto",
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                Mentors
              </h3>

              {mentors2020.map((member) => (
                <Member2024 key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
        </div>

        <style>{`
          .pc-duo-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .pc-card-narrow { width: 60%; }
          @media (max-width: 900px) {
            .pc-card-narrow { width: 80%; }
          }
          @media (max-width: 767px) {
            .pc-duo-grid { grid-template-columns: 1fr; gap: 24px; }
            .pc-card-narrow { width: 100%; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
