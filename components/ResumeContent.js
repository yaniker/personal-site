export default function ResumeContent() {
  return (
    <div className="relative bg-white text-gray-900 p-6 rounded shadow max-w-4xl mx-auto">
      {/* Download button top-right */}
      <div className="absolute top-4 right-4">
        <a
          href="/resume_erim_yanik.pdf"
          download
          title="Download PDF"
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          <span className="text-sm font-medium">Download PDF</span>
        </a>
      </div>

      {/* Contact info - centered */}
      <section className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Dr. Erim Yanik</h1>
        <p>Tallahassee, FL | +1-518-258-1691</p>
        <p>
          <a className="text-blue-600 underline" href="mailto:erimyanik@gmail.com">
            erimyanik@gmail.com
          </a>
        &nbsp;|&nbsp; 
          <a
            className="text-blue-600 underline"
            href="https://www.linkedin.com/in/erim-yanik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/erim-yanik
          </a>
            &nbsp;|&nbsp; 
          <a
            className="text-blue-600 underline"
            href="https://github.com/yaniker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yaniker
          </a>
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Programming Languages:</strong> Python, Bash</li>
          <li><strong>Generative AI:</strong> Natural Language Processing (NLP), Large Language Models (LLM), Vision Transformers (ViT), Prompt Engineering, Hugging Face, LangChain, Retrieval-Augmented Generation (RAG)</li>
          <li><strong>Machine Learning & Deep Learning:</strong> TensorFlow (TF), PyTorch, Keras, Scikit-learn, Pandas, NumPy, Computer Vision, Algorithm Development, Predictive Modeling, Reinforcement Learning (RL)</li>
          <li><strong>Data engineering & Tools:</strong> Feature Engineering, Data Preprocessing, Data Visualization (Matplotlib, Seaborn), Statistical Analysis, Git, GitHub</li>
          <li><strong>High Performance Computing (HPC) & Cloud computing:</strong> Slurm, AWS, OpenAI API, Linux</li>
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>

        <div>
          <h3 className="font-bold">Startup Initiative, Remote</h3>
          <p className="font-bold">Project Lead & Machine Learning Engineer | 04/2024 – 03/2025</p>
          <ul className="list-disc list-inside">
            <li>Developed an AI system that won SAGES’ FLS automation challenge, beating over 60 companies.</li>
            <li>Led a cross-functional team to deliver a production-ready AI prototype on GPU-backed AWS EC2 in under 6 months, eliminating a month-long manual review cycle.</li>
            <li>Currently integrating with a partner’s frontend to <strong>certify general and OB-GYN surgeons across the US and Canada</strong>, projected to lower per-user testing costs by 25% ($150/test taker, $2.5M total).</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">FAMU-FSU College of Engineering</h3>
          <p className="font-bold">Generative AI Research Scientist | 12/2024 – Present</p>
          <ul className="list-disc list-inside">
            <li>Developing agentic LLMs for real-time decision support using RL and causal knowledge graphs.</li>
            <li>Reduced data labeling needs by 87.6% via Active Learning in medical settings where labeling is costly.</li>
          </ul>

          <p className="font-bold">AI Research Scientist – Postdoc | 01/2023 – 12/2024</p>
          <ul className="list-disc list-inside">
            <li>Built a novel gaze-based attention block, achieving 96% accuracy in combat medic training simulations. </li>
            <li>Reduced data needs by 99% while maintaining 89.7% accuracy in the OR with as few as one training sample, enabling scalable deployment in data-scarce hospital workflows, via meta-learning. </li>
            <li>(Published: Nature Communications Medicine; Computers in Biology and Medicine)</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">Rensselaer Polytechnic Institute (RPI), Troy, NY</h3>
          <p className="font-bold">Research Assistant – PhD | 05/2018 – 12/2022</p>
          <ul className="list-disc list-inside">
            <li>Improved automated surgical skill assessment benchmark by 12.6% via the novel Video-Based Assessment Network (VBA-Net) using instrument tracking and attention-based autoencoders. </li>
            <li>Improved VBA-Net performance by 5.7% through multimodal fusion of videos and neuroimaging.</li>
            <li>Built a real-time tool to highlight task errors, statistically validated in surgical simulations. </li>
            <li>(Published: Nature Scientific Reports; Nature Scientific Data; JAMA Surgery; The Journal of Defense Modeling and Simulation)</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://github.com/yaniker/one-shot-skill-assessment-in-high-stakes-domains-with-limited-data-via-meta-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              <strong>Meta-learner:</strong> 
            </a> PyTorch codebase for one-shot and few-shot learning on time-series tasks in low-data environments. Under active consideration for product integration by a healthtech company.
          </li>

          <li>
            <a
              href="https://github.com/yaniker/TrustPy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              <strong>TrustPy:</strong> 
            </a> 1K+/mo downloads, Python package for validating AI/ML model reliability and uncertainty before deployment. Distributed via Conda-Forge and PyPI. Actively managed with Git and CI/CD.
          </li>

          <li>
            <a
              href="https://github.com/yaniker/ClothingRecommendationApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              <strong>Android Clothing Recommendation App:</strong> 
            </a> Uses ViT + LLM head and TF-based classifier to recommend personalized, context-aware outfit pairings. Runs locally via TFLite for private and low-latency inference.
          </li>

          <li>
            <a
              href="https://github.com/yaniker/hpc-job-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              <strong>Slurm automation:</strong> 
            </a> Bash repository for automating HPC job workflows for large-scale computing.
          </li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside space-y-1">
         <li>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/UR1BFVG9FUXV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Generative AI Engineering with LLMs
            </a> – IBM (Apr 2025)
          </li>

          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/J892C4KOELP2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Generative AI with Large Language Models
            </a> – DeepLearning.AI & AWS (Mar 2025)
          </li>

          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/Q3C5JAB9GLSW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Introduction to Machine Learning in Production
            </a> – DeepLearning.AI (Mar 2024)
          </li>

          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/Y8DCBKC6LQQR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Custom Models, Layers, and Loss Functions with TensorFlow
            </a> – DeepLearning.AI (Jul 2022)
          </li>

          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/R3W39XTNPEGW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              AI Engineering Professional Certificate
            </a> – IBM (Jun 2022)
          </li>

          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/ZYYZEDNB572T"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization
            </a> – DeepLearning.AI (Jun 2022)
          </li>

          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/S8MDVPN39MR4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Neural Networks and Deep Learning
            </a> – DeepLearning.AI (Jun 2022)
          </li>

          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/BBJN6AZWBUGJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Structuring Machine Learning Projects
            </a> – DeepLearning.AI (Jun 2022)
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>PhD in Machine Learning Engineering</strong>, Rensselaer Polytechnic Institute, NY — <span className="text-gray-600">Dec 2022</span>
          </li>
          <li>
            <strong>MS in Mechanical Engineering</strong>, Southern Illinois University Edwardsville (SIUe), IL — <span className="text-gray-600">May 2018</span>
          </li>
          <li>
            <strong>BS in Mechanical Engineering</strong>, Istanbul Technical University, Turkiye — <span className="text-gray-600">Jul 2016</span>
          </li>
        </ul>
      </section>

    </div>
  );
}
