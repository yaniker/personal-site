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
        <p>Tallahassee, FL</p>
        <p>+1-518-258-1691</p>
        <p>
          <a className="text-blue-600 underline" href="mailto:erimyanik@gmail.com">
            erimyanik@gmail.com
          </a>
        </p>
        <p>
          <a
            className="text-blue-600 underline"
            href="https://www.linkedin.com/in/erim-yanik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/erim-yanik
          </a>
        </p>
        <p>
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
          <p className="italic">Project Lead & Machine Learning Engineer | 04/2024 – 03/2025</p>
          <ul className="list-disc list-inside">
            <li>Won SAGES’ FLS automation challenge (beat 60+ companies)</li>
            <li>Led AI prototype deployment on GPU-backed AWS EC2 in &lt;6 months</li>
            <li>Now certifying surgeons across US & Canada, cutting test costs by 25%</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">FAMU-FSU College of Engineering</h3>
          <p className="italic">Generative AI Research Scientist | 12/2024 – Present</p>
          <ul className="list-disc list-inside">
            <li>Building agentic LLMs using RL + causal knowledge graphs</li>
            <li>Cut data labeling cost by 87.6% with Active Learning</li>
          </ul>

          <p className="italic mt-2">AI Research Scientist – Postdoc | 01/2023 – 12/2024</p>
          <ul className="list-disc list-inside">
            <li>96% accuracy in combat medic sims with gaze-based attention</li>
            <li>99% data reduction via meta-learning (OR performance: 89.7%)</li>
            <li>Published in: Nature Communications Med, Computers in Biol Med</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">RPI, Troy, NY</h3>
          <p className="italic">Research Assistant – PhD | 05/2018 – 12/2022</p>
          <ul className="list-disc list-inside">
            <li>Boosted surgical skill assessment by 12.6% with VBA-Net</li>
            <li>Added neuroimaging fusion, improved results 5.7%</li>
            <li>Real-time task error detection, validated in simulation</li>
            <li>Published in: Nature Scientific Reports, JAMA Surgery, etc.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li><strong>Meta-learner:</strong> One/few-shot time-series learner (healthtech interest)</li>
          <li><strong>TrustPy:</strong> 1K+/mo downloads, AI reliability checker (PyPI, Conda-Forge)</li>
          <li><strong>Outfit recommender:</strong> ViT + LLM app using TFLite, runs locally</li>
          <li><strong>Slurm automation:</strong> Bash tool for HPC workflows</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Generative AI Engineering with LLMs – IBM (04/2025)</li>
          <li>Generative AI with LLMs – DeepLearning.AI & AWS (03/2025)</li>
          <li>AI Engineering Professional Certificate – IBM (06/2022)</li>
        </ul>
      </section>
    </div>
  );
}
