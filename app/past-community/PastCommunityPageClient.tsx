"use client";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeLock } from "@/components/ThemeToggle";

const coordinators = [
  {
    name: "Amay Dixit",
    github: "https://github.com/amaydixit11",
    linkedin: "https://www.linkedin.com/in/amay-dixit-462113284/",
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
    linkedin: "https://github.com/harshitap1305",
  },
  {
    name: "Sumagna Das",
    github: "https://www.github.com/sumagnadas",
    linkedin: "https://www.github.com/sumagnadas",
  },
  {
    name: "Ashish Kumar Dash",
    github: "https://github.com/Ashish-Kumar-Dash",
    linkedin: "https://github.com/Ashish-Kumar-Dash",
  },
  {
    name: "Sri Varshith Nimmagadda",
    github: "https://github.com/Sri-Varshith",
    linkedin: "https://github.com/Sri-Varshith",
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
        borderBottom: "1px solid #e5e7eb",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontSize: "17px",
          fontWeight: 600,
          color: "#1f2937",
        }}
      >
        {name}
      </span>

      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#111827" }}
        >
          <FaGithub size={20} />
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#111827" }}
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}

const maintainers = [
  {
    name: "Rahul Raj",
    github: "https://github.com/Rahul5977",
    linkedin: "https://github.com/Rahul5977",
  },
  {
  name: "Umap Utkarsh Sharad",
  github: "https://github.com/UtkarshUmap",
  linkedin: "https://github.com/UtkarshUmap",
},
{
  name: "Bodike Chaithali",
  github: "https://github.com/BodikeChaithali",
  linkedin: "https://www.linkedin.com/in/chaithali-bodike-607a26324/",
},
{
  name: "Potnuru Jagath",
  github: "https://github.com/Jagath-P",
  linkedin: "https://github.com/Jagath-P",
},
{
  name: "Khushagra Barfa",
  github: "https://github.com/Khushagra30",
  linkedin: "https://github.com/Khushagra30",
},
{
  name: "Neil Chitale",
  github: "https://github.com/Neil-ctrl",
  linkedin: "https://github.com/Neil-ctrl",
},
{
  name: "Kushaal Kumar Pothula",
  github: "https://github.com/Kushaalkumar-pothula/",
  linkedin: "https://github.com/Kushaalkumar-pothula/",
},
];

