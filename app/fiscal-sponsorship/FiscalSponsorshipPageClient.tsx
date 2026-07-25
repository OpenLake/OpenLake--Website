"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeLock } from "@/components/ThemeToggle";
// import { Features } from "@/components/fiscal-sponsorship/Features";
// import { OrganizationGrid } from "@/components/fiscal-sponsorship/OrganizationSpotlight";
import { ContactBanner } from "@/components/fiscal-sponsorship/ContactBanner";
// import { OpenSource } from "@/components/fiscal-sponsorship/OpenSource";
import { SignIn } from "@/components/fiscal-sponsorship/SignIn";
// import { Icon } from "@/components/Icon";
import { FISCAL_COLORS, FISCAL_TYPOGRAPHY } from "@/components/fiscal-sponsorship/constants";
import { MOCK_ORGANIZATIONS } from "@/lib/fiscal-sponsorship-data";
// import { BtnArrowSvg } from "@/components/landing/btn-arrow";
import { WebHero } from "@/components/fiscal-sponsorship/WebHero";
import { ResourceSection } from "@/components/fiscal-sponsorship/ResourceSection";

const V = FISCAL_TYPOGRAPHY.sectionPaddingV;
const H = FISCAL_TYPOGRAPHY.sectionPaddingH;

const FEATURED_ORGANIZATIONS = MOCK_ORGANIZATIONS;

