"use client";

import ResourceCard from "./ResourceCard";

export default function ResourceSection() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Featured Resources
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <ResourceCard
            title="Flutter"
            description="Learn Flutter from basics to advanced concepts for building beautiful cross-platform mobile applications."
            image="/team/flutter.jpg"
            videoLink="https://www.youtube.com/watch?v=VPvVD8t02U8"
            docLink="https://docs.flutter.dev/"
            level="Beginner"
          />

          <ResourceCard
            title="React Native"
            description="Build cross-platform Android and iOS apps using React Native and JavaScript."
            image="/team/RN.jpeg"
            videoLink="https://www.youtube.com/watch?v=0-S5a0eXPoc"
            docLink="https://reactnative.dev/docs/getting-started"
            level="Intermediate"
          />

          <ResourceCard
            title="Android Development"
            description="Learn native Android development with Android Studio, activities, layouts, and app architecture."
            image="/team/app.jpg"
            videoLink="https://www.youtube.com/watch?v=fis26HvvDII"
            docLink="https://developer.android.com/"
            level="Beginner"
          />

          <ResourceCard
            title="Kotlin"
            description="Master Kotlin, the official language for Android development, from fundamentals to advanced concepts."
            image="/team/kotlin.jpeg"
            videoLink="https://www.youtube.com/watch?v=F9UC9DY-vIU"
            docLink="https://kotlinlang.org/docs/home.html"
            level="Beginner"
          />

          <ResourceCard
            title="Swift"
            description="Learn Swift programming to build modern, high-performance iOS applications."
            image="/team/swifts.png"
            videoLink="https://www.youtube.com/watch?v=comQ1-x2a1Q"
            docLink="https://developer.apple.com/swift/"
            level="Intermediate"
          />

          <ResourceCard
            title="Firebase"
            description="Learn Firebase Authentication, Firestore, Storage, Cloud Functions, and Hosting for mobile apps."
            image="/team/firebases.png"
            videoLink="https://www.youtube.com/watch?v=9kRgVxULbag"
            docLink="https://firebase.google.com/docs"
            level="Intermediate"
          />

          <ResourceCard
            title="Dart"
            description="Learn the Dart programming language, the foundation of Flutter development."
            image="/team/darts.png"
            videoLink="https://www.youtube.com/watch?v=Ej_Pcr4uC2Q"
            docLink="https://dart.dev/guides"
            level="Beginner"
          />

          <ResourceCard
            title="Android Studio"
            description="Set up Android Studio and learn debugging, emulators, profiling, and app deployment."
            image="/team/stu.png"
            videoLink="https://www.youtube.com/watch?v=ijXjCtCXcN4"
            docLink="https://developer.android.com/studio"
            level="Beginner"
          />

          <ResourceCard
            title="Jetpack Compose"
            description="Build modern Android UIs using Jetpack Compose with declarative UI principles."
            image="/team/jc.png"
            videoLink="https://www.youtube.com/watch?v=6_wK_Ud8--0"
            docLink="https://developer.android.com/jetpack/compose"
            level="Advanced"
          />
        </div>
      </div>
    </section>
  );
}