//2024-25
const coordinators2024 = [
  {
    name: "Nishchay Rajput",
    github: "https://github.com/NishchayRajput",
    linkedin: "https://www.linkedin.com/in/nishchay-rajput-83969a264/",
  },
  {
    name: "Sumit Kumar Pathak",
    github: "https://github.com/sk-pathak",
    linkedin: "https://www.linkedin.com/in/sumit-pathak-bb0a5314b/",
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
  linkedin: "https://www.linkedin.com/in/amay-dixit-462113284/",
},
{
  name: "Sumit Pathak",
  github: "https://github.com/sk-pathak",
  linkedin: "https://in.linkedin.com/in/sumit-pathak-263420225",
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
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
  {
    name: "Madhur Jain",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
];

const mentors2023 = [
  {
  name: "Sudeep Ranjan Sahoo",
  github: "https://github.com/srs-sudeep",
  linkedin: "https://www.linkedin.com/in/sudeep-ranjan-sahoo-b82355232/",
},
{
  name: "Aditya Dubey",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Arya Lanjewar",
  github: "www.github.com/AryaLanjewar3005",
  linkedin: "www.linkedln.com/in/lanjewar-arya",
},
{
  name: "Ayush Krishnan",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Javed Habib",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Roshan Jha",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Rohit Ashwani",
  github: "https://github.com/rohitashwani1",
  linkedin: "https://www.linkedin.com/in/rohit-ashwani-25654a248/",
},
{
  name: "Shubham Daule",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Siddhi Aggarwal",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Arnav Prakash Choudhury",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
];
//2022-23
const coordinators2022 = [
  {
    name: "Sudhir Sharma",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
  {
    name: "Satvik Vemuganti",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
];
const mentors2022 = [
  {
  name: "Aakash Thatte",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Abhishek Singh Khushwaha",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Ananya Hooda",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Anshu Kumar",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Sudeep Ranjan Sahoo",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Chaitanya Bisht",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Harshith Naresh Chunduri",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Madhur Jain",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Sarvesh Kumar",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
];
//2021-2022
const coordinators2021 = [
  {
    name: "Kumar Shivendu",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
  {
    name: "Shashwat Jaiswal",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
];
const mentors2021 = [
  {
  name: "Ambar",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Shikhar",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Rishi",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Shashwat",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Ashutosh",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Gopal",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Ashita",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Shivam",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Akshat",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
{
  name: "Sunit",
  github: "www.github.com",
  linkedin: "www.linkedln.com",
},
];
//2020-2021
const coordinators2020 = [
  {
    name: "Anand Panchbhai",
    github: "www.github.com",
    linkedin: "linkedin-link",
  },
  {
    name: "Rachuri Sri Pramodh",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
  {
    name: "Anees Ahmed",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
  {
    name: "Yatendra Singh",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
];
const mentors2020 = [
  {
    name: "Meghana Varanasi",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
  {
    name: "Kumar Shivendu",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
  },
  {
    name: "Ambar Mutha",
    github: "www.github.com",
    linkedin: "www.linkedln.com",
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
        padding: "16px 20px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Name */}
      <span
        style={{
          width: "280px",
          fontSize: "18px",
          fontWeight: 600,
          color: "#1f2937",
          marginLeft: "110px",
        }}
      >
        {name}
      </span>

      {/* Icons */}
      <div
        style={{
          display: "flex",
          gap: "14px",
        }}
      >
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} />
        </a>

        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} />
        </a>
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
        padding: "16px 40px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Name */}
      <span
        style={{
          width: "380px",
          fontSize: "18px",
          fontWeight: 600,
          color: "#1f2937",
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
        }}
      >
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} />
        </a>

        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  );
}

export default function PastCommunityPageClient() {
  return (
    <>
      <ThemeLock />
      <Navbar />

      <main
        style={{
          background: "#ffffff",
          minHeight: "100vh",
        }}
      >
        {/* Hero */}
        <section
          style={{
            padding: "140px 24px 90px",
            textAlign: "center",
            borderBottom: "1px solid #e5e7eb",
            background:
  "linear-gradient(120deg, #bae6fd 0%, #bfdbfe 45%, #a5b4fc 100%)",
          }}
        >
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111827",
                marginBottom: "24px",
              }}
            >
              Meet the
              <br />
              Past Community.
            </h1>

            <p
              style={{
                fontSize: "22px",
                color: "#475569",
                lineHeight: 1.7,
              }}
            >
              Honoring the members whose leadership, dedication, and
              contributions helped shape OpenLake. Their efforts laid the
              foundation for the vibrant community we have today.
            </p>
          </div>
        </section>
        <div
          style={{
            background:
  "linear-gradient(180deg, #e0f2fe 0%, #f8fbff 35%, #ffffff 100%)",
          }}
        >

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
              fontSize: "52px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#111827",
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
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            {/* Mentors */}
            <div
              style={{
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              fontSize: "52px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#111827",
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
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              style={{
                width: "60%",
                margin: "0 auto",
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              fontSize: "52px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#111827",
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
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              style={{
                width: "60%",
                margin: "0 auto",
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              fontSize: "52px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#111827",
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
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              style={{
                width: "60%",
                margin: "0 auto",
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              fontSize: "52px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#111827",
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
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              style={{
                width: "60%",
                margin: "0 auto",
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              fontSize: "52px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#111827",
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
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
              style={{
                width: "60%",
                margin: "0 auto",
                background: "#f9fafb",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #e5e7eb",
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
      </main>
      <Footer />
    </>
  );
}
