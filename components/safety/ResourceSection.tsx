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
            title="Python"
            description="Learn Python from basics to advanced concepts for AI, Machine Learning, Data Science, and automation."
            image="/team/py.jpeg"
            videoLink="https://www.youtube.com/watch?v=UrsmFxEIp5k"
            docLink="https://docs.python.org/3/"
            level="Beginner"
          />

          <ResourceCard
            title="NumPy"
            description="Master NumPy for numerical computing, arrays, linear algebra, and scientific computing."
            image="/team/np.webp"
            videoLink="https://www.youtube.com/watch?v=QUT1VHiLmmI"
            docLink="https://numpy.org/doc/"
            level="Beginner"
          />

          <ResourceCard
            title="Pandas"
            description="Learn Pandas for data manipulation, cleaning, analysis, and visualization."
            image="/team/pd.jpg"
            videoLink="https://www.youtube.com/watch?v=vmEHCJofslg"
            docLink="https://pandas.pydata.org/docs/"
            level="Beginner"
          />

          <ResourceCard
            title="Matplotlib"
            description="Create professional charts and visualizations using Matplotlib."
            image="/team/mt.png"
            videoLink="https://www.youtube.com/watch?v=DAQNHzOcO5A"
            docLink="https://matplotlib.org/stable/"
            level="Beginner"
          />

          <ResourceCard
            title="Scikit-learn"
            description="Build machine learning models using Scikit-learn for classification, regression, and clustering."
            image="/team/sk.png"
            videoLink="https://www.youtube.com/watch?v=0B5eIE_1vpU"
            docLink="https://scikit-learn.org/stable/"
            level="Intermediate"
          />

          <ResourceCard
            title="TensorFlow"
            description="Learn TensorFlow to build and train deep learning models for AI applications."
            image="/team/tf.png"
            videoLink="https://www.youtube.com/watch?v=tPYj3fFJGjk"
            docLink="https://www.tensorflow.org/learn"
            level="Intermediate"
          />

          <ResourceCard
            title="PyTorch"
            description="Master PyTorch for deep learning, neural networks, and AI research."
            image="/team/pt.jpeg"
            videoLink="https://www.youtube.com/watch?v=V_xro1bcAuA"
            docLink="https://pytorch.org/docs/stable/index.html"
            level="Intermediate"
          />

          <ResourceCard
            title="OpenCV"
            description="Learn computer vision using OpenCV for image processing and object detection."
            image="/team/oc.jpg"
            videoLink="https://www.youtube.com/watch?v=oXlwWbU8l2o"
            docLink="https://docs.opencv.org/"
            level="Intermediate"
          />
        </div>
      </div>
    </section>
  );
}