function MobileAppAlert() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: `0 ${H}`,
        marginTop: "-40px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "20px 32px",
          background: "linear-gradient(rgba(255,255,255,0.95), rgba(240,240,240,0.9))",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap" as const,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "-24px",
            backgroundColor: FISCAL_COLORS.primary,
            color: "white",
            transform: "rotate(45deg)",
            width: "100px",
            textAlign: "center" as const,
            padding: "4px 0",
            fontSize: "13px",
            zIndex: 40,
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            fontFamily: FISCAL_TYPOGRAPHY.bodyFont,
          }}
        >
          New!
        </div>
        <span
          style={{
            fontSize: "18px",
            fontFamily: FISCAL_TYPOGRAPHY.bodyFont,
            color: FISCAL_COLORS.text,
            flex: 1,
            minWidth: "200px",
          }}
        >
          <strong style={{ fontSize: "20px" }}>HCB Mobile is here!</strong>
          <br />
          Manage your HCB organizations on the go. Issue cards, view transactions, and more!
        </span>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexShrink: 0,
            alignItems: "center",
            flexWrap: "wrap" as const,
          }}
        >
          <a
            href="https://apps.apple.com/us/app/hcb-by-hack-club/id6465424810"
            target="_blank"
            rel="noreferrer"
            style={{ display: "block", height: "40px" }}
          >
            <img
              src="/fiscal-sponsorship/apple-web-badge.svg"
              alt="Download on the App Store"
              height={40}
              style={{ height: "40px", width: "auto" }}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hackclub.hcb"
            target="_blank"
            rel="noreferrer"
            style={{ display: "block", height: "40px" }}
          >
            <Image
              src="/fiscal-sponsorship/google-play-web-badge.webp"
              alt="Get it on Google Play"
              width={135}
              height={40}
              style={{ height: "40px", width: "auto" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileAppSection() {
  const [mobileInstalls, setMobileInstalls] = useState(0);

  useEffect(() => {
    fetch("https://hcb.hackclub.com/stats")
      .then((res) => res.json())
      .then((data) => setMobileInstalls(data.mobile_installs || 0))
      .catch(() => {});
  }, []);

  const features = [
    {
      icon: "view",
      title: "See your organization's spending",
      body: "Stay up to date on your organization's balance and transactions.",
    },
    {
      icon: "bolt-circle",
      title: "Accept Tap to Pay donations",
      body: "No extra hardware required! Tap any card against your phone.",
    },
    {
      icon: "card",
      title: "Issue, manage, and add cards",
      body: "Add cards to Apple Wallet and Google Wallet directly.",
    },
    {
      icon: "docs",
      title: "Upload receipts the easy way",
      body: "Quickly snap a photo or upload a file!",
    },
  ];

  return (
    <section
      style={{
        paddingTop: V,
        paddingBottom: V,
        paddingLeft: H,
        paddingRight: H,
        backgroundColor: FISCAL_COLORS.background,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        
        
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            background: "linear-gradient(to right, #fcc8bf, #ffce33)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {mobileInstalls > 0 && (
            <span
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                backgroundColor: "white",
                color: "#33383f",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "6px 16px",
                borderRadius: "30px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                fontFamily: FISCAL_TYPOGRAPHY.bodyFont,
                zIndex: 1,
              }}
            >
              {mobileInstalls.toLocaleString()} installs
            </span>
          )}
          
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
          section > div > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

function FeesSection() {
  return (
    <section
      id="fees"
      style={{
        paddingTop: V,
        paddingBottom: V,
        paddingLeft: H,
        paddingRight: H,
        backgroundColor: FISCAL_COLORS.lightGray,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function BuiltByHackClub() {
  return (
    <section
      style={{
        paddingTop: V,
        paddingBottom: V,
        paddingLeft: H,
        paddingRight: H,
        backgroundColor: FISCAL_COLORS.background,
      }}
    >

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const subscribeReferral = () => () => {};
const getReferralSnapshot = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("referral") || params.get("tub_program");
};

export default function FiscalSponsorshipPage() {
  const referralParam = useSyncExternalStore<string | null>(
    subscribeReferral,
    getReferralSnapshot,
    () => null,
  );

  useEffect(() => {
    if (referralParam) {
      document.cookie = `referral=${encodeURIComponent(referralParam)}; path=/; max-age=31536000`;
    }
  }, [referralParam]);

  return (
    <>
      <ThemeLock />
      <Navbar />
      <WebHero />
      <ResourceSection />
      <main id="main" tabIndex={-1}>
        {/* Hero */}
        {/* <header
          style={{
            position: "relative",
            paddingTop: "80px",
            paddingBottom: "90px",
            backgroundColor: "rgb(104, 41, 205)",
            backgroundImage: `
              radial-gradient(ellipse at 5% 5%, #ec555c 0%, rgba(236,85,92,0) 75%),
              radial-gradient(ellipse at 95% 5%, #dc71a1 0%, rgba(220,113,161,0) 75%),
              radial-gradient(ellipse at 95% 95%, #fcc8bf 0%, rgba(252,200,191,0) 75%),
              radial-gradient(ellipse at 5% 95%, #ffce33 0%, rgba(255,206,51,0) 75%)
            `,
            overflow: "hidden",
          }}
        >
          {/* Grid overlay */}
          {/* <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundSize: "48px 48px",
              backgroundImage: `linear-gradient(to right, #fcc8bf 1px, transparent 1px),
                                linear-gradient(to bottom, #fcc8bf 1px, transparent 1px)`,
              backgroundPosition: "top center",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 10%, white 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 10%, white 100%)",
              opacity: 0.18,
            }}
          />

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              paddingLeft: "clamp(24px, 4vw, 64px)",
              paddingRight: "clamp(24px, 4vw, 64px)",
              color: "white",
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "2rem",
              alignItems: "center",
            }} */} */
          {/* > */}
            {/* <div>
              <h1
                style={{
                  fontFamily: FISCAL_TYPOGRAPHY.headlineFont,
                  fontSize: "clamp(40px, 6vw, 80px)",
                  fontWeight: 400,
                  color: "white",
                  margin: 0,
                  lineHeight: 1.03,
                  maxWidth: "14ch",
                }}
              >
                <span
                  style={{
                    WebkitTextStroke: "currentColor",
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextFillColor: "transparent",
                    display: "block",
                  }}
                >
                  The foundation
                </span>{" "}
                of your nonprofit.
              </h1>

              {referralParam && (
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    padding: "1rem",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                    marginBottom: "1.5rem",
                    maxWidth: "55ch",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      color: "white",
                      fontFamily: FISCAL_TYPOGRAPHY.bodyFont,
                    }}
                  >
                    <strong>Referred by:</strong> {referralParam}
                  </p>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap" as const,
                  alignItems: "center",
                }}
              >
                
                <SignIn />
              </div>
            </div> */}

            {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> */}
              {/* <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                style={{
                  opacity: 0.5,
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  color: "white",
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 31C28 31 31 28 31 16C31 4 28 1 16 1C4 1 1 4 1 16C1 28 4 31 16 31Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.0003 8.018C15.9593 8.032 15.8963 8.056 15.8063 8.096C15.5673 8.199 15.2832 8.347 14.9183 8.556C14.1762 8.98 13.2473 9.579 12.2023 10.317C10.9954 11.1683 10.4485 11.5969 9.76695 12.1311C9.26201 12.5269 8.68316 12.9806 7.70725 13.707C7.31725 14.098 6.68325 14.098 6.29325 13.707C5.90225 13.317 5.90225 12.683 6.29325 12.293C8.5005 10.5 8.89925 10.201 11.0483 8.683C12.1283 7.921 13.1373 7.27 13.9263 6.819C14.3273 6.59 14.7063 6.394 15.0033 6.264C15.2653 6.149 15.6423 6 16.0003 6C16.3583 6 16.7353 6.149 16.9973 6.264C17.2943 6.394 17.6733 6.59 18.0743 6.819C18.8632 7.27 19.8723 7.921 20.9523 8.683C23.1012 10.201 23.5 10.5 25.7073 12.293C26.0983 12.683 26.0983 13.317 25.7073 13.707C25.3173 14.098 24.6833 14.098 24.2932 13.707C23.3173 12.9806 22.7385 12.5269 22.2336 12.1311C21.552 11.5969 21.0051 11.1683 19.7983 10.317C18.7533 9.579 17.8243 8.98 17.0823 8.556C16.7173 8.347 16.4333 8.199 16.1943 8.096C16.1043 8.056 16.0413 8.032 16.0003 8.018ZM7 24C7 23.448 7.448 23 8 23H24C24.552 23 25 23.448 25 24C25 24.552 24.552 25 24 25H8C7.448 25 7 24.552 7 24ZM15 21C15 21.552 15.448 22 16 22C16.552 22 17 21.552 17 21V14C17 13.448 16.552 13 16 13C15.448 13 15 13.448 15 14V21ZM21 22C20.448 22 20 21.552 20 21V14C20 13.448 20.448 13 21 13C21.552 13 22 13.448 22 14V21C22 21.552 21.552 22 21 22ZM10 21C10 21.552 10.448 22 11 22C11.552 22 12 21.552 12 21V14C12 13.448 11.552 13 11 13C10.448 13 10 13.448 10 14V21Z"
                  fill="currentColor"
                />
              </svg> */}
            {/* </div>
          </div>

          <style jsx>{`
            @media (max-width: 768px) {
              header > div:last-child {
                grid-template-columns: 1fr !important;
              }
              header > div:last-child > div:last-child {
                display: none;
              }
            }
          `}</style>
        </header> */}

        {/* <ContactBanner /> */}
      </main>
      <Footer />
    </>
  );
}

// function StatItem({ value, label }: { value: string; label: string }) {
//   return (
//     <div>
//       <p
//         style={{
//           fontFamily: FISCAL_TYPOGRAPHY.headlineFont,
//           fontSize: "clamp(28px, 3.5vw, 42px)",
//           fontWeight: 400,
//           color: FISCAL_COLORS.text,
//           margin: 0,
//           lineHeight: 1,
//         }}
//       >
//         {value}
//       </p>
//       <p
//         style={{
//           fontSize: "16px",
//           fontFamily: FISCAL_TYPOGRAPHY.bodyFont,
//           color: FISCAL_COLORS.text,
//           margin: 0,
//           opacity: 0.7,
//           marginTop: "4px",
//         }}
//       >
//         {label}
//       </p>
//     </div>
//   );
// }
