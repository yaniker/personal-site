export default function PublicationsContent() {
  return (
    <div className="bg-white text-gray-900 p-6 rounded shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Publications</h2>

      {/* Journal Articles */}
      <h3 className="text-xl font-semibold mb-2 mt-6">Journal Articles</h3>
      <ol className="list-decimal list-inside space-y-3">
        <li>
          Ainam, J. P., Yanik, E., Rahul, R., Kunkes, T., Cavuoto, L., Clemency, B., ... & De, S. (2025).
          Deep learning for video-based assessment of endotracheal intubation skills. <em>Communications Medicine, 5(1)</em>, 116.
        </li>
        <li>
          Yanik, E., Schwaitzberg, S., & De, S. (2024). Deep Learning for Video-Based Assessment in Surgery.
          <em> JAMA Surgery</em>.
        </li>
        <li>
          Yanik, E., Schwaitzberg, S., Yang, G., Intes, X., Norfleet, J., Hackett, M., & De, S. (2024).
          One-shot skill assessment via meta learning. <em>Computers in Biology and Medicine</em>, 108470.
        </li>
        <li>
          Yanik, E., Ainam, J. P., Fu, Y., Schwaitzberg, S., Cavuoto, L., & De, S. (2024).
          Video-based skill acquisition in laparoscopic surgery. <em>Global Surgical Education, 3(1)</em>, 26.
        </li>
        <li>
          Yanik, E., Intes, X., & De, S. (2024). Cognitive-Motor Integration in Assessing Bimanual Motor Skills.
          <em> arXiv preprint arXiv:2404.10889</em>.
        </li>
        <li>
          Kamat, A., Eastmond, C., Gao, Y., Nemani, A., Yanik, E., Cavuoto, L., ... & Intes, X. (2023).
          ASTaUND dataset. <em>Nature Scientific Data, 10(1)</em>, 699.
        </li>
        <li>
          Yanik, E., Kruger, U., Intes, X., Rahul, R., & De, S. (2023).
          Formative/summative assessment using deep learning. <em>Nature Scientific Reports, 13(1)</em>, 1038.
        </li>
        <li>
          Yanik, E., Intes, X., Kruger, U., Yan, P., Diller, D., Van Voorst, B., ... & De, S. (2022).
          Systematic review on AI for surgical skills. <em>J. of Defense Modeling and Simulation, 19(2)</em>, 159–171.
        </li>
        <li>
          Akış, T., Hamad, A., Ezan, M. A., Yanık, E., Yılancı, A., Çelik, S., & Ekren, O. (2020).
          Magnetic field & heat transfer in magnetocaloric systems. <em>Journal of Heat Transfer, 142(9)</em>, 092103.
        </li>
        <li>
          Yanik, E., & Celik, S. (2018).
          Analysis of magnetic refrigeration designs. <em>ASHRAE Transactions, 124</em>.
        </li>
      </ol>

      {/* Conference & Thesis */}
      <h3 className="text-xl font-semibold mb-2 mt-8">Conference Proceedings, Presentations & Theses</h3>
      <ol className="list-decimal list-inside space-y-3">
        <li>
          Kamat, A., Eastmond, C., Yanik, E., De, S., & Intes, X. (2023, March).
          Open-access fNIRS dataset. In <em>Clinical and Translational Neurophotonics 2023</em> (Vol. 12364, p. 123640E). SPIE.
        </li>
        <li>
          Yanik, E. (2022). <em>Deep learning for video-based assessment of surgical skills</em> (Doctoral dissertation, Rensselaer Polytechnic Institute).
        </li>
        <li>
          Yanik, E., Hamad, A., & Celik, S. (2019).
          Experimental + theoretical study of Halbach arrays. In <em>ASTFE Digital Library</em>. Begell House Inc.
        </li>
        <li>
          Yanik, E. (2018). <em>Magnetic Field and Heat Transfer Analysis...</em> Southern Illinois University at Edwardsville.
        </li>
        <li>
          Yanik, E., Hamad, A., & Celik, S. (2018).
          Halbach magnet arrays in magnetic refrigeration. In <em>ASTFE Digital Library</em>. Begell House Inc.
        </li>
      </ol>
    </div>
  );
}
