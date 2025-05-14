export default function Resume() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Erim Yanik – Resume</h1>

      <section className="mb-6">
        <p><strong>Location:</strong> Tallahassee, FL</p>
        <p><strong>Phone:</strong> +1-518-258-1691</p>
        <p><strong>Email:</strong> <a className="text-blue-600 underline" href="mailto:erimyanik@gmail.com">erimyanik@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a className="text-blue-600 underline" href="https://www.linkedin.com/in/erim-yanik/" target="_blank" rel="noopener noreferrer">linkedin.com/in/erim-yanik</a></p>
        <p><strong>GitHub:</strong> <a className="text-blue-600 underline" href="https://github.com/yaniker/" target="_blank" rel="noopener noreferrer">github.com/yaniker</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Programming:</strong> Python, Bash</li>
          <li><strong>Generative AI:</strong> NLP, LLMs, ViT, Prompt Engineering, Hugging Face, LangChain, RAG</li>
          <li><strong>ML/DL:</strong> TensorFlow, PyTorch, Keras, Scikit-learn, Pandas, NumPy, CV, RL</li>
          <li><strong>Data & Tools:</strong> Feature Engineering, Preprocessing, Visualization, Git, GitHub</li>
          <li><strong>HPC & Cloud:</strong> Slurm, AWS, OpenAI API, Linux</li>
        </ul>
      </section>

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

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li><strong>Meta-learner:</strong> One/few-shot time-series learner (healthtech interest)</li>
          <li><strong>TrustPy:</strong> 1K+/mo downloads, AI reliability checker (PyPI, Conda-Forge)</li>
          <li><strong>Outfit recommender:</strong> ViT + LLM app using TFLite, runs locally</li>
          <li><strong>Slurm automation:</strong> Bash tool for HPC workflows</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Generative AI Engineering with LLMs – IBM (04/2025)</li>
          <li>Generative AI with LLMs – DeepLearning.AI & AWS (03/2025)</li>
          <li>AI Engineering Professional Certificate – IBM (06/2022)</li>
        </ul>
      </section>

      <hr className="my-8" />

      <p className="text-center">
        <a
          href="/resume_erim_yanik.pdf"
          download
          className="text-blue-600 underline font-semibold"
        >
          Download PDF Resume
        </a>
      </p>
    </main>
  );
}
